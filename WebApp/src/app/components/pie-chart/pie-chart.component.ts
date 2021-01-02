import { HttpErrorResponse } from '@angular/common/http';
import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CdcDataService } from 'src/app/services/cdc-data.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit, OnDestroy, AfterContentInit {

  private subs = new Subscription();
  public dataArr: any;
  public dataMaleByAgeArr: any[] = [];
  public dataFemaleByAgeArr: any[] = [];
  public chartData: any[] = [];
  public dataUSTotalArr: any[] = [];
  public title: string;
  public type: string;
  public data: (string | number)[][];
  public columnNames: string[];
  public width: number;
  public height: number;
  public isChartReady: boolean;
  public options: { title: string; is3D: boolean; pieHole: number; animation: { duration: number; easing: string; startup: boolean; }; };

  constructor(private cdcSVC: CdcDataService) { }

  // ************************************************************************************************************************
  // * NG EVENTS
  // ************************************************************************************************************************

  ngAfterContentInit() {
    this.onLoadData('Male', 'All Ages');

  }
  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  // ************************************************************************************************************************
  // * COMPONENT FUNCTIONS
  // ************************************************************************************************************************

  onLoadData(gender: string, ageGroup: string) {
    this.title = '';
    this.type = 'PieChart';

    this.options = {
      title: `${gender} Mortality Rates`,
      is3D: true,
      pieHole: 0.3,
      animation: {
        duration: 2000,
        easing: 'in',
        startup: true
      },
    };
    this.width = 750;
    this.height = 400;

    this.subs.add(this.cdcSVC.getCovidByGenderAgeState().subscribe((data) => {
      this.dataArr = data;
      this.dataUSTotalArr = [];
      this.chartData = [];

      this.dataUSTotalArr = this.dataArr.filter(col => col.state === 'United States' && col.age_group_new === ageGroup && col.sex === gender);

      this.dataUSTotalArr.forEach(element => {
        if(element.sex !== 'Unknown') {
          this.chartData.push(['Pneumonia', Number(element.pneumonia_deaths)]);
          this.chartData.push(['Influenza', Number(element.influenza_deaths)]);
          this.chartData.push(['Covid 19', Number(element.covid_19_deaths)]);
        }
      });
      this.columnNames = ['Covid 19', 'Influenza'];
      const state = this.dataArr.map(col => col.age_group_new);
      this.isChartReady = true;
    },
    (err: HttpErrorResponse) => {
      console.log(err);
    }));
  }

}
