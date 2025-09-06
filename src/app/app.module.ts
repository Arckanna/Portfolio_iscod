import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component'
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ScrollRevealDirective } from './shared/scroll-reveal.directive';
import {ExperienceComponent} from "./components/experience/experience.component";
import { ProjectDialogComponent } from './components/project-dialog/project-dialog.component';
import {ContactDialogComponent} from "./components/contact-dialog/contact-dialog.component";
import {SafeUrlPipe} from "./pipes/safe-url.pipe";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    ExperienceComponent,
    LandingPageComponent,
    ScrollRevealDirective,
    ProjectDialogComponent,
    ContactDialogComponent,
    SafeUrlPipe

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule, MatChipsModule, MatButtonModule,
    MatDialogModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
