import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './components/layouts/default/default.component';
import { BlankComponent } from './components/layouts/blank/blank.component';
import { SideNavComponent } from './components/partials/side-nav/side-nav.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { StartComponent } from './components/pages/start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    BlankComponent,
    SideNavComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
