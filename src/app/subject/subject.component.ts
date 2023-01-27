import { Component, OnInit } from '@angular/core';
import { SubService } from '../Service/sub.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
data:any;
  constructor(private sub:SubService) { }

  ngOnInit() {
    this.sub.getPost().subscribe(result =>{
      this.data=result;
      console.log(this.data)
    })
  }

}
