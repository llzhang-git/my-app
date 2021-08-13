import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataChangeComponent } from './data-change.component';

describe('DataChangeComponent', () => {
  let component: DataChangeComponent;
  let fixture: ComponentFixture<DataChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
