import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BannerComponent } from './banner/banner.component';
import { IndexComponent } from './index/index.component';
import { MissionComponent } from './mission/mission.component';
import { IconBoxComponent } from './icon-box/icon-box.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    IndexComponent,
    MissionComponent,
    IconBoxComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
