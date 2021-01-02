import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geo-chart',
  templateUrl: './geo-chart.component.html',
  styleUrls: ['./geo-chart.component.scss']
})
export class GeoChartComponent implements OnInit {
  public chartData: any[] = [];
  public format: string;
  public type: string;
  public title: string;
  public width: number;
  public height: number;
  public myData: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.title = 'Geo Chart';
    // this.type = 'PieChart';
    this.type = 'GeoChart';
    this.width = 800;
    this.height = 600;
    this.chartData = [
      ['Country', 'Popularity'],
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['RU', 700]];
  }

}
