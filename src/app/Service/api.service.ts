import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api: string = 'https://reqres.in/api/users/';
  

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient : HttpClient) { }

  getdata(){
    return this.httpClient.get<any>(this.api)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
