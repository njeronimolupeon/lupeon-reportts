import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportCustoDeFreteComponent } from './Components/report-custo-de-frete/report-custo-de-frete.component';
import { ReportOneComponent } from './Components/report-one/report-one.component';

const routes: Routes = [
  {path: '', component: ReportOneComponent},
  {path: 'CustoFrete', component: ReportCustoDeFreteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
