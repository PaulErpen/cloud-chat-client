import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import { UserListService } from '../components/user-list/services/user-list.service';
import { environment } from '../../../environments/environment';
import { AuthenticationService } from '../../authentication/authentication.service';
const env = environment;

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = env.apiUrl;
  private socket;

    constructor(
        private userlistservice: UserListService,
        private authenticationService: AuthenticationService
        ) {
        this.socket = io(this.url, {
            reconnection: true,
            reconnectionDelay: 1000,
            reconnectionDelayMax : 5000,
            reconnectionAttempts: Infinity
        });
        this.socket.on('connection', this.waitForResignUp());
    }

    public waitForResignUp() {
        var username = this.authenticationService.getCurrentUserName();
        if(username != "")
            this.socket.emit('chat signup', {"username": username});
    }

    public sendMessage(message) {
        var selectedUsers = this.userlistservice.getSelectedUsers();
        if(selectedUsers.length > 0) {
            var messageData = {
                "message": message,
                "username": JSON.parse(localStorage.getItem("currentUser")).username,
                "selectedUsers": selectedUsers
            };
            this.socket.emit('chat message', messageData);
        } else {
            var messageData = {
                "message": message,
                "username": JSON.parse(localStorage.getItem("currentUser")).username,
                "selectedUsers": []
            };
            this.socket.emit('chat broadcast', messageData);
        }
    }

    public sendLoginMessage(username) {
        this.socket.emit('chat login', {"username": username});
    }

    public sendLogoutMessage(user) {
        this.socket.emit('chat logout', {"username": user.username});
    }

    public getMessages = () => {
        return Observable.create((observer) => {
            this.socket.on('new broadcast', (message) => {
                observer.next(message);
            });
            this.socket.on('new message', (message) => {
                observer.next(message);
            });
            this.socket.on('new filebroadcast', (message) => {
                observer.next(message);
            });
            this.socket.on('new filemessage', (message) => {
                observer.next(message);
            });
        });
    };
    public getUpdates = () => {
        return Observable.create((observer) => {
            this.socket.on('update message', (message) => {
                observer.next(message);
            });
        });
    };
    public sendFile(data) {
        var selectedUsers = this.userlistservice.getSelectedUsers();
        if(selectedUsers.length > 0) {
            var messageData = {
                "message": data.message,
                "username": JSON.parse(localStorage.getItem("currentUser")).username,
                "file": data.file,
                "selectedUsers": selectedUsers
            };
            this.socket.emit('file message', messageData);
        } else {
            var messageData = {
                "message": data.message,
                "username": JSON.parse(localStorage.getItem("currentUser")).username,
                "file": data.file,
                "selectedUsers": []
            };
            this.socket.emit('file broadcast', messageData);
        }
    };

    public recoverFromDisconnect() {
        /**
         * only seems to happen if the disconnect is wanted
         */
        console.log("Trying to reconnect.");
        debugger;
    }
}
