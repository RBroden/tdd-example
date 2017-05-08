import { Component } from '@angular/core';

@Component({
    selector: 'second-component',
    template: `<p>{{ text }}</p>`
})
export class SecondComponent {

    text: string = '';

    constructor() { }

    ngOnInit() {
        this.text = 'Second Component';
    }
}