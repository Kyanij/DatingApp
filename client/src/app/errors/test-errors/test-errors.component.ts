import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {
  baseUrl = 'https://localhost:5001/api';
  validationError: string[] = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  get500Error() {
    this.httpClient.get(this.baseUrl + '/buggy/server-error').subscribe(
      response => {
        if (response) console.log(response);
      },
      err => {
        console.log(err);
      }
    )
  }


  get400Error() {
    this.httpClient.get(this.baseUrl + '/buggy/bad-request').subscribe(
      response => {
        if (response) console.log(response);
      },
      err => {
        console.log(err);
      }
    )
  }


  get401Error() {
    this.httpClient.get(this.baseUrl + '/buggy/auth').subscribe(
      response => {
        if (response) console.log(response);
      },
      err => {
        console.log(err);
      }
    )
  }


  get404Error() {
    this.httpClient.get(this.baseUrl + '/buggy/not-found').subscribe(
      response => {
        if (response) console.log(response);
      },
      err => {
        console.log(err);
      }
    )
  }


  get400ValidationError() {
    this.httpClient.post(this.baseUrl + '/account/register', {}).subscribe(
      response => {
        if (response) console.log(response);
      },
      err => {
        console.log( err);
        this.validationError = err;
      }
    )
  }

}
