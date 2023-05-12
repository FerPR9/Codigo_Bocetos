import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormatoComponent } from './formato/formato.component';
import { EscalaComponent } from './escala/escala.component';
import { DesempenioComponent } from './desempenio/desempenio.component';
import { AntiguedadComponent } from './antiguedad/antiguedad.component';
import { EtapaEvalucionComponent } from './etapa-evalucion/etapa-evalucion.component';

@NgModule({
  declarations: [
    AppComponent,
    FormatoComponent,
    EscalaComponent,
    DesempenioComponent,
    AntiguedadComponent,
    EtapaEvalucionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
