import { Component, OnInit } from '@angular/core';
import { SubService } from '../Service/sub.service';

@Component({
  selector: 'app-main-post',
  templateUrl: './main-post.component.html',
  styleUrls: ['./main-post.component.css']
})
export class MainPostComponent implements OnInit {
data:any;
  constructor(private sub:SubService) { }

  ngOnInit() {
    this.sub.getPost().subscribe(result =>{
      console.log(result)
      this.data=result;
    })
  }

}
