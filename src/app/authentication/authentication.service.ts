import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChatService } from '../chat/services/chat.service';
import { User } from '../_models/user';

import { environment } from '../../environments/environment';
const env = environment;

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUserValue: Observable<User>;
    private saveUser: User;

    constructor(private http: HttpClient, private chatService: ChatService) {
        this.currentUserSubject = new BehaviorSubject<User>({"username": "", "password": ""});
        this.currentUserValue = this.currentUserSubject.asObservable();
    }
    
    login(username: string, password: string) {
        var data = JSON.stringify({'username':username, 'password':password});
        var headers = {headers: {'Content-Type': 'application/json'}};
        this.saveUser = {"username": username, "password": password};
        return this.http.post(env.apiUrl+'/login', 
            data, headers).toPromise()
            .then(
                (res) => {return this.validateLogin(res);}
            );
    }

    public getCurrentUserName() {
        return this.currentUserSubject.value.username;
    }
    
    hasValidLogin() {
        return this.currentUserSubject.value.username != "" && this.currentUserSubject.value.password != "";
    }

    register(username: string, password: string, profilepic, language: string) {
        var data = JSON.stringify({'username':username, 'password':password, 'profilepic':profilepic, 'language':language});
        var headers = {headers: {'Content-Type': 'application/json'}};
        this.saveUser = {"username": username, "password": password, "language": language};
        return this.http.post(env.apiUrl+'/register', 
            data,
            headers).toPromise()
            .then(
                (res) => {return this.validateLogin(res);}
            );
    }

    validateLogin(res) {
        if(res.result) {
            this.currentUserSubject.next(this.saveUser);
            this.chatService.sendLoginMessage(this.saveUser.username);
            localStorage.setItem("currentUser", JSON.stringify(this.saveUser));            
            this.saveUser = null;
        } else {
            this.currentUserSubject = null;
            this.saveUser = null;
        }
        return res.result;
    }

    logout() {
        this.chatService.sendLogoutMessage(this.currentUserSubject.value);
        this.currentUserSubject.next(null);
        localStorage.removeItem("currentUser");
        window.location.reload();
    }
}
