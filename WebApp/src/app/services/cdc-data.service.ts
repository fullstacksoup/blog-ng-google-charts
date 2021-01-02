import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

interface CDCByAge {
  age_group_new: any;
  covid_19_deaths: any;
  data_as_of: any;
  end_week: any;
  influenza_deaths: any;
  pneumonia_and_covid_19_deaths: any;
  pneumonia_deaths: any;
  pneumonia_influenza_or_covid: any;
  sex: any;
  start_week: any;
  state: any;
  total_deaths: any;
}

@Injectable({
  providedIn: 'root'
})
export class CdcDataService {
  public responseCache = new Map();
  private cache$: Observable<Array<CDCByAge>>;
  constructor(private http: HttpClient) { }
  baseUrl = environment.CDCBaseURL;

  private data: any[] = [];

  getCovidByGenderAgeState(): Observable<CDCByAge> {
    const URL = `${environment.CDCBaseURL}/resource/9bhg-hcku.json`;
    // console.log(URL);
    const response =  this.http.get<CDCByAge>(URL);
    return response;
  }


}
