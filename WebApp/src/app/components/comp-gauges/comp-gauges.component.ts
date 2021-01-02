import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';
export class options {
  width: number;
  height: number;
  redFrom: number;
  redTo: number;
  yellowFrom: number;
  yellowTo: number;
  minorTicks: number;
}
@Component({
  selector: 'app-comp-gauges',
  templateUrl: './comp-gauges.component.html',
  styleUrls: ['./comp-gauges.component.scss']
})
export class CompGaugesComponent implements OnInit {
  @ViewChild('googlechart') googlechart: GoogleChartsModule;  
	
  public chartData: any[] = [];
  public format: string;
  public type: string;
  public title: string;
  public width: number;
  public height: number;
  public myData: any[] = [];  
  public options = new options();

  constructor() { }

  ngOnInit(): void {
    this.title = 'Gauge';
    // this.type = 'PieChart';
    this.type = 'Gauge';
    this.options.width = 400;
    this.options.height = 400;
    this.options.redFrom = 90;
    this.options.redTo = 100;
    this.options.yellowFrom = 75;
    this.options.yellowTo = 90;
    this.options.minorTicks = 5;

    this.chartData = [
      ['Memory', 50],
			['CPU', 90],
			['Battery', 60]
    ];

    setInterval(() => {
      setTimeout(() => {
        this.chartData = [
          ['Memory', Math.round(60 * Math.random())],
          ['CPU', Math.round(40 * Math.random())],
          ['Battery', Math.round(20 * Math.random())]
        ];
      }, 1000);
    }, 1000);
  }
}
