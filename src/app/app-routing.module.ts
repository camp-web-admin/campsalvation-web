import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './page/index/index.component';
import { MissionComponent } from './page/mission/mission.component';
import { FaqComponent } from './page/faq/faq.component';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { DatesComponent } from './page/dates/dates.component';
import { DirectionsComponent } from './page/directions/directions.component';
import { RegistationComponent } from './page/registration/registration.component';
import { StoreComponent } from './page/store/store.component';
import { VolunteerComponent } from './page/volunteer/volunteer.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: IndexComponent
  },
  {
    path: 'mission',
    component: MissionComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'dates',
    component: DatesComponent
  },
  {
    path: 'directions',
    component: DirectionsComponent
  },
  {
    path: 'registration',
    component: RegistationComponent
  },
  {
    path: 'store',
    component: StoreComponent
  },
  {
    path: 'volunteer',
    component: VolunteerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export default routes;
