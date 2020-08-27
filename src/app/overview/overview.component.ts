import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth-service';
import {Router} from '@angular/router';
import {UserServiceService} from '../services/user-service.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  username: any;

  constructor(private auth: AuthService, private route: Router, private userListService: UserServiceService) { }

  ngOnInit(): void {
    this.userListService.fetchUsers()
      .subscribe(() => {
        console.log(this.userListService.userList);
    });
  }

  logout(): void{
    this.auth.setToken(null);
    this.route.navigate(['/']);
    localStorage.removeItem('auth-token');
  }
}
