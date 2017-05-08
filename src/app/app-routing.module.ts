import { NgModule }       from '@angular/core';
import { RouterModule }   from '@angular/router';

import { RouteOneComponent } from './_app-routing-components/route-one.component';
import { RouteTwoComponent } from './_app-routing-components/route-two.component';
import { PageNotFoundComponent } from './_app-routing-components/not-found.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'route-one', pathMatch: 'full'},
      { path: 'route-one', component: RouteOneComponent },
      { path: 'route-two', component: RouteTwoComponent },
      { path: 'not-found', component: PageNotFoundComponent },
      { path: '**', redirectTo: 'not-found' }
    ])
  ],
  exports: [ RouterModule ] // re-export the module declarations
})
export class AppRoutingModule { };
