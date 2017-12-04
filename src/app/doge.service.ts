import { Injectable } from '@angular/core';
import {Doge} from './doge';
import {DOGES} from './mock-doges';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class DogeService {

  constructor(private messageService: MessageService) {}

  getDoges(): Observable<Doge[]> {
    this.messageService.add('Doges were fetched');
    return of(DOGES);
}

}
