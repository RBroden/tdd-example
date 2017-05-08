import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { SecondComponent } from './second.component';

describe('SecondComponent - testing suite', () => {

    let fixture: ComponentFixture<SecondComponent>;
    let component: SecondComponent;
    let debugElement: DebugElement;
    let nativeElement: HTMLElement;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                SecondComponent
            ]
        });

        fixture = TestBed.createComponent(SecondComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        nativeElement = debugElement.nativeElement;

    });

    it ('should instantiate SecondComponent', () => {
        expect(component instanceof SecondComponent)
            .toBe(true);
    });

    it ('on start root element textContent to be empty', () => {

        // assign content the nativeElement textContent before detectChanges
        const content = nativeElement.textContent;
        // content should be an empty string
        expect(content)
            .toBe('');
    });

    it ('after ngOnInit lifecycle element textContent should contain text', () => {

        // call fixture #detectChanges to allow lifecycle changes 
        fixture.detectChanges();
        // assign content with the nativeElement textContent after detectChanges
        const content = nativeElement.textContent;
        // content should not be an empty string
        expect(content)
            .not
            .toBe('');
    });

    it ('check initial textContent and textContent after ngOnInit lifecycle', () => {

        // assign initial_content the nativeElement textContent before detectChanges
        const initial_content = nativeElement.textContent;
        // initial_content should be an empty string
        expect(initial_content)
            .toBe('');

        // call fixture #detectChanges to allow lifecycle changes 
        fixture.detectChanges();
        // assign after_content the nativeElement textContent after detectChanges
        const after_content = nativeElement.textContent;
        // after_content should not be an empty string
        expect(after_content)
            .not
            .toBe('');
    });
});
