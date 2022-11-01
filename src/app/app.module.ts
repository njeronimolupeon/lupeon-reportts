import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportOneComponent } from './Components/report-one/report-one.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { ModalFiltroComponent } from './Components/modal-filtro/modal-filtro.component';
import { ReportPagOneComponent } from './Components/report-pag-one/report-pag-one.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportOneComponent,
    ModalFiltroComponent,
    ReportPagOneComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
