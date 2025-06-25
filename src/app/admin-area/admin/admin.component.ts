import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFile, faKeyboard, faAngleDown, faListAlt, faUserCircle, faUserAlt, faGear, faSignOut, faMicrophone, faMessage, faPhone, faImage, faVideo, faVoicemail, faContactCard, faLocation, faL } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-admin',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, FontAwesomeModule, NgFor],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  faListSquares = faListAlt
  faAngleDown = faAngleDown;
  faUser = faUserCircle
  faUserAlt = faUserAlt
  faGear = faGear
  faSignOut = faSignOut
  faMicrophone = faMicrophone
  faMessage = faMessage
  faPhone = faPhone
  faImage = faImage
  faVideo = faVideo
  faVoicemail = faVoicemail
  faContact = faContactCard
  faLocation = faLocation
  faKeyboard = faKeyboard
  faFile = faFile
  isLogin = false
  profilePath = 'assets/user/profile.png'
  selectedDevice = 'Select Device'
  currentDateAndTime = new Date().toDateString()
  username = ''
  authService = inject(AuthService)
  router = inject(Router)

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      console.log("ADMIN Found Token ")
      this.setLogin(true)
    } else {
      this.setLogin(false)
      console.log("ADMIN token not found")
    }
  }

  constructor() {
    this.username = localStorage.getItem('username')!!
  }

  accounts = [
    { deviceID: 'SM-2024' },
    { deviceID: 'XS-2024' },
    { deviceID: 'XS-RedmiNote 14-2024' },
    { deviceID: 'SM-Samsung-asdasd' },
  ]

  destroyRef = inject(DestroyRef)

  setLogin(login: boolean) {
    this.isLogin = login
  }

  getLogin() {
    return this.isLogin
  }

  setUsername(username: string) {
    this.username = username
  }

  getUsername() {
    return this.username
  }

  logout() {
    this.setLogin(false)
    this.authService.logoutUser()
    this.router.navigate(['login']);
  }

  selectDevice(deviceID: string) {
    this.selectedDevice = deviceID
    console.log('Selected device: ' + this.selectedDevice)
    localStorage.setItem("selected-device", deviceID)
    this.router.navigate(['dashboard'], { queryParams: { "selected": deviceID } })
  }
}
