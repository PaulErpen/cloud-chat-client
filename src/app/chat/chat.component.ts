import { Component, OnInit } from '@angular/core';
import { ChatService } from './services/chat.service';
import  *  as $ from 'jquery';
import { FileUploader } from 'ng2-file-upload';
import { HttpClient } from '@angular/common/http';
import { Message } from '../_models/message';
import { environment } from '../../environments/environment';

const env = environment;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.less']
})
export class ChatComponent implements OnInit {
  message: string;  
  messages: Message[] = [];
  files: FileList;
  uploader: FileUploader = new FileUploader({ url: env.apiUrl+"/upload",
  itemAlias: 'photo',
  removeAfterUpload: true, 
  autoUpload: false });

  constructor(private chatService: ChatService, private http: HttpClient) { }

  sendMessage() {
    let inputEl: HTMLInputElement = $('#photo')[0];
    let fileCount: number = inputEl.files.length;
    if (fileCount > 0) { // a file was selected
      this.upload(inputEl);
    } else {
      this.chatService.sendMessage(this.message);
      this.message = '';
    }
  }

  ngOnInit() {
    this.chatService.sendLoginMessage();
    
    this.chatService
      .getMessages()
      .subscribe((message: Message) => {
        this.messages.push(message);
      });
    
    this.chatService
      .getUpdates()
      .subscribe((update: string) => {
        this.updateMessage(update);
      });

    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
          console.log("ImageUpload:uploaded:", item, status, response);
      };
  }

  onFileChange(event) { 
    if(event.target.files && event.target.files.length) {
      this.files = event.target.files;
    }
  }

  upload(inputEl) {
    let formData = new FormData();
    formData.append('message', this.message);
    formData.append('photo', inputEl.files.item(0));
    $('#photo')[0].value = "";
    this.chatService.sendFile(formData);
  }

  updateMessage(update) {
    for (const i in this.messages) {
      if(this.messages[i].messageid == update.messageid) {
        this.messages[i].mood = update.mood;
      }
    }
  }
}
