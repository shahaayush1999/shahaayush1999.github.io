import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import { StatusBarComponent } from './my-components/task-bar/status-bar.component';
import { DockComponent } from './my-components/dock/dock.component';
import { IntroductionComponent } from './my-information/introduction/introduction.component';
import { EducationComponent } from './my-information/education/education.component';
import { WorkExperienceComponent } from './my-information/work-experience/work-experience.component';
import { TechnicalKnowledgeComponent } from './my-information/technical-knowledge/technical-knowledge.component';
import { SkillsAndHobbiesComponent } from './my-information/skills-and-hobbies/skills-and-hobbies.component';
import { ProjectsComponent } from './my-information/projects/projects.component';
import { CertificationsAndAchievementsComponent } from './my-information/certifications-and-achievements/certifications-and-achievements.component';
import { PublicationsComponent } from './my-information/publications/publications.component';
import { PositionsOfResponsibilityComponent } from './my-information/positions-of-responsibility/positions-of-responsibility.component';
import { CurrentActivityComponent } from './my-components/current-activity/current-activity.component';
import {LiveClockComponent} from './my-components/live-clock/live-clock.component';
import {WindowPanelComponent} from './my-components/window-panel/window-panel.component';
import { TaskbarIconsComponent } from './my-components/taskbar-icons/taskbar-icons.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusBarComponent,
    DockComponent,
    LiveClockComponent,
    IntroductionComponent,
    EducationComponent,
    WorkExperienceComponent,
    TechnicalKnowledgeComponent,
    SkillsAndHobbiesComponent,
    ProjectsComponent,
    CertificationsAndAchievementsComponent,
    PublicationsComponent,
    PositionsOfResponsibilityComponent,
    CurrentActivityComponent,
    LiveClockComponent,
    WindowPanelComponent,
    TaskbarIconsComponent
  ],
    imports: [
        BrowserModule,
        FlexLayoutModule,
        MatToolbarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
