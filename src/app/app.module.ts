import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TaskbarComponent } from './my-components/taskbar/taskbar.component';
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
import { TaskbarActivityComponent } from './my-components/taskbar-activity/taskbar-activity.component';
import { TaskbarClockComponent } from './my-components/taskbar-clock/taskbar-clock.component';
import { WindowPanelComponent } from './my-components/window-panel/window-panel.component';
import { TaskbarIconsComponent } from './my-components/taskbar-icons/taskbar-icons.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    TaskbarComponent,
    DockComponent,
    TaskbarClockComponent,
    IntroductionComponent,
    EducationComponent,
    WorkExperienceComponent,
    TechnicalKnowledgeComponent,
    SkillsAndHobbiesComponent,
    ProjectsComponent,
    CertificationsAndAchievementsComponent,
    PublicationsComponent,
    PositionsOfResponsibilityComponent,
    TaskbarActivityComponent,
    TaskbarClockComponent,
    WindowPanelComponent,
    TaskbarIconsComponent
  ],
    imports: [
        BrowserModule,
        FlexLayoutModule,
        MatToolbarModule,
        DragDropModule,
        BrowserAnimationsModule,
        MatIconModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
