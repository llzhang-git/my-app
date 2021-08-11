import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapEchartsComponent } from './map-echarts.component';

describe('MapEchartsComponent', () => {
  let component: MapEchartsComponent;
  let fixture: ComponentFixture<MapEchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapEchartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapEchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
