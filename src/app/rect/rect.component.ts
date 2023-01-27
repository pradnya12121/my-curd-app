import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UrlSegment } from '@angular/router';
import { on } from 'process';
import { User } from '../Class/userDetails';
import { FierbaseService } from '../Service/fierbase.service';

@Component({
  selector: 'app-rect',
  templateUrl: './rect.component.html',
  styleUrls: ['./rect.component.css']
})
export class RectComponent implements OnInit {
myForm:FormGroup;
  constructor(private fierbase:FierbaseService) {
  this.onCreate();
   }
userInfo:User = new User()
  ngOnInit() {
  }

  genders:any[]=[{id:1,value:'Female'},
{id:2,value:'Male'}]
  onCreate(){
    this.myForm = new FormGroup({
      'firstname': new FormControl('',[Validators.required,Validators.maxLength(5)]),
      'lastname': new FormControl('',[Validators.required,Validators.maxLength(10)]),
      'email': new FormControl('',),
      'phone': new FormControl(''),
      'gender': new FormControl(''),
      'course' : new FormControl('PHP',),
      'password': new FormControl('',[Validators.required]),
       'confirmPassword' : new FormControl('',[Validators.required],)



    })
  }
  onSubmit(){
    console.log(this.myForm.value.firstname)
    console.log(this.myForm);
    this.userInfo.firstname=this.myForm.value.firstname;
    this.userInfo.lastname=this.myForm.value.lastname;
    this.userInfo.email=this.myForm.value.email;
    this.userInfo.phone=this.myForm.value.phone;
    this.userInfo.gender=this.myForm.value.gender;
    this.userInfo.course=this.myForm.value.course;
    this.userInfo.password=this.myForm.value.password;
    this.userInfo.confirmPassword=this.myForm.value.confirmPassword;
    console.log(`All data save `,this.userInfo)
    this.fierbase.createPost(this.userInfo).subscribe(result =>{
      console.log(`come from fire`,result)
    })
  }
  get firstname(){
    return this.myForm.get('firstname')
  }
}
