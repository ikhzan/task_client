import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private urlPath = "http://localhost:3000/tasks"
  className = "TasksService"
  constructor(private http:HttpClient) { }

  getTasks(): Observable<any>{
    

    return this.http.get(this.urlPath).pipe(
      map(response => {
        return response
      }),
      catchError(error => {
          console.error('Error occured:',error.message)
          return of([error])
      })
    )
  }
}
