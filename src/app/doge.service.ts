import { Injectable } from '@angular/core';
import {Doge} from './doge';
import {DOGES} from './mock-doges';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class DogeService {

  private dogesUrl = 'api/heroes';  // URL to web api

  constructor(private http: HttpClient,
              private messageService: MessageService) {}

  /** GET hero by id. Will 404 if id not found */
  getDoge(id: number): Observable<Doge> {
    const url = `${this.dogesUrl}/${id}`;
    return this.http.get<Doge>(url).pipe(
      tap(_ => this.log(`fetched doge id=${id}`)),
      catchError(this.handleError<Doge>(`getDoge id=${id}`))
    );
  }

  getDoges(): Observable<Doge[]> {
    this.messageService.add('DogeService: all doges were fetched');
    return this.http.get<Doge[]>(this.dogesUrl).pipe(tap(doges => this.log(`fetched doges`)),
      catchError(this.handleError('getDoges', []))
    );
  }

  /** Log a DogeService message with the DogeService */
  private log(message: string) {
    this.messageService.add('DogeService: ' + message);
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** PUT: update the hero on the server */
  updateDoge (doge: Doge): Observable<any> {
    return this.http.put(this.dogesUrl, doge, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${doge.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
  /** POST: add a new hero to the server */
  addDoge (doge: Doge): Observable<Doge> {
    return this.http.post<Doge>(this.dogesUrl, doge, httpOptions).pipe(
      tap((doge: Doge) => this.log(`added doge w/ id=${doge.id}`)),
      catchError(this.handleError<Doge>('addDoge'))
    );
  }
  /** DELETE: delete the hero from the server */
  deleteDoge (doge: Doge | number): Observable<Doge> {
    const id = typeof doge === 'number' ? doge : doge.id;
    const url = `${this.dogesUrl}/${id}`;

    return this.http.delete<Doge>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted doge id=${id}`)),
      catchError(this.handleError<Doge>('deleteDoge'))
    );
  }
}
