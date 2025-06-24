import { NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  userName = ""
  password = ""
  recaptcha = ""
  loginResponse = ""
  hideResponse = true
  error = ""
  isLoading = false
  isRememberMe = false

  authService: AuthService = inject(AuthService)
  router: Router = inject(Router)

  ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
      localStorage.removeItem('token')
    }
    if (localStorage.getItem('username') != null) {
      localStorage.removeItem('username')
    }
  }

  onRegister() {
    console.log('Register button clicked');
  }

  async onLoginUser(form: NgForm) {
   try {
      this.isLoading = true
      const userLoginData = {
        username: form.value['username'],
        password: form.value['password'],
      };

      const access = await this.authService.loginUser(userLoginData);
      if(access){
        this.loginResponse = 'Login successfully'
        console.log('login successfully')
        this.isLoading = false
        this.router.navigate(['tasks'])
      }else{
        this.loginResponse =  "Invalid credentials"
      }
    } catch (error) {
      console.error(error);
      this.loginResponse = "Login failed. Please try again."
      this.isLoading = false
    }
  }
}
