import { Component, OnInit } from '@angular/core';
import { ChatService } from './services/chat.service';
import  *  as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
import { Message } from '../_models/message';


const imgFormats = ["jpeg", "jpg", "gif", "png", "apng", "svg", "bmp"];

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.less']
})
export class ChatComponent implements OnInit {
  message: string;  
  messages: Message[] = [];
  files: FileList;

  constructor(private chatService: ChatService, private http: HttpClient) { }

  sendMessage() {
    let inputEl: HTMLInputElement = $('#file')[0];
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
  }

  validFile(fileData) {
    var fileType = fileData.split("/")[0].split(":")[1];
    var fileFormat = fileData.split("/")[1].split(";")[0];
    
    switch (fileType) {
      case "image":
        if(imgFormats.includes(fileFormat)) {return "image"}
        return undefined;
    
      default:
        return undefined;
    }
  }

  onFileChange(event) { 
    if(event.target.files && event.target.files.length) {
      this.files = event.target.files;
    }
  }

  upload(inputEl) {
    this.getBase64String(inputEl.files.item(0)).then(
      (res) => this.sendFileMessage(res)
    );    
  }

  sendFileMessage(base64File) {
    var fileData = base64File.split(",");
    var fileType = this.validFile(fileData[0]);
    if(fileType != undefined) {
      let data = {
        "message": this.message,
        "file": {
          "filedata": base64File,
          "filetype": fileType
        }
      };
      this.chatService.sendFile(data);
    } else {
      this.chatService.sendMessage(this.message);
      //TODO maybe insert error here
    }
    $('#file').value = ""; 
    this.message = "";
  }

  getBase64String(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  updateMessage(update) {
    for (const i in this.messages) {
      if(this.messages[i].messageid == update.messageid) {
        this.messages[i].mood = update.mood;
      }
    }
  }
}
