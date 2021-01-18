import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskbarIconsComponent } from './taskbar-icons.component';

describe('TaskbarIconsComponent', () => {
  let component: TaskbarIconsComponent;
  let fixture: ComponentFixture<TaskbarIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskbarIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskbarIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
