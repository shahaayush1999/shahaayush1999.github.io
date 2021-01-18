import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskbarClockComponent } from './taskbar-clock.component';

describe('LiveClockComponent', () => {
  let component: TaskbarClockComponent;
  let fixture: ComponentFixture<TaskbarClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskbarClockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskbarClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
