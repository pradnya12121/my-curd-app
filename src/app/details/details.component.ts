import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubService } from '../Service/sub.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private sub:SubService, private route:ActivatedRoute) { }

  ngOnInit() {
    let id=this.route.snapshot.params['id']
    this.sub.getPostById(id).subscribe(result =>{
      console.log(result)
    })
  }

}
