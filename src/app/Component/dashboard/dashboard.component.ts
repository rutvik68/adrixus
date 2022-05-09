import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public api: ApiService,) { }

  data:any=[]
  logindata:any=[]

  ngOnInit(): void {
    this.api.getdata()
    .subscribe(res=>{
      this.data=res.data;
      console.log(this.data);
      
    });

    let x:any=localStorage.getItem('login')
    if(x!=null){
      this.logindata = JSON.parse(x)
    }


  }

}
