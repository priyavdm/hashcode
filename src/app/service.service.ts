import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url='http://localhost:3000';

  constructor(public http:HttpClient) { }

  insert(insertbody:any){
    return this.http.post(this.url+ '/insert', insertbody)
  }

  get(getdata:any){
    console.log(getdata);
    
    return this.http.post(this.url+'/compare',getdata)
  }
  

}
