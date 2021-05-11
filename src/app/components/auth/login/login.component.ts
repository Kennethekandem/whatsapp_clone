import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import {CometChat} from "@cometchat-pro/chat";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData: any = {};
  user : any = {};

  constructor(
      private service: AuthService,
      private router: Router,
  ) { }

  ngOnInit(): void {
  }

  login() {
    
    this.service
    .login(this.loginData)
    .subscribe((response : any) => {

      this.user = response.data._doc;
      this.getUser();
      localStorage.setItem('accessToken', response.data.accessToken);

      const uid = response.data._doc.username.replace(/\s/g, '');
      this.cometLogin(uid)
      
    }, error => {

    });
  }

  getUser() {
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  cometLogin(uid) {
        const authKey = "cdf0cba5238483562e204a0fe165724b974b2b13";

        CometChat.login(uid, authKey).then(
            (user) => {
                console.log("Login Successful:", { user });
                this.router.navigate(["/home"]);
            },
            (error) => {
                console.log("Login failed with exception:", { error });
            }
        );
    }
}
