import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) { }
  model: any = {};

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
      this.toastr.success('Login successfully', 'Success');
      this.router.navigateByUrl('/messages');
      console.log(response);
    })
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }



}
