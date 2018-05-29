import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()

export class HttpService {

  constructor(private http: Http) { }

  public getNews(): Observable<any> {
    
    return this.http
      .get('http://localhost:4200/news')
      .map((response: Response) => {
        return response.json();
      })
  }

}