import {
    TestBed,
    ComponentFixture,
    async
} from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SixthComponent } from './sixth.component';
import {
    ListContainerComponent,
    ListItemComponent,
    ItemService,
    Item
} from './_shared';

import { Observable, BehaviorSubject } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

describe('SixthComponent - test suite', () => {

    let fixture: ComponentFixture<SixthComponent>;
    let component: SixthComponent;
    let debugElement: DebugElement;
    let nativeElement: HTMLElement;
    let itemService: ItemService;
    let componentItemService: ItemService;
    let spy: jasmine.Spy;
    const testItemsList = <Item[]>[
        {
            id: this.i++,
            name: 'Apple Butter',
            type: 'butter',
            cost: 3.99,
            notes: 'This is delicous!',
            tags: [
                'food',
                'apple',
                'butter'
            ]
        }, {
            id: this.i++,
            name: 'Apple Cake',
            type: 'food',
            cost: 9.99,
            tags: [
                'food',
                'dessert',
                'apple',
                'cake'
            ]
        }, {
            id: this.i++,
            name: 'Apple Chips',
            type: 'snack',
            cost: 2.99,
            tags: [
                'food',
                'snack',
                'apple',
                'chips'
            ]
        }
    ];

    beforeEach( async( () => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule
            ],
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

        // spies on the real item service initialize with a testItemsList
        spy = spyOn(componentItemService, 'getItems')
            .and.returnValue(Observable.of(testItemsList));
    });

    it ('SixthComponent should instantiate', () => {
        expect(component instanceof SixthComponent)
            .toBe(true);
    });

    // it('should have items from itemService after lifecycle hook (async)', async(() => {
    //     component.ngOnInit();
    //     expect(component.items)
    //         .toBe(testItemsList);
    // }));

});
