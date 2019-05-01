import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { OnlineUser } from '../../../../_models/online_user';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

const env = environment;

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  private url = env.apiUrl;
  private socket;
  private users: OnlineUser[] = [];
  private currentImageSubject: BehaviorSubject<Object>;
  public currentImageValue: Observable<Object>;

  constructor(private http: HttpClient) {
    this.socket = io(this.url);
    this.currentImageSubject = new BehaviorSubject<Object>({"image":""});
    this.currentImageValue = this.currentImageSubject.asObservable();
   }

  public getUsers = () => {
    return Observable.create((observer) => {
        this.socket.on('user update', (userlist) => {
            observer.next(this.setUserList(userlist.users));
        });
    });
  }

  setUserList(users) {
    var newUsers: OnlineUser[] = [];
    
    for (let user of users) {
      var isSelected = false;

      if(user != JSON.parse(localStorage.getItem("currentUser")).username) {
        for (let oldUser of this.users) {
          if(oldUser.username == user) isSelected = oldUser.isSelected;
        }
  
        newUsers.push({"username": user, "isSelected": isSelected, "profilePicture": ""});

        var data = JSON.stringify({'username':user});
        var headers = {headers: {'Content-Type': 'application/json'}};
        this.http.post(env.apiUrl+'/userimage', 
            data, headers).toPromise()
            .then(
                (res) => {this.updateUserPicture(res);}
            );
      }
    }

    this.users = newUsers;
    return this.users;
  }

  updateUserPicture(res) {
    this.currentImageSubject.next(res);
  }

  clickUser($event) {
    var username = $event.currentTarget.dataset.username;

    for(let user of this.users) {
      if(user.username == username) user.isSelected = !user.isSelected;
    }

    return this.users;
  }
  
  getSelectedUsers() {
    var ret = [];
    for(let user of this.users) {
      if(user.isSelected) ret.push(user.username);
    }
    return ret;
  }
}
