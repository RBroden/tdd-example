import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data/in-memory-data.service';

// Components
import { AppComponent } from './app.component';
import { FirstComponent } from './first.component'; // used for basic testing
import { SecondComponent } from './second.component'; // shows some lifecycle change testing

// FifthComponent demonstrates router testing
import { FifthComponent } from './fifth.component';
// FifthComponents route components
import { RouteOneComponent } from './_app-routing-components/route-one.component';
import { RouteTwoComponent } from './_app-routing-components/route-two.component';
import { PageNotFoundComponent } from './_app-routing-components/not-found.component';

// SixthComponent demonstrates directive, component interaction, and http testing
import { SixthComponent } from './sixth.component';
// SixthComponent child components
import {
  CollapsibleContainerDirective,
  ItemService,
  ListContainerComponent,
  ListItemComponent
} from './_shared';

// Services
import { ThirdService } from './third.service'; // isolated unit tests for service

// App Routing
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    FifthComponent,
    RouteOneComponent,
    RouteTwoComponent,
    PageNotFoundComponent,
    SixthComponent,
    ListContainerComponent,
    ListItemComponent,
    CollapsibleContainerDirective
  ],
  providers: [
    ThirdService,
    ItemService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
