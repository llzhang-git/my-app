import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapGaodeComponent } from './map-gaode.component';

describe('MapGaodeComponent', () => {
  let component: MapGaodeComponent;
  let fixture: ComponentFixture<MapGaodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapGaodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapGaodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
