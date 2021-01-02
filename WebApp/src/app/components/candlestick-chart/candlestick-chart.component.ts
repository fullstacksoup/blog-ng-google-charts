import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candlestick-chart',
  templateUrl: './candlestick-chart.component.html',
  styleUrls: ['./candlestick-chart.component.scss']
})
export class CandlestickChartComponent implements OnInit {
  title: string;
  type: string;
  data: (string | number)[][];
  columnNames: string[];
  width: number;
  height: number;
  options: {
    legend: string; showScale: boolean; crosshair: { trigger: string; orientation: string; opacity: number; }; candlestick: {
      fallingColor: { strokeWidth: number; stroke: string; }; // red
      risingColor: { strokeWidth: number; stroke: string; }; // green
    };
  };

  constructor() { }

  ngOnInit(): void {
    this.title = '';
    this.type = 'CandlestickChart';
    this.data = [
       ['9/1/20', 20, 28, 38, 45],
       ['9/2/20', 31, 38, 55, 66],
       ['9/3/20', 50, 55, 77, 80],
       ['9/4/20', 77, 77, 66, 50],
       ['9/5/20', 68, 66, 22, 15],
       ['9/7/20', 24, 28, 36, 42],
       ['9/8/20', 34, 38, 56, 69],
       ['9/9/20', 54, 55, 73, 83],
       ['9/10/20', 77, 77, 66, 53],
       ['9/11/20', 68, 66, 32, 16]
    ];
    this.columnNames = ['Date', 'A','B','C','D'];
    this.options = {
       legend:'none',
       showScale:true,
       crosshair: { trigger: 'both', orientation: 'both', opacity: 0.9  },
       candlestick: {

          fallingColor: { strokeWidth: 2, stroke:'#a52714' }, // red
          risingColor: { strokeWidth: 2, stroke: '#0f9d58' }   // green
       }
    };
    this.width = 1250;
    this.height = 600;
  }

}
