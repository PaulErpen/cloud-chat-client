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
    public currentUser: Observable<User>;

    constructor(private http: HttpClient, private chatService: ChatService) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }
    
    login(username: string, password: string) {
        var data = JSON.stringify({'username':username, 'password':password});
        var headers = {headers: {'Content-Type': 'application/json'}};
        return this.http.post(env.apiUrl+'/login', 
            data, headers).toPromise()
            .then(
                (res) => this.validateLogin(res)
            );
    }

    hasValidLogin() {
        var user = localStorage.getItem("currentUser");
        var headers = {headers: {'Content-Type': 'application/json'}};
        return this.http.post(env.apiUrl+'/login', 
            user, headers).toPromise();
    }

    register(username: string, password: string) {
        var data = JSON.stringify({'username':username, 'password':password});
        var headers = {headers: {'Content-Type': 'application/json'}};
        return this.http.post(env.apiUrl+'/register', 
            data,
            headers).toPromise()
            .then(
                (res) => this.validateLogin(res)
            );
    }

    validateLogin(res) {
        if(res != false) {
            localStorage.setItem('currentUser', JSON.stringify(res));
            this.currentUserSubject.next(res);
        }
        return res;
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.chatService.sendLogoutMessage(this.currentUserValue);
        this.currentUserSubject.next(null);
        window.location.reload();
    }
}
