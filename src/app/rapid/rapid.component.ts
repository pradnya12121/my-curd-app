import { Component, OnInit } from '@angular/core';
import { RapidapiService } from '../Service/rapidapi.service';

@Component({
  selector: 'app-rapid',
  templateUrl: './rapid.component.html',
  styleUrls: ['./rapid.component.css']
})
export class RapidComponent implements OnInit {

  constructor(private rapid:RapidapiService) { }

  ngOnInit() {
    this.rapid.getWhetherData().subscribe(result =>{
      console.log(result)
    })
  }

}
