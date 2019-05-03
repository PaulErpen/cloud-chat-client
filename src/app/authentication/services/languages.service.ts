import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as io from "socket.io-client";
import {Observable} from "rxjs";
const env = environment;

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  private url = env.apiUrl;
  private socket;

  constructor() {
    this.socket = io(this.url);
  }

  public getAvailableLanguages = () => {
    return Observable.create((observer) => {
      this.socket.on('available languages', (languages) => {
        observer.next(languages.languages);
      });
    });
  }
}
