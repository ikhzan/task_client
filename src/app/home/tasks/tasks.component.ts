import { Component } from '@angular/core';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tasks',
  imports: [NgFor],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  title = "tasks"
  className = "TasksComponent"
  responseData: any[] = [];
  tasks: Task[] = [];
  
  constructor(private taskService: TasksService){
    console.log("TaskComponent constructor")
    this.fetchTasks()
  }
  
  fetchTasks(){
    try{
      console.log('fetch tasks')
      const response = this.taskService.fetchTasks();
      response.subscribe(
        data => {
          console.log('Result data: ', data)
          this.responseData = data
          this.extractData()
        }
      )
    }catch(error){
      console.error(error)
    }
  }

  extractData(){
    for(let i=0; i < this.responseData.length; i++){
      this.tasks.push(this.responseData[i])
    }
  }

}
