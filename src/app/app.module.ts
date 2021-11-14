import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { BannerComponent } from './common/banner/banner.component';
import { IndexComponent } from './page/index/index.component';
import { MissionComponent } from './page/mission/mission.component';
import { IconBoxComponent } from './common/icon-box/icon-box.component';
import { FooterComponent } from './common/footer/footer.component';
import { CarouselComponent } from './common/carousel/carousel.component';
import { ExpandBoxComponent } from './common/expand-box/expand-box.component';
import { FaqComponent } from './page/faq/faq.component';
import { AboutComponent } from './page/about/about.component';
import { DirectionsComponent } from './page/directions/directions.component';
import { RegistationComponent } from './page/registration/registration.component';
import { DatesComponent } from './page/dates/dates.component';
import { VolunteerComponent } from './page/volunteer/volunteer.component';
import { ContactComponent } from './page/contact/contact.component';
import { StoreComponent } from './page/store/store.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    IndexComponent,
    MissionComponent,
    IconBoxComponent,
    FooterComponent,
    CarouselComponent,
    ExpandBoxComponent,
    FaqComponent,
    AboutComponent,
    DirectionsComponent,
    RegistationComponent,
    DatesComponent,
    VolunteerComponent,
    ContactComponent,
    StoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
