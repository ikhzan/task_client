import { Component } from '@angular/core';
import { TeamService } from './team.service';
import { Team } from './team.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-team',
  imports: [NgFor],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  title = "teams"
  className = "TeamComponent"
  responseData: any[] = [];
  teams: Team[] = [];

  constructor(private teamService: TeamService){
    console.log(this.className + ' constructor')
    this.fetchTeams()
  }

  fetchTeams(){
    try{
      console.log('fetch teams')
      const response = this.teamService.getTeams();
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
      this.teams.push(this.responseData[i])
    }
  }
}
