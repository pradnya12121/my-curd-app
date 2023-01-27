import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../Class/userDetails';

@Component({
  selector: 'app-rectiv-form',
  templateUrl: './rectiv-form.component.html',
  styleUrls: ['./rectiv-form.component.css']
})
export class RectivFormComponent implements OnInit {
  defaultValue='Angular';
  defaultValue2='Female'
firstname:string;
lastname:string;
email:any;
phone:number;
gender:string;
course:string;
password:any;
confirmPassword:any;
isShow=false;

userInfo:User= new User()
genders:any[]=[{id:1,value:'Female'},{id:2, value:'Male'}]
  constructor() { }

  ngOnInit() {
  }
  onSubmit(data:NgForm){
    // console.log(data.value.firstname)
    this.isShow=true;
    this.userInfo.firstname=data.value.firstname;
    this.userInfo.lastname=data.value.lastname;
    this.userInfo.email=data.value.email;
    this.userInfo.phone=data.value.phone;
    this.userInfo.gender=data.value.gender;
    this.userInfo.course=data.value.course;
    this.userInfo.password=data.value.password;
    this.userInfo.confirmPassword=data.value.confirmPassword


  }

}
