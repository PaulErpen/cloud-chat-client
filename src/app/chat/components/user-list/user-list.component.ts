import { Component, OnInit } from '@angular/core';
import { UserListService } from './services/user-list.service';
import { OnlineUser } from '../../../_models/online_user';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {
  users: OnlineUser[] = [];

    constructor(
      private userlistservice: UserListService,
      private sanitizer:DomSanitizer
      ) { }

  ngOnInit() {
    this.userlistservice.getUsers().subscribe((users) => {
      this.setUserList(users);
    });
    this.userlistservice.currentImageValue.subscribe((res) => {
      this.setUserPicture(res);
    });
  }

  setUserPicture(res) {
    if(res.image != "") {
      for (let index = 0; index < this.users.length; index++) {
        if(this.users[index].username == res.username) {
          this.users[index].profilePicture = this.sanitizer.bypassSecurityTrustUrl(res.image);
        }
      }
    }
  }

  setUserList(users) {
    this.users = users;
  }

  clickUser($event) {
    this.users = this.userlistservice.clickUser($event);
  }
}
