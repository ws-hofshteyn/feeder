import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.html',
    styleUrls: ['./dashboard.css']
})

export class DashboardComponent {
    
    constructor (private http: HttpClient) {}

    ngOnInit () {
        this.http.get('/users')
            .subscribe(
                (users: any) => {
                    console.log('users', users);
                }
            ) 
    }
}