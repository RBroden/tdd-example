import {
    TestBed,
    ComponentFixture,
    async
} from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { Http } from '@angular/http';

import { SixthComponent } from './sixth.component';
import {
    ListContainerComponent,
    ListItemComponent,
    ItemService,
    Item
} from './_shared';

describe('SixthComponent - test suite', () => {

    let fixture: ComponentFixture<SixthComponent>;
    let component: SixthComponent;
    let debugElement: DebugElement;
    let nativeElement: HTMLElement;
    let itemService: ItemService;
    let componentItemService: ItemService;
    let spy: jasmine.Spy;

    beforeEach( async( () => {
        TestBed.configureTestingModule({
            declarations: [
                SixthComponent,
                ListContainerComponent,
                ListItemComponent
            ],
            providers: [
                ItemService
            ]
        });
    }));

    beforeEach( () => {
        fixture = TestBed.createComponent(SixthComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        nativeElement = debugElement.nativeElement;

        // UserService actually injected into the component
        componentItemService = fixture.debugElement.injector.get(ItemService);

        // UserService from the root injector
        itemService = TestBed.get(ItemService);
    });

    it ('SixthComponent should instantiate', () => {
        expect(component instanceof SixthComponent)
            .toBe(true);
    });

    it('items should be undefined upon instantiation', () => {
        // let spy = spyOn(itemService, 'requestItems')
        //     .and.returnValue(Promise.resolve(testQuote));
    });

});

