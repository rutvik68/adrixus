import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  register : FormGroup = new FormGroup({
    $key: new FormControl(null),
    Name : new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z ]{2,30}$/)]),
    email:new FormControl('',[Validators.required,Validators.pattern(/.+@(gmail|yahoo)\.com$/)]),
    mobile:new FormControl('',[Validators.required,Validators.pattern(/^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/)]),
    password:new FormControl('', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]),
    linkedinurl:new FormControl('', [Validators.required,Validators.pattern(/(https):\/\/?((www)\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/)]),

  })

  login : FormGroup = new FormGroup({
    $key: new FormControl(null),
    email:new FormControl('',[Validators.required,Validators.pattern(/.+@(gmail|yahoo)\.com$/)]),
    password:new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z0-9!@#$%^&*]{8,16}$/)]),
  })
}
