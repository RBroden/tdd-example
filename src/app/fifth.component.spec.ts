import { async, ComponentFixture, fakeAsync, TestBed, tick,
} from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { SpyLocation } from '@angular/common/testing';

import { click } from '../testing';

import { Router, RouterLinkWithHref } from '@angular/router';
import { By } from '@angular/platform-browser';
import { DebugElement, Type } from '@angular/core';
import { Location } from '@angular/common';

import { AppModule } from './app.module';
import { FifthComponent } from './fifth.component';
// FifthComponents route components
import { RouteOneComponent } from './_app-routing-components/route-one.component';
import { RouteTwoComponent } from './_app-routing-components/route-two.component';
import { PageNotFoundComponent } from './_app-routing-components/not-found.component';

let component: FifthComponent;
let fixture: ComponentFixture<FifthComponent>;
let page: Page; // Class defined below
let router: Router;
let location: SpyLocation;

describe('FifthComponent & RouterTestingModule - Router Testing', () => {

    beforeEach( async(() => {
        TestBed.configureTestingModule({
            imports: [ AppModule, RouterTestingModule ]
        });
    }));

    it('should navigate to "route-one" immediately', fakeAsync(() => {
        createComponent();
        expect(location.path()).toEqual('/route-one');
        expectElementOf(RouteOneComponent);
    }));

    it('should navigate to "Route One Component" on click', fakeAsync(() => {
        createComponent();
        click(page.route_oneDebugElement);

        advance();
        expectPathToBe('/route-one');
        expectElementOf(RouteOneComponent);
    }));

    it('should navigate to "Route Two Component" on click', fakeAsync(() => {
        createComponent();
        click(page.route_twoDebugElement);

        advance();
        expectPathToBe('/route-two');
        expectElementOf(RouteTwoComponent);
    }));

    it('should navigate to "Route One Component" w/ browser location URL change', fakeAsync(() => {
        createComponent();
        location.simulateHashChange('/route-one');
        advance();
        expectPathToBe('/route-one');
        expectElementOf(RouteOneComponent);
    }));

    it('should navigate to "Route Two Component" w/ browser location URL change', fakeAsync(() => {
        createComponent();
        location.simulateHashChange('/route-two');
        advance();
        expectPathToBe('/route-two');
        expectElementOf(RouteTwoComponent);
    }));

    it('should navigate to "Page Not Found Component" w/ browser location URL change', fakeAsync(() => {
        createComponent();
        location.simulateHashChange('/sklfjsdfdksjsk'); // bogus url change

        advance();
        expectPathToBe('/not-found');
        expectElementOf(PageNotFoundComponent);
    }));

});

////// Helpers /////////

class Page {
  route_oneDebugElement: DebugElement;
  route_twoDebugElement: DebugElement;
  not_foundDebugElement: DebugElement;
  recordedEvents:  any[]  =  [];

  // for debugging
  comp: FifthComponent;
  location: SpyLocation;
  router: Router;
  fixture: ComponentFixture<FifthComponent>;

  constructor() {
    // doesn't seem to get recordedEvents from router
    router.events.subscribe(e => this.recordedEvents.push(e));
    const links = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    this.route_oneDebugElement = links[0];
    this.route_twoDebugElement = links[1];
    this.not_foundDebugElement = links[2];

    // for debugging
    this.comp    = component;
    this.fixture = fixture;
    this.router  = router;
  }
}

function createComponent() {
  fixture = TestBed.createComponent(FifthComponent);
  component = fixture.componentInstance;

  const injector = fixture.debugElement.injector;
  location = injector.get(Location) as SpyLocation;
  router = injector.get(Router);
  router.initialNavigation();

  advance();

  page = new Page();
}

/** Wait a tick, then detect changes */
function advance(): void {
  tick();
  fixture.detectChanges();
}

function expectPathToBe(path: string, expectationFailOutput?: any) {
  expect(location.path()).toEqual(path, expectationFailOutput || 'location.path()');
}

function expectElementOf(type: Type<any>): any {
  const el = fixture.debugElement.query(By.directive(type));
  expect(el).toBeTruthy('expected an element for ' + type.name);
  return el;
}
