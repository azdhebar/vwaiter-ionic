import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService) { }
  errorAPI:boolean=false;
  ngOnInit() {}
  goToSignup(){
    this.router.navigate(['/register'])

  }
  login(form:NgForm){
    
    
  
    this.authService.login(JSON.stringify(form.value)).subscribe(
      data=>{
        console.log(data.token)
        if(!data.token){
          this.errorAPI=true
        }
        else{
          localStorage.setItem("token",data.token);
          this.router.navigate(['/home']);
        }
       
      },
      error=>{
        console.log(error);
        this.errorAPI=true;
      }
    )

  }
}
