import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { LanguageModalComponent } from './../components/modals/language-modal/language-modal.component';
import { Injectable } from '@angular/core';

@Injectable()

export class ModalService {
    bsModalRef: BsModalRef;

    constructor(private modalService: BsModalService) {}

    showLangModal() {
        this.bsModalRef = this.modalService.show(LanguageModalComponent);
        // this.bsModalRef.content.closeBtnName = 'Close';
    }
}