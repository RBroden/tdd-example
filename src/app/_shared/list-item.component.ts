import { Component, Input } from '@angular/core';

import { Item } from './_models/item.model';

@Component({
    selector: 'list-item',
    template: `
        <div>
            <h3>{{ item.name }} | ID:{{ item.id }}</h3>
            <p *ngIf="!!item.cost">Cost: {{ item.cost | currency:'USD':true }}</p>
            <p *ngIf="!!item.notes">Notes: {{ item.notes }}</p>
            <ul *ngIf="!!item.tags">
                <li *ngFor="let tag of item.tags">{{ tag }}</li>
            </ul>
        </div>
    `
})
export class ListItemComponent {

    @Input() item: Item;

}
