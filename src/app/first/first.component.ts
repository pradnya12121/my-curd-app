import { Component, OnInit } from '@angular/core';
import { SubService } from '../Service/sub.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private sub:SubService) { }
data_two:any[]=[];
  ngOnInit() {
    this.sub.productInfo.subscribe(result =>{
      this.data_two.push(result)
      console.log(this.data_two)
    })
  }

}
