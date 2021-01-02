import { Component, OnInit } from '@angular/core';

export class options {
  region: string;
  colorAxis: any;
  backgroundColor: string;
  datalessRegionColor: string;
  defaultColor: string;
  resolution: string;
  displayMode: string;
}
@Component({
  selector: 'app-us-geo-chart',
  templateUrl: './us-geo-chart.component.html',
  styleUrls: ['./us-geo-chart.component.scss']
})
export class UsGeoChartComponent implements OnInit {
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
    this.title = 'Geo Chart';
    // this.type = 'PieChart';
    this.type = 'GeoChart';
    this.width = 800;
    this.height = 600;
    this.options.region = 'US';
    this.options.colorAxis = {colors: ['#e31b23', 'orange', '#00853f']};
    this.options.backgroundColor = 'smokewhite';
    this.options.datalessRegionColor = '#000';
    this.options.defaultColor = '#f5f5f5';
    this.options.displayMode = 'regions';
    this.options.resolution = 'provinces';

    this.chartData = [
      ['US-AL', 10],
      ['US-AK', 210],
      ['US-AR', 630],
      ['US-AK', 540],
      ['US-AZ', 230],
      ['US-CO', 514],
      ['US-DE', 233],
      ['US-FL', 220],
      ['US-HI', 240],
      ['US-KS', 450],
      ['US-KY', 440],
      ['US-MI', 650],
      ['US-MO', 440],
      ['US-MS', 534],
      ['US-MT', 754],
      ['US-NE', 533],
      ['US-NJ', 574],
      ['US-NM', 430],
      ['US-NY', 506],
      ['US-OR', 670],
      ['US-PA', 990],
      ['US-TX', 870],
      ['US-UT', 1560],
      ['US-VA', 1430],
      ['US-WA', 630],
      ['US-WV', 530],
      ['US-WY', 650]
     ];
    }
}
