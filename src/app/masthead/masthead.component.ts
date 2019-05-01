import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication/authentication.service';
import { User } from '../_models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

const env = environment;

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.less']
})
export class MastheadComponent implements OnInit {
  user: User;
  loggedin: boolean;
  hasPic: boolean;
  profilepic: SafeUrl;

  constructor(
    private http: HttpClient,
    private auth:AuthenticationService, 
    private sanitizer:DomSanitizer
    ) {
      this.hasPic = false;
    }

  ngOnInit() {
    this.auth.currentUserValue.subscribe({
      next: userValue => this.updateUser(userValue)
    });
  }

  logout() {
    this.auth.logout();
  }

  updateUser(userValue) {
    if(userValue != undefined) {
      this.loggedin = true;
      this.user = userValue;
      var data = JSON.stringify({'username':userValue.username});
        var headers = {headers: {'Content-Type': 'application/json'}};
        this.http.post(env.apiUrl+'/userimage', 
            data, headers).toPromise()
            .then(
                (res) => {this.updateUserPicture(res);}
            );
    } else {
      this.loggedin = false;
      this.hasPic = false;
    }
  }
  
  updateUserPicture(res) {
    if(res.image != "") {
      this.hasPic = true;
      this.profilepic = this.sanitizer.bypassSecurityTrustUrl(res.image);
    }
  }

}
