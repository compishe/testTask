import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PatientCardComponent} from './components/patient-card/patient-card.component';
import {ErrorPageComponent} from './components/error-page/error-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'patient-card/12127883', pathMatch: 'full'},
  {path: 'patient-card', component: PatientCardComponent},
  {path: 'patient-card/:id', component: PatientCardComponent},
  {path: '404', component: ErrorPageComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
