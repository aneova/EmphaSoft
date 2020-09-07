import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export interface User {
  id: number;
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  is_active: boolean;
  last_login: string;
  is_superuser: boolean;
}


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private token = null;
  constructor( private  http: HttpClient) {

  }

  login(user: User): Observable<{token: string}> {
    return this.http.post<{token: string}>('https://emphasoft-test-assignment.herokuapp.com/api-token-auth/', user)
      .pipe(
          tap(
            ({token}) => {
                  localStorage.setItem('auth-token', token);
                  this.setToken(token);
            }
          )
      );
  }

  setToken(token: string): void {
    this.token = token;
  }


  getToken(): string {
    return this.token;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  logOut(): void {
    this.setToken(null);
    localStorage.clear();
  }

}
