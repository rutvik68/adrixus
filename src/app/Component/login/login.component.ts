import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Service/data.service';
import { NotificationService } from 'src/app/Service/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  email:any=""
  password:any=""

  constructor(public service : DataService,
    private route:Router,
    private notifyService:NotificationService,) { }

  ngOnInit(): void {
    this.email=localStorage.getItem('email')
    this.password=localStorage.getItem('password')
    if(this.email == null || this.password == null){
      this.notifyService.showError("Fail","you are not register")
      this.route.navigate(['/'])
    }

  }

  login(){
    let logindata=[]

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    
    let date = dd + '/' + mm + '/' + yyyy;
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    

    let x = localStorage.getItem("login");

    if(this.service.login.value['email']==this.email && this.service.login.value['password']==this.password){
  
    if(x == null){
      logindata.push({ 'date':date, 'time':time});
      localStorage.setItem("login",JSON.stringify(logindata))
    }
    else{
      logindata=JSON.parse(x)
      logindata.push({ 'date':date, 'time':time});
      localStorage.setItem("login",JSON.stringify(logindata))
    }
    console.log(logindata);
    this.route.navigate(['/dashboard'])
    }

    else{
      this.notifyService.showError("Fail","invalid credentials")
    }
  }

}
