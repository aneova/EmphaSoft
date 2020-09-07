import { Component, OnInit } from '@angular/core';
import {AuthService, User} from '../services/auth-service';
import {Router} from '@angular/router';
import {UserServiceService} from '../services/user-service.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  username: string;
  userList: User[] = [];
  sorted: boolean;

  constructor(private auth: AuthService, private route: Router, private userListService: UserServiceService) { }

  ngOnInit(): void {
    this.userListService.fetchUsers()
      .subscribe(() => {
        this.userList = this.userListService.userList;
    });
  }

  logout(): void{
    this.auth.setToken(null);
    this.route.navigate(['/']);
    localStorage.removeItem('auth-token');
  }

  sort(): void {
    if (this.sorted)
    {
     this.userList.sort((a,b) => (b.id - a.id));
     this.sorted = false;
    }
    else {
      this.sorted = true;
      this.userList.sort((a, b) => (a.id - b.id));
    }
  }
}
