import { Component, OnInit } from '@angular/core';
import { Doge } from '../doge';

@Component({
  selector: 'app-doges',
  templateUrl: './doges.component.html',
  styleUrls: ['./doges.component.css']
})

export class DogesComponent implements OnInit {

   doge: Doge = {
    id: 1,
    name: 'NormalDoge'
  };


  constructor() { }

  ngOnInit() {
  }


}
