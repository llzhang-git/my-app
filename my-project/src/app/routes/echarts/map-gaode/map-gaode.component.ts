import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-gaode',
  templateUrl: './map-gaode.component.html',
  styleUrls: ['./map-gaode.component.scss']
})
export class MapGaodeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getGaodeMap();
  }
  getGaodeMap(): any {
      const map = new AMap.Map('container', {
        resizeEnable: true,
        center: [116.481181, 39.989792],
        zoom: 16,
      });
  }
}
