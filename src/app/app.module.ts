import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { OverviewComponent } from './overview/overview.component';
import {AppRoutingModule} from './app-routing.module';
import {SiteLayoutComponent} from './shared/site-layout/site-layout.component';
import {TokenInterceptor} from './classes/token.interceptor';
import {UserFilterPipe} from './shared/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    OverviewComponent,
    SiteLayoutComponent,
    UserFilterPipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: TokenInterceptor
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
