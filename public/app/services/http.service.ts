import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()

export class HttpService {

  constructor(private http: Http) { }

  public getNews(): Observable<Response> {
    return this.http.get('http://localhost:3000/news').map((res) => {
      return res.json()
    })
  }

}