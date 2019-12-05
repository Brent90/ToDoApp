import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks = [];
  private taskSource = new BehaviorSubject<Task>({id: null, text: null, date: null});
  selectedTask = this.taskSource.asObservable();

  private stateSoure = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSoure.asObservable();

  constructor() {
    this.tasks = [
      {id: '1', text: 'Make app', date: new Date()},
      {id: '2', text: 'LeetCode', date: new Date()},
      {id: '3', text: 'Play with dog', date: new Date()},
    ]
   }

   getTasks(): Observable<Task[]> {
     return of(this.tasks);
   }

   //each time a task is clicked we subscribe to it with this method
   setFormTask(task: Task) {
     this.taskSource.next(task);
   }

     
  addTask(task: Task) {
    this.tasks.unshift(task);
  }

  updateTask(task: Task) {
    this.tasks.forEach((currentTask, idx) => {
      if(currentTask.id === task.id) {
        this.tasks.splice(idx, 1);
      }
    });
    this.tasks.unshift(task);
  }


  deleteTask(task: Task) {
    this.tasks.forEach((currentTask, idx) => {
      if(currentTask.id === task.id) {
        this.tasks.splice(idx, 1);
      }
    });
  }

  clearState() {
    this.stateSoure.next(true);
  }

}
