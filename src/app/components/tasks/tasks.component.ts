import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

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
    this.tasks = this._taskService.getTasks();
  }

}
