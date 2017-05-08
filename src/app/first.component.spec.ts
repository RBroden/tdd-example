import {
  TestBed, // TestBed is a testing utility to create a test environment for the component
  ComponentFixture // ComponentFixture provides access to the component instance itself and DebugElement 
} from '@angular/core/testing';

import {
  DebugElement // DebugElement, handle on component's DOM Element
} from '@angular/core';

import {
  FirstComponent // component to be tested
} from './first.component';


// Jasmine describe (https://jasmine.github.io/api/2.6/global.html#describe)
// describe(description, specDefinitions)
// Create a group of specs (often called a suite).
// Calls to describe can be nested within other calls to compose your suite as a tree.
describe('FirstComponent - testing suite', () => {

  // declare variables to be used during testing
  // declared within describe suite to be w/in scope of each spec
  // use beforeEach to reset each variable to base state
  let fixture: ComponentFixture<FirstComponent>;
  let component: FirstComponent;
  let debugElement: DebugElement;
  let nativeElement: HTMLElement;

  // Jasmine beforeEach (https://jasmine.github.io/api/2.6/global.html#beforeEach)
  // beforeEach(functionopt, timeoutopt)
  // Run some shared setup before each of the specs in the describe in which it is called.
  beforeEach(() => {
    // TestBed is a testing utility
    // configureTestingModule produces a testing module environment
    // similar metadata object to @NgModule (no need for imports)
    // configureTestingModule in beforeEach to reset TestBed to base state before each test
    TestBed.configureTestingModule({
      declarations: [
        FirstComponent
      ]
    });

    // use TestBed method createComponent to instantiate ComponentFixture of FirstComponent
    fixture = TestBed.createComponent(FirstComponent);
    // ^ ComponentFixture, handle on test environment for created component
    // ^ ComponentFixture provides access to the component instance itself and DebugElement 
    // ^ do not re-configure TestBed after calling createComponent

    // instantiate instance of the root component class
    component = fixture.componentInstance;

    // DebugElement, handle on component's DOM Element
    debugElement = fixture.debugElement;
    // ^ has methods query, queryAll, etc. for asserts

    // HTMLElement, the native DOM element at the root of the component
    nativeElement = debugElement.nativeElement;

  });

  // Jasmine it (https://jasmine.github.io/api/2.6/global.html#it)
  // it(description, testFunctionopt, timeoutopt)
  // Define a single spec. A spec should contain one or more expectations that test the state of the code.
  // A spec whose expectations all succeed will be passing and a spec with any failures will fail.
  it ('should instantiate FirstComponent', () => {
    // Jasmine expect (https://jasmine.github.io/api/2.6/global.html#expect)
    // expect(actual) → {matchers}
    // Create an expectation for a spec.
    expect(component instanceof FirstComponent)
      // Jasmine Matchers (https://jasmine.github.io/api/2.6/matchers.html)
      // Jasmine toBe(expected) expect the actual value to be === to the expected value.
      .toBe(true);
  });
});
