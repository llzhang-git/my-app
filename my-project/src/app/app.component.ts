import { Component, ViewChild, ElementRef } from '@angular/core';
import { imageData } from '../imageData';
declare var EXIF: any;
@Component({
  selector: 'app-root',
    template: `
        <img #img src="{{data}}" style="display: block;width :10px"/> 
        <button (click)="getDataClick()">Get Data</button>
        <div>{{output | json}}</div>
  `
})
export class AppComponent {
  title = 'my-project';
  @ViewChild('img') imgEl: ElementRef;
  data = imageData;

  output: string;

  private getExif() {
    let allMetaData: any;
    EXIF.getData(<HTMLImageElement>this.imgEl.nativeElement, function () {
      // `this` is provided image, check with `console.log(this)`
      allMetaData = EXIF.getAllTags(this);
    });

    this.output = allMetaData;
  }

  getDataClick() {
    this.getExif();
  }
}
