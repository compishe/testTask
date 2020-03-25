import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgxMaskModule} from 'ngx-mask';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterializeModule} from '@samuelberthe/angular2-materialize';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ApiWithCredentialInterceptor} from './interceptor/http-interceptor';
import {SnilsPipe} from './pipe/snils.pipe';
import {MaterializeAutocompleteComponent} from './components/autocomplete/materialize-autocomplete/materialize-autocomplete.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatAutocompleteModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule
} from '@angular/material';
import {PatientCardComponent} from './components/patient-card/patient-card.component';
import {PatientDocumentModalComponent} from './components/patient-card/patient-document-modal/patient-document-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {PatientHistoryModalComponent} from './components/patient-card/patient-history-modal/patient-history-modal.component';
import {PatientUnionModalComponent} from './components/patient-card/patient-union-modal/patient-union-modal.component';
import {ValidationDirective} from './directive/validation.directive';
import {ErrorPageComponent} from './components/error-page/error-page.component';
import {MatButtonModule} from '@angular/material/button';
import {NgxPaginationModule} from 'ngx-pagination';
import {DatePickerComponent} from './components/date-picker/date-picker.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {DatePickerRangeComponent} from './components/date-picker-range/date-picker-range.component';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {MyDateRangePickerModule} from 'mydaterangepicker';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    SnilsPipe,
    MaterializeAutocompleteComponent,
    PatientCardComponent,
    PatientDocumentModalComponent,
    PatientHistoryModalComponent,
    PatientUnionModalComponent,
    ValidationDirective,
    ErrorPageComponent,
    DatePickerComponent,
    DatePickerRangeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MaterializeModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    NgSelectModule,
    MatTooltipModule,
    MatDialogModule,
    MatButtonModule,
    NgxPaginationModule,
    NgxMaskModule.forRoot(),
    MatDatepickerModule,
    MatNativeDateModule,
    MyDateRangePickerModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatIconModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiWithCredentialInterceptor,
      multi: true
    },
    MatDatepickerModule,
    {provide: MAT_DATE_LOCALE, useValue: 'ru-RU'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}],
  bootstrap: [AppComponent],
  entryComponents: [PatientDocumentModalComponent, PatientHistoryModalComponent, PatientUnionModalComponent]
})
export class AppModule {
}
