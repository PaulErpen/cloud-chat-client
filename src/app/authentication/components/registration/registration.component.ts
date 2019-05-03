import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../authentication.service';
import {Router} from '@angular/router';
import  *  as $ from 'jquery';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Message} from "../../../_models/message";
import {LanguagesService} from "../../services/languages.service";

const imgFormats = ["jpeg", "jpg", "gif", "png", "apng", "svg", "bmp"];

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {
  username: string;
  password: string;
  password_repeat: string;
  error: string;
  languageForm: FormGroup;
  languages = [];
  selectedLanguage: string;

  constructor(private auth: AuthenticationService, private router : Router, private fb: FormBuilder, private languagesService: LanguagesService) { }

  ngOnInit() {
    this.languageForm = this.fb.group({
      languageControl: [this.languages[1]]
    });

    this.languagesService
      .getAvailableLanguages()
      .subscribe((languages: any) => {
        this.languages = languages;
        this.selectedLanguage = this.languages[0].language;
      });
  }

  register() {
    if(this.password != this.password_repeat) {
      this.error = "Passwords do not match!";      
    } else if(this.username.length < 1) {
      this.error = "Please enter a username!";
    } else if(this.username.length > 50) {
      this.error = "Your username can't be longer than 50 characters!";
    }else if(this.password.length > 50) {
      this.error = "Your password can't be longer than 50 characters!";
    } else if(this.username.includes(";") || this.username.includes(" ")) {
      this.error = "Username can't contain 'spaces' or ';'!";
    } else {
      let inputEl: HTMLInputElement = $('#file')[0];
      let fileCount: number = inputEl.files.length;
      if (fileCount > 0) { // a file was selected
        if(inputEl.files.item(0).size>10000) {
          this.error = "File is too big! Maximum size is 10 kB.";
        } else {
          this.getBase64String(inputEl.files.item(0)).then(
            (result) => {
              this.validateProfilePic(result)
            }
          )
        }
      } else {
        this.auth.register(this.username, this.password, "", this.selectedLanguage).then(
          (res) => this.registerRedirect(res)
        );
      }
    }
  }

  validateProfilePic(base64) {
    if(this.validFile(base64)) {
      this.auth.register(this.username, this.password, base64, this.selectedLanguage).then(
        (res) => this.registerRedirect(res)
        )
    } else {
      this.error = "File does not have the right format! Allowed formats are .jpeg, .jpg, .gif, .png, .apng, .svg or .bmp.";
    }
    
  }

  validFile(fileData) {
    var fileFormat = fileData.split(";")[0].split("/")[1];
    return imgFormats.includes(fileFormat);
  }

  getBase64String(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  registerRedirect(res) {
    if(res != false) {
      this.router.navigate(["/"]);
    } else {
      this.error = "Registration failed!";
    }
  }
}
