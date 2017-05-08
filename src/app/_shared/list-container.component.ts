import { Component, Input } from '@angular/core';

import { Item } from './_models/item.model';

@Component({
    selector: 'list-container',
    template: `
        <div *ngFor="let item of list">
            <list-item [item]="item"></list-item>
        </div>
    `
})
export class ListContainerComponent {

    @Input() list: Item[];

}
