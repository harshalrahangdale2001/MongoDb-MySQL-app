import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:4000/auth';
  constructor() { }
  async register(username: string, password: string): Promise<any> {
    return await axios.post(`${this.baseUrl}/register`, { username, password });
  }

  async login(username: string, password: string): Promise<any> {
    return await axios.post(`${this.baseUrl}/login`, { username, password });
  }
}
