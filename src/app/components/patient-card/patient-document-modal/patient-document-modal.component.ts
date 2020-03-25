import { Component, Inject, OnInit } from '@angular/core';
import { MockService } from '../../../service/mock.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientDocument, PatientDocumentType } from '../../../interface/patient';
import { PatientService } from '../../../service/patient.service';
import { ValidationService } from '../../../service/validation.service';
import { DateValidator } from '../../../validators/date.validator';
import { DictionaryService } from '../../../service/dictionary.service';
import { patientDocTypeRegex } from '../../../validators/documents.validator';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-patient-document-modal',
  templateUrl: './patient-document-modal.component.html',
  styleUrls: ['./patient-document-modal.component.sass']
})

/**
 * Модальное окно для заполенение пасспорта пациента
 * @remarks
 * Модальное окно из подсистемы patient-card
 */
export class PatientDocumentModalComponent implements OnInit {
  constructor(private mock: MockService,
    private matDialogRef: MatDialogRef<PatientDocumentModalComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: PatientDocument,
    private apiPatient: PatientService,
    private dictionary: DictionaryService,
  ) {
  }

  minimumDate = this.apiPatient.MINIMUM_TIMESTAMP;
  patientDocumentForm: FormGroup;
  pickerI18n = {
    cancel: 'Отмена',
    clear: 'Очистить',
    done: 'ОК',
    previousMonth: '‹',
    nextMonth: '›',
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    weekdaysShort: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
    weekdaysAbbrev: ['В', 'П', 'В', 'С', 'Ч', 'П', 'С'],
  };
  isUnique = true;
  indexItem: number;
  documentsType: PatientDocumentType[];

  ngOnInit() {
    this.initForm();
    this.dictionary.getIdentityDocumentTypes().subscribe(
      value => {
        console.log(value);
        if (this.apiPatient.state.length !== 0) {
          this.documentsType = value.filter((obj) => {
            return !this.apiPatient.state.some((obj2) => {
              return obj.code === obj2.type.code;
            });
          });
        } else {
          this.documentsType = value;
        }
      }, (error: HttpErrorResponse) => {
        /*
        Вернуть значение по умолчанию без подключения к серверу (только в рамках задания)
         */
        const docTypes: PatientDocumentType[] = [{
          id: 1,
          name: 'Паспорт',
          code: 'passport',
        }];
        this.documentsType = docTypes;
      }
    );
  }

  checkValid(nameFormControl) {
    return ValidationService.checkValidation(nameFormControl, this.patientDocumentForm);
  }

  /**
   *  Временное хранение
   */
  saveData() {
    if (this.isUnique) {
      this.apiPatient.state.push(this.patientDocumentForm.value);
    } else {
      this.apiPatient.state[this.indexItem] = this.patientDocumentForm.value;
    }
    this.matDialogRef.close();
  }

  private initForm(): void {
    this.patientDocumentForm = this.fb.group({
      id: [null],
      series: [null, [Validators.maxLength(50), Validators.required, Validators.pattern(patientDocTypeRegex[7].series)]],
      number: [null, [Validators.maxLength(50), Validators.required, Validators.pattern(patientDocTypeRegex[7].series)]],
      issuedBy: [null, [Validators.maxLength(1000)]],
      issuedDate: [null, DateValidator],
      isEnabled: [null],
      type: [null, Validators.required]
    });

    if (this.data) {
      this.isUnique = false;
      this.patientDocumentForm.patchValue(this.data);
      this.indexItem = this.apiPatient.state.indexOf(this.data);
    }
  }

  changeValueType(event) {
    for (const itemIn of patientDocTypeRegex) {
      if (event.id === itemIn.id) {
        this.patientDocumentForm.controls.series.setValidators([Validators.pattern(itemIn.series), Validators.required]);
        this.patientDocumentForm.controls.number.setValidators([Validators.pattern(itemIn.number), Validators.required]);
        this.patientDocumentForm.controls.series.updateValueAndValidity();
        this.patientDocumentForm.controls.number.updateValueAndValidity();
        console.log(itemIn.series, event, itemIn);
        break;
      } else {
        this.patientDocumentForm.controls.number.reset();
        this.patientDocumentForm.controls.series.reset();
        this.patientDocumentForm.controls.series.setValidators([Validators.pattern(patientDocTypeRegex[7].series), Validators.required]);
        this.patientDocumentForm.controls.number.setValidators([Validators.pattern(patientDocTypeRegex[7].number), Validators.required]);
        this.patientDocumentForm.controls.series.updateValueAndValidity();
        this.patientDocumentForm.controls.number.updateValueAndValidity();
      }
    }
  }

  compareFn(c1: PatientDocument, c2: PatientDocument): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
