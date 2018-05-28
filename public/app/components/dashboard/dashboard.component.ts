import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { HttpService } from './../../services/http.service';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.html',
    styleUrls: ['./dashboard.scss']
})

export class DashboardComponent {
    
    constructor (private http: HttpClient, private modalService: NgbModal, private httpService: HttpService) {}

    ngOnInit () {
        if (!localStorage.getItem('feeder_8884937_lang')) {
            this.openModal();
        }

        this.httpService.getNews().subscribe((news) => {
            console.log('news', news)
        })

        
    }

    openModal () {
        setTimeout(() => {
            this.modalService.open(ModalContentLang, { centered: true });
        }, 1)
    }
}

@Component({
    selector: 'modal-content-select-lang',
    template: `
        <div class="modal-header">
            <h4 class="modal-title">Select language</h4>
            <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-md-3 offset-md-2">
                    <button type="button" class="btn btn-outline-primary mb-2 mr-2" (click)="setLang('eng')">English</button>
                </div>
                <div class="col-md-3 offset-md-2">
                    <button type="button" class="btn btn-outline-primary mb-2 mr-2" (click)="setLang('rus')">Русский</button>
                </div>
            </div>
        </div>
    `
})

export class ModalContentLang {
    constructor(public activeModal: NgbActiveModal) {}

    setLang(lang:string) {
        localStorage.setItem('feeder_8884937_lang', lang);
        this.activeModal.close();

    }
}

