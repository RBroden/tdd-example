import { Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class ThirdService{
    data: string;

    constructor() { }

    getData(): string {
        return this.data;
    }

    setData(data: string): void {
        this.data = data;
    }

    hasData(): boolean {
        return !!this.data;
    }

    clearData(): void {
        this.data = null;
    }

    getAsyncValue(): Promise<string> {
        return Promise.resolve(this.data);
    }

    getObservableValue(): Observable<string> {
        return Observable.of(this.data);
    }

}
