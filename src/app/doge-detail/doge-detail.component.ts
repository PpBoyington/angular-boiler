import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Doge } from '../doge';
import { DogeService } from '../doge.service';

@Component({
  selector: 'app-doge-detail',
  templateUrl: './doge-detail.component.html',
  styleUrls: [ './doge-detail.component.css' ]
})
export class DogeDetailComponent implements OnInit {
  @Input() doge: Doge;

  constructor(
    private route: ActivatedRoute,
    private dogeService: DogeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getDoge();
  }

  getDoge(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dogeService.getDoge(id)
      .subscribe(doge => this.doge = doge);
  }

  goBack(): void {
    this.location.back();
  }
}
