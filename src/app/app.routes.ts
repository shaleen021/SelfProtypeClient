import { Routes } from '@angular/Router';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { DisplayResumeComponent } from './display-resume/display-resume.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { MyInterestsComponent } from './my-interests/my-interests.component';

export const ROUTES: Routes = [
    {
        path : '', component : HeaderComponentComponent,
        children : [
            { path : '', component : HomePageComponent},
            { path : 'contactMe' , component : ContactMeComponent},
            { path : 'displayResume' , component : DisplayResumeComponent},
            { path : 'projects' , component : MyProjectsComponent},
            { path : 'hobbies' , component : MyInterestsComponent}
        ]
    }
];
