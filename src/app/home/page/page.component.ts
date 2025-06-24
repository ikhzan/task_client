import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page',
  imports: [NgFor, FontAwesomeModule, RouterLink],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {
  faAngleDoubleRight = faAngleDoubleRight
  theDate = new Date().toDateString()
  imageON = false
  imagePath = "/assets/images/intro1.png"
  selectedIndex = 0

  events = [
    {id:1,name:"Seminar 1", time: new Date().toDateString(),image:"/assets/images/intro1.png",title:"blackhat 2024 USA 2024"},
    {id:2,name:"Seminar 2", time: new Date().toDateString(),image:"/assets/images/intro2.png",title:"blackhat 2024 ASIA 2024"},
    {id:3,name:"Seminar 3", time: new Date().toDateString(),image:"/assets/images/intro3.png",title:"blackhat 2024 EUROPE 2024"},
    {id:4,name:"Seminar 4", time: new Date().toDateString(),image:"/assets/images/intro4.png",title:"blackhat 2024 USA 2024"},
    {id:5,name:"Seminar 5", time: new Date().toDateString(),image:"/assets/images/intro5.png",title:"blackhat 2024 USA 2024"},
    {id:6,name:"Seminar 6", time: new Date().toDateString(),image:"/assets/images/intro6.png",title:"blackhat 2024 USA 2024"},
  ]

  heros = [
    {id:0,imagePath:"/assets/images/intro1.png"},
    {id:1,imagePath:"/assets/images/intro2.png"},
    {id:2,imagePath:"/assets/images/intro3.png"},
    {id:3,imagePath:"/assets/images/intro4.png"},
    {id:4,imagePath:"/assets/images/intro5.png"},
    {id:5,imagePath:"/assets/images/intro6.png"},
  ]

  boards = [
    {id:1,origanization:'Security Engineer',name:"Heather adkins",filePath:'assets/boards/heather-adkins.png'},
    {id:2,origanization:'Google',name:"David Adrian",filePath:'assets/boards/david-adrian.png'},
    {id:3,origanization:'executive director',name:"Sheila a. berta",filePath:'assets/boards/sheila-ayelen-berta.png'},
    {id:4,origanization:'professor, co-founder and managing director',name:"Justine Bone",filePath:'assets/boards/justine-bone.png'},
    {id:5,origanization:'head of research',name:"thomas brandstetter",filePath:'assets/boards/thomas-brandstetter.png'},
  ]

  trainings = [
    {id:1,origanization:'Security Engineer',name:"Heather adkins",filePath:'assets/boards/heather-adkins.png'},
    {id:2,origanization:'Google',name:"David Adrian",filePath:'assets/boards/david-adrian.png'},
    {id:3,origanization:'executive director',name:"Sheila a. berta",filePath:'assets/boards/sheila-ayelen-berta.png'},
    {id:4,origanization:'professor, co-founder and managing director',name:"Justine Bone",filePath:'assets/boards/justine-bone.png'},
    {id:5,origanization:'head of research',name:"thomas brandstetter",filePath:'assets/boards/thomas-brandstetter.png'},
  ]

  corosel(){
    this.imageON  = false
  }
}
