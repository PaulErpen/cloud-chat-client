import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  error: string;

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    if(this.username.length < 1) {
      this.error = "Please enter a username!";
    } else if(this.username.length > 50) {
      this.error = "Your username can't be longer than 50 characters!";
    }else if(this.password.length > 50) {
      this.error = "Your password can't be longer than 50 characters!";
    } else if(this.username.includes(";") || this.username.includes(" ")) {
      this.error = "Username can't contain 'spaces' or ';'!";
    } else {
      this.auth.login(this.username, this.password)
      .then(
        (res) => this.loginRedirect(res)
      );
    }
  }

  loginRedirect(res) {
    if(res != false) {
      this.router.navigate(["/"]);
    } else {
      this.error = "Login failed!";
    }
  }
}
