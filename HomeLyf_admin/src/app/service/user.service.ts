import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from '../models/user';
import { apiUrl } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  token: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjIwMTg1IiwibmFtZWlkIjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEyNC4wLjAuMCBTYWZhcmkvNTM3LjM2IiwibmJmIjoxNzE1Mjc1MzY0LCJleHAiOjE3MTUyODk3NjQsImlhdCI6MTcxNTI3NTM2NCwiaXNzIjoiaHR0cHM6Ly9xZHRhcy5jb20vIiwiYXVkIjoiaHR0cHM6Ly9xZHRhcy5jb20vQWRtaW5BUEkvIn0.4r5kr17UXuw-OJW2FV4VG_BgG-qj-UQyAIYTV66N-_o';
  constructor(private http: HttpClient, private router: Router) {}
  loginSubject = new Subject<User>();

  private getHeaders(): HttpHeaders {
    // const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  }

  getHeadersWithoutToken() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    return headers;
  }

  login(data: any) {
    console.log(data);
    return this.http.post(
      'https://df40-49-36-48-125.ngrok-free.app/UserAPI/api/Account/Login',
      data
    );
  }

  getAllVendors() {
    return this.http.get(apiUrl + `/AdminAPI/api/User`, {
      headers: this.getHeaders(),
    });
  }

  deleteVendorById(id: number) {
    return this.http.delete('https://homelyf.co.in/AdminAPI/api/User/' + id, {
      headers: this.getHeaders(),
    });
  }
}
