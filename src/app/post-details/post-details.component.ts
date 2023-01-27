import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubService } from '../Service/sub.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  constructor(private sub:SubService, private route:ActivatedRoute) { }
   da:any[]=[];
  ngOnInit() {
    let id=this.route.snapshot.params['id']
    this.sub.getPostById(id).subscribe(result=>{
      console.log(result)
      this.da.push(result)
    })
  }

}
