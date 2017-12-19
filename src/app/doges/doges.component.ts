import {Component, OnInit} from '@angular/core';
import {Doge} from '../doge';
import {DogeService} from '../doge.service';

@Component({
  selector: 'app-doges',
  templateUrl: './doges.component.html',
  styleUrls: ['./doges.component.css']
})

export class DogesComponent implements OnInit {

  doges: Doge[];

  constructor(private dogeService: DogeService) { }

  ngOnInit() {
    this.getDoges();
  }

  getDoges(): void {
    this.dogeService.getDoges()
      .subscribe(doges => this.doges = doges);
  }
}
