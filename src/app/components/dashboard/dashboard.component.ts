import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { LanguageModalComponent } from './../modals/language-modal/language-modal.component';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { HttpService } from './../../services/http.service';
import { FeedModel } from './../../models/feed.model';
import { Observable, Subscription } from 'rxjs';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, AfterViewInit {

    news: FeedModel[] = [];
    newsToDisplay: FeedModel[] = [];
    currentPage = 1;
    itemsPerPage: number = 20;
    bsModalRef: BsModalRef;
    
    constructor (private httpService: HttpService, private modalService: BsModalService) {}

    ngOnInit () {
        if (!localStorage.getItem('feeder_8884937_lang')) {
            this.bsModalRef = this.modalService.show(LanguageModalComponent);
        }

        this.httpService
            .getNews()
            .subscribe((news: FeedModel[]) => {
                news.map((item) => {
                    if (item.content && item.content.split('<img src="')[1]) item.image = item.content.split('<img src="')[1].split('" alt')[0];
                })

                this.news = news.sort((a:any, b:any) => {
                    return Number(new Date(b.publishDate)) - Number(new Date(a.publishDate));
                });
                this.newsToDisplay = this.news.slice(0, this.itemsPerPage);
            })
    }

    onPageChange (event: PageChangedEvent) {
        this.newsToDisplay = this.news.slice((event.page-1) * this.itemsPerPage, event.page * this.itemsPerPage);
        window.scrollTo(0, 0)
    }

    ngAfterViewInit () {
        
    }
}