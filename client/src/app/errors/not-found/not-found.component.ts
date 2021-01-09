import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  currentUserExist: boolean = false;
  constructor(private accountService: AccountService, private route: Router) { }

  ngOnInit(): void {
    this.accountService.currentUser$.subscribe(user => {
      this.currentUserExist = (user) ? true : false;

    })
  }

  goHome() {
    this.currentUserExist ? this.route.navigateByUrl('/messages') : this.route.navigateByUrl('/');
  }

}
