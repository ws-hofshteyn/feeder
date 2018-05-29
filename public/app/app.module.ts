import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent, ModalContentLang } from './components/dashboard/dashboard.component';

import { HttpService } from './services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ModalContentLang,
    DashboardComponent
  ],
  entryComponents: [
    ModalContentLang
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
