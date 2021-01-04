import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DatingApp';
  constructor(private http: HttpClient, private accountService: AccountService) { }

  ngOnInit(): any {
    this.setCurrentUser();

  }

  setCurrentUser() {
    const temp: any = localStorage.getItem('user');
    const user: User = JSON.parse(temp);
    this.accountService.setCurrentUser(user);

  }



}