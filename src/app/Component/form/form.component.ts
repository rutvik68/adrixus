import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  hide = true;

  constructor(
    public service : DataService,
    private route:Router,
  ) { }

  ngOnInit(): void {
  }

  register(){

    localStorage.setItem('name',this.service.register.value['Name'])
    localStorage.setItem('email',this.service.register.value['email'])
    localStorage.setItem('moblie',this.service.register.value['moblie'])
    localStorage.setItem('password',this.service.register.value['password'])
    localStorage.setItem('linkedinurl',this.service.register.value['linkedinurl'])

    this.route.navigate(['/dashboard'])
  }

}
