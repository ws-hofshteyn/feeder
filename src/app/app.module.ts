import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule, PaginationModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FeedItemComponent } from './components/feed-item/feed-item.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LanguageModalComponent } from './components/modals/language-modal/language-modal.component';

import { HttpService } from './services/http.service';
import { ModalService } from './services/modal.service';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        DashboardComponent,
        FeedItemComponent,
        LanguageModalComponent
    ],
    entryComponents: [
        LanguageModalComponent
    ],
    imports: [
        BrowserModule,
        ModalModule.forRoot(),
        PaginationModule.forRoot(),
        HttpModule
    ],
    providers: [
        HttpService,
        ModalService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
