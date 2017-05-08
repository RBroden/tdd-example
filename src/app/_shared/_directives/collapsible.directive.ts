import { Directive, Input } from '@angular/core';

@Directive({
    selector: 'collapsibleContainer'
})
export class CollapsibleContainerDirective {

    @Input() isCollapsed: boolean = false;

    constructor() {}
}