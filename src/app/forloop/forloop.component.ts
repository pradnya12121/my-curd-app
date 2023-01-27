import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forloop',
  templateUrl: './forloop.component.html',
  styleUrls: ['./forloop.component.css']
})
export class ForloopComponent implements OnInit {
 student:any[]=[{sid:101,sname:'Pradnya'},{sid:102,sname:'Pramila'},{sid:103, sname:"Monika"}]
  constructor() { }

  ngOnInit() {
  }
  

}
