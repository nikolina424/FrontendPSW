import { NewFeedbackComponent } from './pages/new-feedback/new-feedback.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './pages/frontpage/frontpage.component'
import { LoginComponent } from './pages/login/login.component'
import { RegisterComponent } from './pages/register/register.component'

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'frontpage'},
  {path: 'frontpage', component: FrontpageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'homepage', component: HomepageComponent, children:[
    {path: 'feedback', component:FeedbackComponent},
    {path: 'new-feedback', component: NewFeedbackComponent}
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
