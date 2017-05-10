import {
    TestBed,
    ComponentFixture,
    async
} from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import {
    FormControl,
    FormBuilder,
    ReactiveFormsModule
} from '@angular/forms';

import { FourthComponent } from './fourth.component';

import { Item } from './_shared/_models/item.model';


describe('FourthComponent test suite', () => {

    let fixture: ComponentFixture<FourthComponent>;
    let component: FourthComponent;
    let debugElement: DebugElement;
    let nativeElement: HTMLElement;

    beforeEach( () => {
        TestBed.configureTestingModule({
            imports: [ ReactiveFormsModule ],
            declarations: [
                FourthComponent
            ],
            providers: [ FormBuilder ]
        });

        fixture = TestBed.createComponent(FourthComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        nativeElement = debugElement.nativeElement;

    });

    it (' should update ', () => {
        let validItem: Item = <Item>{
            name: 'test name',
            type: 'test type',
            cost: 42,
            notes: 'test notes'
        };
        fixture.detectChanges();
        component.itemForm.controls['name'].setValue(validItem.name);
        component.itemForm.controls['type'].setValue(validItem.type);
        component.itemForm.controls['cost'].setValue(validItem.cost);
        component.itemForm.controls['notes'].setValue(validItem.notes);
        component.onSubmit();
        expect(JSON.stringify(component.item))
            .toBe(JSON.stringify(validItem));
    });
});
