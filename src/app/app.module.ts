import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProjectCardComponent } from './project-card/project-card.component';

import { ProjectService } from './project.service';
import { ProjectsComponent } from './projects/projects.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProjectCardComponent,
    ProjectsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
