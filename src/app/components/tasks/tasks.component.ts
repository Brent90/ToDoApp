import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: {
    id: string,
    text: string,
    date: any
  }[];


  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this._taskService.getTasks().subscribe(task => {
      this.tasks = task;
    });
  }

  onSelect(task: Task) {
    this._taskService.setFormTask(task);
  }

  onDelete(task: Task) {
    if(confirm('Delete Task?')) {
       this._taskService.deleteTask(task);
    }
   
  }

}
