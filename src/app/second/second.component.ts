import { Component, OnInit } from '@angular/core';
import { Product } from '../Class/product';
import { SubService } from '../Service/sub.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
   
   data:any[]=[];
  constructor(private sub:SubService) { }

  ngOnInit() {
    this.sub.productInfo.subscribe(result =>{
      this.data.push(result);
      console.log(this.data)

    })
  }
sendData(pid:number,pname:string,pprice:number){
  
  this.sub.productInfo.next({pid:pid,pname:pname,pprice:pprice})
  



}
}
