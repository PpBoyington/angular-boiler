import {Component, OnInit} from '@angular/core';
import {DOGES} from '../mock-doges';
import {Doge} from '../doge';

@Component({
  selector: 'app-doges',
  templateUrl: './doges.component.html',
  styleUrls: ['./doges.component.css']
})

export class DogesComponent implements OnInit {

   doges = DOGES;
   selectedDoge: Doge;


  constructor() { }

  ngOnInit() {
  }


  onSelect(doge: Doge): void {
    this.selectedDoge = doge;
  }
}
