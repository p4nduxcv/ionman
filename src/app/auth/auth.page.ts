import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.page.html",
  styleUrls: ["./auth.page.scss"],
})
export class AuthPage implements OnInit {
  isLoading = false;

  auth = {
    email: "",
    password: "",
  };
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}
  onLogin() {
    this.isLoading = true;
    this.authService.login();
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigateByUrl("/places/tabs/discover");
    }, 1500);
  }

  onSubmit(form) {
    console.log("hit");
    console.log(form.value);
  }
}
