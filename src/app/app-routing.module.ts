import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormatoComponent } from './formato/formato.component';
import { EscalaComponent } from './escala/escala.component';
import { DesempenioComponent } from './desempenio/desempenio.component';
import { EtapaEvalucionComponent } from './etapa-evalucion/etapa-evalucion.component';
import { AntiguedadComponent } from './antiguedad/antiguedad.component';

const routes: Routes = [
  {path: 'formato', component: FormatoComponent},
  {path: 'escala', component: EscalaComponent},
  {path: 'desempenio', component: DesempenioComponent},
  {path: 'antiguedad', component: AntiguedadComponent},
  {path: 'etapa', component: EtapaEvalucionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
