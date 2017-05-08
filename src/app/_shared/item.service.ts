import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Item } from './_models/item.model';

import { Observable, BehaviorSubject } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ItemService {

    private items: Item[];
    private currentItemId: number;
    // BehaviorSubject has next() and asObservable() method
    private itemsObservable: BehaviorSubject<Item[]> = new BehaviorSubject(null);
    private currentItemObservable: BehaviorSubject<Item> = new BehaviorSubject(null);
    private headers = new Headers({'Content-Type': 'application/json'});
    private itemsUrl = 'api/items';  // URL to web api

    constructor(private http: Http) {
        this.requestItems()
            .then(items => this.setItems(items));
    }

    // request events from server
    requestItems(): Promise<Item[]> {
        return this.http.get(this.itemsUrl, this.headers)
               .toPromise()
               .then(response => response.json().data as Item[])
               .catch(this.handleError);
    }

    getItems(): Observable<Item[]>{
        return this.itemsObservable.asObservable()
            .catch(this.handleError);
    }

    getItem(id: number): Observable<Item> {
        this.setCurrentItemId(id);
        return this.currentItemObservable.asObservable()
            .catch(this.handleError);
    }

    private setItems(items: Item[]): void {
        this.items = items;
        this.updateItems();
    }

    private setCurrentItemId(id: number): void {
        this.currentItemId = id;
        this.updateCurrentItem();
    }

    private updateItems() {
        this.itemsObservable.next(this.items);
        this.updateCurrentItem();
    }

    private updateCurrentItem() {
        if (!this.items) { return; } // guard
        let item = this.items.find( (item: Item) => item.id === this.currentItemId);
        this.currentItemObservable.next(item);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

}
