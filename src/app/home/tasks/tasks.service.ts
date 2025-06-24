import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Task } from './task_models';


@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private urlPath = "http://localhost:3000/tasks"
  className = "TasksService"
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private http: HttpClient) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  // constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    if (this.isBrowser) {
      const data = localStorage.getItem('tasks');
      return of(data ? JSON.parse(data) as Task[] : []);
    } else {
      console.warn('localStorage is not available on the server.');
      return of([]);
    }


    // const accessToken = localStorage.getItem('accessToken');
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer token ' + accessToken,
    //   'Content-Type': 'application/json'
    // });

    // return this.http.get(this.urlPath, { headers }).pipe(
    //   map(response => {
    //     return response
    //   }),
    //   catchError(error => {
    //     console.error('Error occured:', error.message)
    //     return of([error])
    //   })
    // )
  }
}
