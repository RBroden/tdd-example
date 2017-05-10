import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { Item } from './_shared/_models/item.model';

@Component({
    selector: 'fourth-component',
    templateUrl: './fourth.component.html'
})
export class FourthComponent implements OnInit {

    item: Item;
    itemForm: FormGroup;

    constructor (private formBuilder: FormBuilder) {

    }

    ngOnInit() {
        this.itemForm = this.formBuilder.group({
            name: '',
            type: '',
            cost: null,
            notes: ''
        });
    }

    ngOnChanges() {
        this.itemForm.reset();
    }

    onSubmit(): void {
        this.item = this.prepareSaveItem();
        this.ngOnChanges();
    }

    prepareSaveItem(): Item {
        const formModel = this.itemForm.value;

        const saveItem: Item = {
            name: formModel.name as string,
            type: formModel.type as string,
            cost: formModel.cost as number,
            notes: formModel.notes as string
        };
        return saveItem;
    }

}
