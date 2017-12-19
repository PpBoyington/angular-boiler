import { Component, OnInit } from '@angular/core';
import { Doge } from '../doge';
import { DogeService } from '../doge.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  doges: Doge[] = [];

  constructor(private dogeService: DogeService) { }

  ngOnInit() {
    this.getDoges();
  }

  getDoges(): void {
    this.dogeService.getDoges()
      .subscribe(doges => this.doges = doges.slice(1, 5));
  }
}
