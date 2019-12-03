import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  id:string;
  text:string;
  date: any;

  
  constructor(private _taskService: TaskService) {
    this._taskService.selectedTask.subscribe(task => {
      if(task.id != null || task.id != '') {
        //something was clicked so display it in form
          this.id = task.id,
          this.text = task.text,
          this.date = task.date; 
      }
    })
   }

  ngOnInit() {
  }


  generateID() {
    //https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
  });
  }

}
