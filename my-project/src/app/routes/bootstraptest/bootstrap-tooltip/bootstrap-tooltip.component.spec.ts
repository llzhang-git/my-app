import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapTooltipComponent } from './bootstrap-tooltip.component';

describe('BootstrapTooltipComponent', () => {
  let component: BootstrapTooltipComponent;
  let fixture: ComponentFixture<BootstrapTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapTooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
