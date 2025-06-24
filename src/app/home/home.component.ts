import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUserDoctor, faFile, faKeyboard, faAngleDown, faHomeAlt, faListAlt, faUserCircle, faUserAlt, faGear, faSignOut, faMicrophone, faMessage,faPhone,faImage,faVideo,faVoicemail,faContactCard,faLocation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'home';
  faUserDoctor = faUserDoctor
  faHomeAlt = faHomeAlt
  faListSquares = faListAlt
  faAngleDown = faAngleDown;
  faUser = faUserCircle
  faUserAlt = faUserAlt
  faGear = faGear
  faSignOut = faSignOut
  faMicrophone =  faMicrophone
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

  currentDateAndTime = new Date().toDateString()
}
