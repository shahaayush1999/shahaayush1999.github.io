import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskbarActivityComponent } from './taskbar-activity.component';

describe('CurrentActivityComponent', () => {
  let component: TaskbarActivityComponent;
  let fixture: ComponentFixture<TaskbarActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskbarActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskbarActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
