import { Injectable } from '@angular/core';
import {User} from './auth-service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  public userList: User[] = [];
  headers: Headers = new Headers();
  constructor(private http: HttpClient) {}


fetchUsers(): Observable <User[]> {

      const headers = new HttpHeaders({
    'Content-Type': 'application/json',
 });
      this.headers.append('Authorization', 'Bearer ' + localStorage.getItem('auth-token'));
      const options = {
            headers
 };
      return this.http.get<User[]>('https://emphasoft-test-assignment.herokuapp.com/api/v1/users/', options)
        .pipe( tap(userList => this.userList = userList));
    }

}
