import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()

export class HttpService {
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // const options = { headers: headers };

    constructor(private http: Http) { }

    public getNews(): Observable<any> {
      
      return this.http
        .get('http://localhost:4200/news')
        .pipe(
            map((response: Response) => {
                return response.json();
            })
        )
    }

}