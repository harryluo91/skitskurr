import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-tile',
  templateUrl: './graph-tile.component.html',
  styleUrls: ['./graph-tile.component.scss']
})
export class GraphTileComponent implements OnInit {

  public lineChartData:Array<any> = [
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels:Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  public lineChartType:string = 'line';
  public lineChartOptions = {
    responsive: false,
    legend: {
      display: false,
    },
  };

  
  constructor() { }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public chartClicked(e:any):void {
    console.log(e);
  }

  ngOnInit() {
  }

}
