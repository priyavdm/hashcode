import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  username:string='';
  password:string='';

  constructor(public service:ServiceService){}
list:any;
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // this.insert();
  }

  insert(){
    let insertbody={
     username:this.username,
     passwords:this.password
    }
    this.service.insert(insertbody).subscribe((data)=>{
      console.log(data);
      
    })
    this.username='';
    this.password='';
  }

  get(){


    let getdata={
      username:this.username,
      passwords:this.password
     }
     console.log(getdata);
     
     this.service.get(getdata).subscribe((data)=>{
     this.list=data
     
// console.log(this.list);
   if(this.list.length>0){

      alert('login success');
     }
     else{
      alert('login failed');
      // console.log(this.list.length);
      
     }
  })
  this.username='';
  this.password='';
}
}
