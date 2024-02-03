import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserList(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.org/users');
  }

  checkUserCredentials(userName: string, password: string) {
    if (userName == 'Admin' && password == 'Admin123') {
      return true;
    } else {
      return false;
    }
  }
}
