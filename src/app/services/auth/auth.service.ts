import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export interface LoginResponse {
  accessToken: string;
  refresh: string;
}

export interface LoginData {
  username: string
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiRoot = "http://localhost:3000/auth/login/";
  private userName = ""
  isLogged: boolean = false
  className = "AuthService"

  constructor(private http: HttpClient) { }

  async loginUser(userLoginData: LoginData): Promise<string> {
    try {
      const response = await firstValueFrom(this.http.post<LoginResponse>(this.apiRoot, userLoginData));
      console.log(this.className + " response " + response)
      if (response.accessToken) {
        localStorage.setItem('accessToken', response.accessToken)
        localStorage.setItem('username', userLoginData.username)
        console.log(`${this.className}: ${response}`)
        this.isLogged = true
      }
      return response.accessToken;
    } catch (error) {
      this.isLogged = false
      throw 'An error occurred during login. Please try again.';
    }
  }

  logoutUser() {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    this.isLogged = false
  }

  setUserName(name: string) {
    this.userName = name
  }

  getUserName() {
    return this.userName;
  }

  getAuthenticated() {
    return this.isLogged
  }
}
