import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
    selector: 'language-modal',
    templateUrl: './language-modal.component.html',
    // styleUrls: ['./dashboard.scss']
})

export class LanguageModalComponent {
   
    constructor(public bsModalRef: BsModalRef) {}
   

    setLang(lang) {
        localStorage.setItem('feeder_8884937_lang', lang);
        this.bsModalRef.hide();
    }
}