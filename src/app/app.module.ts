import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgProgressModule } from 'ng2-progressbar';
import { RouterModule , Routes , PreloadAllModules } from '@angular/router';
import { ROUTES } from './app.routes';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { DisplayResumeComponent } from './display-resume/display-resume.component';
import { AppProgressBarService } from './app.progressbar.service';
import { Chart,ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    HomePageComponent,
    ContactMeComponent,
    DisplayResumeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgProgressModule,
    ReactiveFormsModule,
    ChartModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
  ],
  providers: [AppProgressBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
