import { Component, OnInit } from '@angular/core';

import { ItemService } from './_shared/item.service';
import { Item } from './_shared/_models/item.model';

@Component({
    selector: 'sixth-component',
    templateUrl: './sixth.component.html'
})
export class SixthComponent implements OnInit {

    items: Item[];
    error: any;

    constructor(private itemService: ItemService) {}

    ngOnInit() {
        this.itemService.getItems()
            .subscribe(
                items => this.setItems(items),
                error => this.error = <any>error
            );
    }

    setItems(items: Item[]): void {
        this.items = items;
    }
}
