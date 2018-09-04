import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Menu } from './mainMenu';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root' // 'root' - Дает доступ в любом месте кто запросит
})

export class MainService {
  private baseUrl = environment.appUrl;
  private mainMenuUrl = 'v1/menu';  // URL to menu web api
  private mediaBannersUrl = 'v1/banners';  // URL to menu web api

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
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(
      private http: HttpClient,
  ) {

  }

  getMenu(menuType: string): Observable<Menu[]> {
    const url = `${this.baseUrl}/${this.mainMenuUrl}/${menuType}`;

    return this.http.get<Menu[]>(url)
        .pipe(
            tap(heroes => console.log(`fetch menu`))
        );
  }

  getMedia(menuType: any): any {
    const url = `${this.baseUrl}/${this.mediaBannersUrl}/${menuType}`;

    return this.http.get(url)
        .pipe(
            tap(heroes => console.log(`get main banners`))
        );
  }

}
