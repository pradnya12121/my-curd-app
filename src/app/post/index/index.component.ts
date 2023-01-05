import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private post:PostService) { }
postt:Post[]=[]
  ngOnInit() {
    this.post.getPost().subscribe(result =>{
      console.log('Data come From api (Get)' + result)
      this.postt=result;
    })

  }

}
