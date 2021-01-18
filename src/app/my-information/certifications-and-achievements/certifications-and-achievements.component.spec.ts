import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationsAndAchievementsComponent } from './certifications-and-achievements.component';

describe('CertificationsAndAchievementsComponent', () => {
  let component: CertificationsAndAchievementsComponent;
  let fixture: ComponentFixture<CertificationsAndAchievementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificationsAndAchievementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationsAndAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
