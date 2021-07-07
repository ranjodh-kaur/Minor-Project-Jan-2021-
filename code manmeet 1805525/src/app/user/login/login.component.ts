import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { routes } from "src/app/app-routing.module";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  
  constructor( public authService : AuthService ) { }

  ngOnInit(): void {}

  

}

