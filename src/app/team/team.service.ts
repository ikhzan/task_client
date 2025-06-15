import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private urlPath = "http://localhost:3000/teams"
  className = "TeamService"

  constructor(private http:HttpClient) { }

  getTeams(): Observable<any>{
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
