import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private accountService: AccountService, private toastr: ToastrService) {

  }
  // canActivate(): Observable<Boolean> {
  //   return this.accountService.currentUser$.pipe(
  //     map((user) => {
  //       if (user) return true;

  //       this.toastr.error('You shall not pass!');
  //     })
  //   )

  // }

  canActivate(): Observable<boolean> {
    return this.accountService.currentUser$.pipe(
      map((user: User) => {
        if (user) return true;

        this.toastr.error('You shall not pass!');
      })
    )
  }

}
