import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  title: string;
  type: string;
  data: (string | number)[][];
  columnNames: string[];
  public options: { title: string; colors: string[]; is3D: boolean; };
  width: number;
  height: number;

  constructor() { }

  ngOnInit(): void {
    this.title = 'Population (in millions)';
    this.type = 'BarChart';
    this.data = [
       ['2012', 900],
       ['2013', 1000],
       ['2014', 1170],
       ['2015', 1250],
       ['2016', 1530]
    ];
    this.columnNames = ['Year', 'Asia'];
    this.options = {
      title: 'Daily Activities',
      is3D: true,
      colors: ['#33440e'],

    };
    this.width = 550;
    this.height = 400;
  }

}
