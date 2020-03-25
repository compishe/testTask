import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {concatMap, delay, retryWhen} from 'rxjs/operators';
import {Observable, of, throwError} from 'rxjs';
import {Patient, PatientDocument, PatientHistory, PatientHistoryDocument} from '../interface/patient';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) {
  }

  public state: PatientDocument[] = [];
  public MINIMUM_TIMESTAMP: Date;
  private patientUrl = environment.apiUrl + '/api/patients';

  /**
   *  Get запрос для получениие данных об пациенте
   * @param id:number Пациента которого мы ищем
   * @return error - еслии евсть ошибка , если все нормально то о отдает json вида PatientCard
   */
  getPatient(id: number): Observable<Patient> {
    return of<Patient>({
        id: 12127883,
        idOuzSave: 181,
        isEnabled: true,
        sysdInput: '2018-12-06T00:00:00+00:00',
        idMuSave: null,
        surname: 'УЛИТИНА',
        name: 'ВАЛЕНТИНА',
        patronymic: 'ВАЛ',
        snils: '34469279316',
        parentDocnum: null,
        idVmpSex: 2,
        birthdate: '1954-05-29T00:00:00+00:00',
        idUser: 235,
        idLoadedXml: null,
        talons: [
            {
                id: 5555334,
                uniqNumber: '56.0000.00899.169',
                medicalInstitution: null,
                vmpStage1: {
                    medicalProfile: {
                        subProfile: {
                            code: '00',
                            codeP: '16'
                        }
                    },
                    vmpType: {
                        code: '009'
                    }
                }
            },
            {
                id: 5251008,
                uniqNumber: '56.0000.08784.155',
                medicalInstitution: null,
                vmpStage1: {
                    medicalProfile: {
                        subProfile: {
                            code: '00',
                            codeP: '16'
                        }
                    },
                    vmpType: {
                        code: '009'
                    }
                }
            }
        ],
        identityDocuments: [
            {
                id: 7685224,
                type: {
                    id: 14,
                    code: '21',
                    name: 'Паспорт гражданина РФ'
                },
                series: '55555',
                number: '5555',
                issuedBy: null,
                issuedDate: null
            },
            {
                id: 7685225,
                type: {
                    id: 3,
                    code: '03',
                    name: 'Свидетельство о рождении'
                },
                series: 'II-ПП',
                number: '333333',
                issuedBy: null,
                issuedDate: null
            },
            {
                id: 7685226,
                type: {
                    id: 14,
                    code: '21',
                    name: 'Паспорт гражданина РФ'
                },
                series: '5601',
                number: '138243',
                issuedBy: null,
                issuedDate: null
            },
            {
                id: 7685695,
                type: {
                    id: 14,
                    code: '21',
                    name: 'Паспорт гражданина РФ'
                },
                series: '5601-1',
                number: '138243-1',
                issuedBy: null,
                issuedDate: null
            }
        ],
        documents: []
    } as Patient);
  }

  /**
   * Для получение историй пациента
   * @param id - идинтификатор пользователя
   */
  getHistoryPatient(id: number): Observable<PatientHistory[]> {
    return of<PatientHistory[]>([
        {
            id: 12127883,
            operationDate: '2018-12-06T01:21:39+00:00',
            operation: 'i',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: 'stand',
            program: 'php-fpm: pool www@stand (TNS V1-V3)',
            idOuzSave: 181,
            isEnabled: true,
            idMuSave: null,
            surname: 'УЛИТИНА',
            name: 'ВАЛЕНТИНА',
            patronymic: null,
            snils: '34469279316',
            isParentDocument: null,
            idVmpSex: 2,
            birthdate: '1954-05-29T00:00:00+00:00',
            idUser: null,
            idLoadedXml: null
        },
        {
            id: 12127883,
            operationDate: '2018-12-06T01:23:42+00:00',
            operation: 'u',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: 'stand',
            program: 'php-fpm: pool www@stand (TNS V1-V3)',
            idOuzSave: 181,
            isEnabled: true,
            idMuSave: null,
            surname: 'УЛИТИНА',
            name: 'ВАЛЕНТИНА',
            patronymic: null,
            snils: '34469279316',
            isParentDocument: null,
            idVmpSex: 2,
            birthdate: '1954-05-29T00:00:00+00:00',
            idUser: null,
            idLoadedXml: null
        },
        {
            id: 12127883,
            operationDate: '2018-12-06T01:35:36+00:00',
            operation: 'u',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: 'stand',
            program: 'php-fpm: pool www@stand (TNS V1-V3)',
            idOuzSave: 181,
            isEnabled: true,
            idMuSave: null,
            surname: 'УЛИТИНА',
            name: 'ВАЛЕНТИНА',
            patronymic: null,
            snils: '34469279316',
            isParentDocument: null,
            idVmpSex: 2,
            birthdate: '1954-05-29T00:00:00+00:00',
            idUser: null,
            idLoadedXml: null
        },
        {
            id: 12127883,
            operationDate: '2019-06-19T18:50:07+00:00',
            operation: 'u',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: '90c03b87b5b9',
            program: 'php-fpm: pool www@90c03b87b5b9 (TNS V1-V3)',
            idOuzSave: 181,
            isEnabled: true,
            idMuSave: null,
            surname: 'УЛИТИНА',
            name: 'ВАЛЕНТИНА',
            patronymic: null,
            snils: '34469279316',
            isParentDocument: null,
            idVmpSex: 2,
            birthdate: '1954-05-29T00:00:00+00:00',
            idUser: null,
            idLoadedXml: null
        },
        {
            id: 12127883,
            operationDate: '2019-06-19T18:59:03+00:00',
            operation: 'u',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: '90c03b87b5b9',
            program: 'php-fpm: pool www@90c03b87b5b9 (TNS V1-V3)',
            idOuzSave: 181,
            isEnabled: true,
            idMuSave: null,
            surname: 'УЛИТИНА',
            name: 'ВАЛЕНТИНА',
            patronymic: null,
            snils: '34469279316',
            isParentDocument: null,
            idVmpSex: 2,
            birthdate: '1954-05-29T00:00:00+00:00',
            idUser: null,
            idLoadedXml: null
        },
        {
            id: 12127883,
            operationDate: '2019-06-19T19:08:45+00:00',
            operation: 'u',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: '90c03b87b5b9',
            program: 'php-fpm: pool www@90c03b87b5b9 (TNS V1-V3)',
            idOuzSave: 181,
            isEnabled: true,
            idMuSave: null,
            surname: 'УЛИТИНА',
            name: 'ВАЛЕНТИНА',
            patronymic: 'ВАЛ',
            snils: '34469279316',
            isParentDocument: null,
            idVmpSex: 2,
            birthdate: '1954-05-29T00:00:00+00:00',
            idUser: null,
            idLoadedXml: null
        },
        {
            id: 12127883,
            operationDate: '2019-06-19T19:12:42+00:00',
            operation: 'u',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: '90c03b87b5b9',
            program: 'php-fpm: pool www@90c03b87b5b9 (TNS V1-V3)',
            idOuzSave: 181,
            isEnabled: true,
            idMuSave: null,
            surname: 'УЛИТИНА',
            name: 'ВАЛЕНТИНА',
            patronymic: 'ВАЛ',
            snils: '34469279316',
            isParentDocument: null,
            idVmpSex: 2,
            birthdate: '1954-05-29T00:00:00+00:00',
            idUser: null,
            idLoadedXml: null
        },
        {
            id: 12127883,
            operationDate: '2019-06-19T19:47:14+00:00',
            operation: 'u',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: '90c03b87b5b9',
            program: 'php-fpm: pool www@90c03b87b5b9 (TNS V1-V3)',
            idOuzSave: 181,
            isEnabled: true,
            idMuSave: null,
            surname: 'УЛИТИНА',
            name: 'ВАЛЕНТИНА',
            patronymic: 'ВАЛ',
            snils: '34469279316',
            isParentDocument: null,
            idVmpSex: 2,
            birthdate: '1954-05-29T00:00:00+00:00',
            idUser: null,
            idLoadedXml: null
        },
        {
            id: 12127883,
            operationDate: '2019-06-19T19:51:25+00:00',
            operation: 'u',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: '90c03b87b5b9',
            program: 'php-fpm: pool www@90c03b87b5b9 (TNS V1-V3)',
            idOuzSave: 181,
            isEnabled: true,
            idMuSave: null,
            surname: 'УЛИТИНА',
            name: 'ВАЛЕНТИНА',
            patronymic: 'ВАЛ',
            snils: '34469279316',
            isParentDocument: null,
            idVmpSex: 2,
            birthdate: '1954-05-29T00:00:00+00:00',
            idUser: null,
            idLoadedXml: null
        },
        {
            id: 12127883,
            operationDate: '2019-06-19T19:52:42+00:00',
            operation: 'u',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: '90c03b87b5b9',
            program: 'php-fpm: pool www@90c03b87b5b9 (TNS V1-V3)',
            idOuzSave: 181,
            isEnabled: true,
            idMuSave: null,
            surname: 'УЛИТИНА',
            name: 'ВАЛЕНТИНА',
            patronymic: 'ВАЛ',
            snils: '34469279316',
            isParentDocument: null,
            idVmpSex: 2,
            birthdate: '1954-05-29T00:00:00+00:00',
            idUser: null,
            idLoadedXml: null
        },
        {
            id: 12127883,
            operationDate: '2019-06-19T19:56:53+00:00',
            operation: 'u',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: '90c03b87b5b9',
            program: 'php-fpm: pool www@90c03b87b5b9 (TNS V1-V3)',
            idOuzSave: 181,
            isEnabled: true,
            idMuSave: null,
            surname: 'УЛИТИНА',
            name: 'ВАЛЕНТИНА',
            patronymic: 'ВАЛ',
            snils: '34469279316',
            isParentDocument: null,
            idVmpSex: 2,
            birthdate: '1954-05-29T00:00:00+00:00',
            idUser: null,
            idLoadedXml: null
        },
        {
            id: 12127883,
            operationDate: '2019-06-19T20:07:06+00:00',
            operation: 'u',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: '90c03b87b5b9',
            program: 'php-fpm: pool www@90c03b87b5b9 (TNS V1-V3)',
            idOuzSave: 181,
            isEnabled: true,
            idMuSave: null,
            surname: 'УЛИТИНА',
            name: 'ВАЛЕНТИНА',
            patronymic: 'ВАЛ',
            snils: '34469279316',
            isParentDocument: null,
            idVmpSex: 2,
            birthdate: '1954-05-29T00:00:00+00:00',
            idUser: null,
            idLoadedXml: null
        },
        {
            id: 12127883,
            operationDate: '2019-06-19T20:09:10+00:00',
            operation: 'u',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: '90c03b87b5b9',
            program: 'php-fpm: pool www@90c03b87b5b9 (TNS V1-V3)',
            idOuzSave: 181,
            isEnabled: true,
            idMuSave: null,
            surname: 'УЛИТИНА',
            name: 'ВАЛЕНТИНА',
            patronymic: 'ВАЛ',
            snils: '34469279316',
            isParentDocument: null,
            idVmpSex: 2,
            birthdate: '1954-05-29T00:00:00+00:00',
            idUser: null,
            idLoadedXml: null
        },
        {
            id: 12127883,
            operationDate: '2019-06-20T18:32:21+00:00',
            operation: 'u',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: '90c03b87b5b9',
            program: 'php-fpm: pool www@90c03b87b5b9 (TNS V1-V3)',
            idOuzSave: 181,
            isEnabled: true,
            idMuSave: null,
            surname: 'УЛИТИНА',
            name: 'ВАЛЕНТИНА',
            patronymic: 'ВАЛ',
            snils: '34469279316',
            isParentDocument: null,
            idVmpSex: 2,
            birthdate: '1954-05-29T00:00:00+00:00',
            idUser: null,
            idLoadedXml: null
        },
        {
            id: 12127883,
            operationDate: '2019-06-20T18:47:21+00:00',
            operation: 'u',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: '90c03b87b5b9',
            program: 'php-fpm: pool www@90c03b87b5b9 (TNS V1-V3)',
            idOuzSave: 181,
            isEnabled: true,
            idMuSave: null,
            surname: 'УЛИТИНА',
            name: 'ВАЛЕНТИНА',
            patronymic: 'ВАЛ',
            snils: '34469279316',
            isParentDocument: null,
            idVmpSex: 2,
            birthdate: '1954-05-29T00:00:00+00:00',
            idUser: null,
            idLoadedXml: null
        },
        {
            id: 12127883,
            operationDate: '2019-06-24T12:55:12+00:00',
            operation: 'u',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: '90c03b87b5b9',
            program: 'php-fpm: pool www@90c03b87b5b9 (TNS V1-V3)',
            idOuzSave: 181,
            isEnabled: true,
            idMuSave: null,
            surname: 'УЛИТИНА',
            name: 'ВАЛЕНТИНА',
            patronymic: 'ВАЛ',
            snils: '34469279316',
            isParentDocument: null,
            idVmpSex: 2,
            birthdate: '1954-05-29T00:00:00+00:00',
            idUser: null,
            idLoadedXml: null
        }
    ] as PatientHistory[]);
  }

  /**
   * Получение историй документов Пациентп
   * @param id - пациента
   * @return Возвращает список историю изменений
   */
  getHistoryPatientDocument(id: number): Observable<PatientHistoryDocument[]> {
    return of<PatientHistoryDocument[]>([
        {
            id: 7685225,
            operation: 'i',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: 'stand',
            program: 'php-fpm: pool www@stand (TNS V1-V3)',
            operationDate: '2018-12-06T01:21:39+00:00',
            patientId: 12127883,
            series: 'II-ПП',
            number: '333333',
            issuedBy: null,
            issuedDate: null,
            isEnabled: true,
            documentType: {
                id: 14,
                name: 'Паспорт гражданина РФ'
            }
        },
        {
            id: 7685224,
            operation: 'i',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: 'stand',
            program: 'php-fpm: pool www@stand (TNS V1-V3)',
            operationDate: '2018-12-06T01:21:39+00:00',
            patientId: 12127883,
            series: '5555',
            number: '555555',
            issuedBy: null,
            issuedDate: null,
            isEnabled: true,
            documentType: {
                id: 3,
                name: 'Свидетельство о рождении'
            }
        },
        {
            id: 7685226,
            operation: 'i',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: 'stand',
            program: 'php-fpm: pool www@stand (TNS V1-V3)',
            operationDate: '2018-12-06T01:22:06+00:00',
            patientId: 12127883,
            series: '5600',
            number: '138243',
            issuedBy: null,
            issuedDate: null,
            isEnabled: true,
            documentType: {
                id: 14,
                name: 'Паспорт гражданина РФ'
            }
        },
        {
            id: 7685226,
            operation: 'u',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: 'stand',
            program: 'php-fpm: pool www@stand (TNS V1-V3)',
            operationDate: '2018-12-06T01:23:42+00:00',
            patientId: 12127883,
            series: '5600',
            number: '138243',
            issuedBy: null,
            issuedDate: null,
            isEnabled: true,
            documentType: {
                id: 14,
                name: 'Паспорт гражданина РФ'
            }
        },
        {
            id: 7685225,
            operation: 'u',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: 'stand',
            program: 'php-fpm: pool www@stand (TNS V1-V3)',
            operationDate: '2018-12-06T01:23:42+00:00',
            patientId: 12127883,
            series: 'II-ПП',
            number: '333333',
            issuedBy: null,
            issuedDate: null,
            isEnabled: true,
            documentType: {
                id: 14,
                name: 'Паспорт гражданина РФ'
            }
        },
        {
            id: 7685224,
            operation: 'd',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: 'stand',
            program: 'php-fpm: pool www@stand (TNS V1-V3)',
            operationDate: '2018-12-06T01:23:42+00:00',
            patientId: 12127883,
            series: '5555',
            number: '555555',
            issuedBy: null,
            issuedDate: null,
            isEnabled: false,
            documentType: {
                id: 3,
                name: 'Свидетельство о рождении'
            }
        },
        {
            id: 7685226,
            operation: 'u',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: 'stand',
            program: 'php-fpm: pool www@stand (TNS V1-V3)',
            operationDate: '2018-12-06T01:35:36+00:00',
            patientId: 12127883,
            series: '5601',
            number: '138243',
            issuedBy: null,
            issuedDate: null,
            isEnabled: true,
            documentType: {
                id: 14,
                name: 'Паспорт гражданина РФ'
            }
        },
        {
            id: 7685225,
            operation: 'u',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: 'stand',
            program: 'php-fpm: pool www@stand (TNS V1-V3)',
            operationDate: '2018-12-06T01:35:36+00:00',
            patientId: 12127883,
            series: 'II-ПП',
            number: '333333',
            issuedBy: null,
            issuedDate: null,
            isEnabled: true,
            documentType: {
                id: 14,
                name: 'Паспорт гражданина РФ'
            }
        },
        {
            id: 7685695,
            operation: 'i',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: '90c03b87b5b9',
            program: 'php-fpm: pool www@90c03b87b5b9 (TNS V1-V3)',
            operationDate: '2019-06-19T19:47:14+00:00',
            patientId: 12127883,
            series: '5601-1',
            number: '138243-1',
            issuedBy: null,
            issuedDate: null,
            isEnabled: true,
            documentType: {
                id: 14,
                name: 'Паспорт гражданина РФ'
            }
        },
        {
            id: 7685695,
            operation: 'd',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: '90c03b87b5b9',
            program: 'php-fpm: pool www@90c03b87b5b9 (TNS V1-V3)',
            operationDate: '2019-06-19T20:07:06+00:00',
            patientId: 12127883,
            series: '5601-1',
            number: '138243-1',
            issuedBy: null,
            issuedDate: null,
            isEnabled: false,
            documentType: {
                id: 14,
                name: 'Паспорт гражданина РФ'
            }
        },
        {
            id: 7685695,
            operation: 'u',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: 'user-System-Product-Name',
            program: 'SQL Developer',
            operationDate: '2019-06-19T20:07:46+00:00',
            patientId: 12127883,
            series: '5601-1',
            number: '138243-1',
            issuedBy: null,
            issuedDate: null,
            isEnabled: true,
            documentType: {
                id: 14,
                name: 'Паспорт гражданина РФ'
            }
        },
        {
            id: 7685695,
            operation: 'd',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: '90c03b87b5b9',
            program: 'php-fpm: pool www@90c03b87b5b9 (TNS V1-V3)',
            operationDate: '2019-06-19T20:09:10+00:00',
            patientId: 12127883,
            series: '5601-1',
            number: '138243-1',
            issuedBy: null,
            issuedDate: null,
            isEnabled: false,
            documentType: {
                id: 14,
                name: 'Паспорт гражданина РФ'
            }
        },
        {
            id: 7685224,
            operation: 'd',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: '90c03b87b5b9',
            program: 'php-fpm: pool www@90c03b87b5b9 (TNS V1-V3)',
            operationDate: '2019-06-20T18:32:21+00:00',
            patientId: 12127883,
            series: 'II-ПП',
            number: '333333',
            issuedBy: 'USA',
            issuedDate: null,
            isEnabled: false,
            documentType: {
                id: 3,
                name: 'Свидетельство о рождении'
            }
        },
        {
            id: 7685225,
            operation: 'u',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: '90c03b87b5b9',
            program: 'php-fpm: pool www@90c03b87b5b9 (TNS V1-V3)',
            operationDate: '2019-06-20T18:32:22+00:00',
            patientId: 12127883,
            series: '5601',
            number: '138243',
            issuedBy: null,
            issuedDate: null,
            isEnabled: true,
            documentType: {
                id: 14,
                name: 'Паспорт гражданина РФ'
            }
        },
        {
            id: 7685226,
            operation: 'd',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: '90c03b87b5b9',
            program: 'php-fpm: pool www@90c03b87b5b9 (TNS V1-V3)',
            operationDate: '2019-06-20T18:32:22+00:00',
            patientId: 12127883,
            series: '5601',
            number: '138243',
            issuedBy: null,
            issuedDate: null,
            isEnabled: false,
            documentType: {
                id: 14,
                name: 'Паспорт гражданина РФ'
            }
        },
        {
            id: 7685225,
            operation: 'd',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: '90c03b87b5b9',
            program: 'php-fpm: pool www@90c03b87b5b9 (TNS V1-V3)',
            operationDate: '2019-06-20T18:47:21+00:00',
            patientId: 12127883,
            series: '5601',
            number: '138243',
            issuedBy: null,
            issuedDate: null,
            isEnabled: false,
            documentType: {
                id: 14,
                name: 'Паспорт гражданина РФ'
            }
        },
        {
            id: 7685224,
            operation: 'd',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: '90c03b87b5b9',
            program: 'php-fpm: pool www@90c03b87b5b9 (TNS V1-V3)',
            operationDate: '2019-06-20T18:47:21+00:00',
            patientId: 12127883,
            series: '5601',
            number: '138243',
            issuedBy: 'USSR',
            issuedDate: null,
            isEnabled: false,
            documentType: {
                id: 3,
                name: 'Свидетельство о рождении'
            }
        },
        {
            id: 7685226,
            operation: 'u',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: 'user-System-Product-Name',
            program: 'SQL Developer',
            operationDate: '2019-06-20T18:50:36+00:00',
            patientId: 12127883,
            series: '5601',
            number: '138243',
            issuedBy: null,
            issuedDate: null,
            isEnabled: true,
            documentType: {
                id: 14,
                name: 'Паспорт гражданина РФ'
            }
        },
        {
            id: 7685225,
            operation: 'u',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: 'user-System-Product-Name',
            program: 'SQL Developer',
            operationDate: '2019-06-20T18:50:36+00:00',
            patientId: 12127883,
            series: '5601',
            number: '138243',
            issuedBy: null,
            issuedDate: null,
            isEnabled: true,
            documentType: {
                id: 14,
                name: 'Паспорт гражданина РФ'
            }
        },
        {
            id: 7685224,
            operation: 'd',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: 'user-System-Product-Name',
            program: 'SQL Developer',
            operationDate: '2019-06-21T10:07:48+00:00',
            patientId: 12127883,
            series: '55555',
            number: '5555',
            issuedBy: null,
            issuedDate: null,
            isEnabled: false,
            documentType: {
                id: 3,
                name: 'Свидетельство о рождении'
            }
        },
        {
            id: 7685225,
            operation: 'u',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: 'user-System-Product-Name',
            program: 'SQL Developer',
            operationDate: '2019-06-21T10:07:49+00:00',
            patientId: 12127883,
            series: 'II-ПП',
            number: '333333',
            issuedBy: null,
            issuedDate: null,
            isEnabled: true,
            documentType: {
                id: 14,
                name: 'Паспорт гражданина РФ'
            }
        },
        {
            id: 7685717,
            operation: 'i',
            username: 'MZ_REGISTR_HT',
            osUser: 'support',
            machine: '90c03b87b5b9',
            program: 'php-fpm: pool www@90c03b87b5b9 (TNS V1-V3)',
            operationDate: '2019-06-24T12:55:12+00:00',
            patientId: 12127883,
            series: 'II-ПП',
            number: '333333-1',
            issuedBy: 'MVD RT',
            issuedDate: null,
            isEnabled: true,
            documentType: {
                id: 3,
                name: 'Свидетельство о рождении'
            }
        }
    ] as PatientHistoryDocument[]);
  }


    /**
     * Для обновление данных
     * @param changeData Данные которые нужно изменить
     * @return Observable чтобы подпистаься и получить данные.
     */
    updatePatient(changeData: Patient): Observable<Patient> {
        return null;
    }

    /**
     * Создание Пациента если его нет в системе
     * @param patient Обьект тип Patient
     * @return Возращает статус создание
     */
    createPatient(patient: Patient): Observable<Patient> {
        return null;
    }

  /**
   * Для отлова ошибок по api запросам
   * @param operation какое взаимодействие с бэкендом
   * @param result тип ошишбки
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (): Observable<T> => {
      this.iterate(result, '');
      return of(result as T);
    };
  }


  iterate(obj, stack) {
    for (const property in obj) {
      if (obj.hasOwnProperty(property)) {
        if (typeof obj[property] === 'object') {
          this.iterate(obj[property], stack + '.' + property);
        } else {
          console.log(property + '   ' + obj[property] + '  ' + stack);
        }
      }
    }
  }
}
