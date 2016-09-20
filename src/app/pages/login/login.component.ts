import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {User} from "../../shared/user/user";
import {UserService} from "../../shared/user/user.service";
import {AppService} from "../../app.service";

@Component({
  selector: "page-login",
  providers: [UserService],
  templateUrl: "app/pages/login/login.html",
  styleUrls: ["app/pages/login/login.css"],
})

export class LoginPage {
  user: User;
  isLoggingIn = true;
  isAuthenticating = false;

  constructor(
    private _userService: UserService,
    private _appService: AppService
  ) {

    this.user = new User();
    // this.user.email = "berman.tim@gmail.com";
    // this.user.password = "Shiznit!";
  }

  submit() {
    if (!this.user.isValidEmail()) {
      alert("Enter a valid email address");
      return;
    }

    this.isAuthenticating = true;
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  login() {
    this._userService.login(this.user)
      .subscribe(
        () => {
           //console.log("login success...");
          this.isAuthenticating = false;
          this._appService.setPage("list", {});
        },
        (error) => {
          this.isAuthenticating = false;
          alert("Unfortunately we could not find your account.")
        }
      );
  }

  signUp() {
    this._userService.register(this.user)
      .subscribe(
        () => {
          alert("Your account was successfully created.");
          this.isAuthenticating = false;
          this.toggleDisplay();
        },
        (error) => {
          alert(error.json().message)
          this.isAuthenticating = false;
        }
      );
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}