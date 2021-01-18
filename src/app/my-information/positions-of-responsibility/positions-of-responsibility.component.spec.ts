import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionsOfResponsibilityComponent } from './positions-of-responsibility.component';

describe('PositionsOfResponsibilityComponent', () => {
  let component: PositionsOfResponsibilityComponent;
  let fixture: ComponentFixture<PositionsOfResponsibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionsOfResponsibilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionsOfResponsibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
