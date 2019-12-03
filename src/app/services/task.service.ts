import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks = [];

  constructor() {
    this.tasks = [
      {id: '1', text: 'Make app', date: new Date()},
      {id: '2', text: 'LeetCode', date: new Date()},
      {id: '3', text: 'Play with dog', date: new Date()},
    ]
   }

   getTasks() {
     return this.tasks;
   }



}
