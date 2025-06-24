import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-boards',
  imports: [FontAwesomeModule,NgFor,RouterLink],
  templateUrl: './boards.component.html',
  styleUrl: './boards.component.css'
})
export class BoardsComponent {
faAngleDoubleRight = faAngleDoubleRight
  router = inject(Router)
  profilePath = 'assets/user/profile.png'
  textsON = true
  visibleRrowIndex: number = 0;

  branches = [
    {id:1,name:"Ambasador"},
    {id:2,name:"Asia review board"},
    {id:3,name:"Europe review board"},
    {id:4,name:"USA review board"},
    {id:5,name:"Speaker Coaches"},
  ]

  boards = [
    {id:1,origanization:'Security Engineer',name:"Heather adkins",filePath:'assets/boards/heather-adkins.png'},
    {id:2,origanization:'Google',name:"David Adrian",filePath:'assets/boards/david-adrian.png'},
    {id:3,origanization:'executive director',name:"Sheila a. berta",filePath:'assets/boards/sheila-ayelen-berta.png'},
    {id:4,origanization:'professor, co-founder and managing director',name:"Justine Bone",filePath:'assets/boards/justine-bone.png'},
    {id:5,origanization:'head of research',name:"thomas brandstetter",filePath:'assets/boards/thomas-brandstetter.png'},
  ]

  seminars = [
    {id:0,name:'Reverse Engineer',time:new Date().toDateString()},
    {id:1,name:'Android Engineer',time:new Date().toDateString()},
    {id:2,name:'Java Engineer',time:new Date().toDateString()},
    {id:3,name:'Network Engineer',time:new Date().toDateString()},
  ]

  openBoard(link:string){
    this.router.navigateByUrl("")
  }

  showTexts(id:number){
    this.visibleRrowIndex = id
  }

  openEvent(eventName:string){
    console.log("open event: " +  eventName)
    this.router.navigateByUrl("")
  }
}
