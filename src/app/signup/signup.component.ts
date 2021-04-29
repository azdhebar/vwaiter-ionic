import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService) { }
  errorAPI:boolean=false;
  ngOnInit() {}
  goToLogin()
  {
  this.router.navigate(['/login'])
  }
  signup(form:NgForm){
    console.log(form.value)
    this.authService.signup(JSON.stringify(form.value)).subscribe(
      data=>{
        if(!data.user){
          this.errorAPI=true
          return;
        }
        this.router.navigate(['/login']);
        
      },
      error=>{
        this.errorAPI=true
        return;
      }
    )
  }

}
