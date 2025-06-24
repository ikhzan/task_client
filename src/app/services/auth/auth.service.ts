import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export interface LoginResponse {
  access: string;
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
      if (response.access) {
        localStorage.setItem('token', response.access)
        localStorage.setItem('username', userLoginData.username)
        console.log(`${this.className}: ${response}`)
        this.isLogged = true
      }
      return response.access;
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
