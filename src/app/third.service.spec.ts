import { ThirdService } from './third.service';

describe('ThirdService Isolated Unit Test without the TestBed', () => {

    // declare variable service as an instance of ThirdService
    let service: ThirdService;

    // use beforeEach to reset the service to a base state before each test case
    beforeEach( () => { service = new ThirdService(); });

    it('#getData should return data property', () => {
        const value = 'test value';
        // assign service data
        service.data = value;
        // check if #getData returns test value
        expect(service.getData())
            .toBe(value);
    });

    it('#setData should assign data property value', () => {
        const value = 'test value';
        // use service #setData
        service.setData(value);
        // check service data to see if #setData was successful
        expect(service.data)
            .toBe(value);
    });

    it('#hasData should return false if ThirdService has no data', () => {
        // assign no data to service
        // check service #hasData
        expect(service.hasData())
            .toBe(false);
    });

    it('#hasData should return true if ThirdService has data', () => {
        const value = 'test value';
        // assign data to service
        service.data = value;
        // check service #hasData
        expect(service.hasData())
            .toBe(true);
    });

    it('#clearData resets data', () => {
        const value = 'test value';
        // assign data to service
        service.data = value;
        // clear service data with #clearData
        service.clearData();
        // check if service data is cleared
        expect(service.data)
            .toBe(null);
    });

    it('use methods #setData, #getData, #hasData, and #clearData', () => {
        const value = 'test value';
        // upon initial state, #hasData should return false
        expect(service.hasData())
            .toBe(false);
        // use #setData to assign service data
        service.setData(value);
        // #getData should return value
        expect(service.getData())
            .toBe(value);
        // #hasData should return true
        expect(service.hasData())
            .toBe(true);
        // #clearData to reset data
        service.clearData();
        // #hasData should return false
        expect(service.hasData())
            .toBe(false);
    });

    // DoneFn (interface) Action method that should be called when the async work is complete
    it('#getAsyncValue should return data property asynchronously with promise', (done: DoneFn) => {
        const value = 'Test value';
        // assign data to service
        service.data = value;
        // #getAsyncValue should return test value in response after resolving
        service.getAsyncValue().then( response => {
            // response should equal value
            expect(response)
                .toBe(value);
            // Action method that should be called when the async work is complete
            done();
        });
    });

    it('#getObservableValue should return data property with observable', (done: DoneFn) => {
        const value = 'Test value';
        // assign data to service
        service.data = value;
        // #getObservableValue should return test value in subscribe
        service.getObservableValue().subscribe( response => {
            // response should equal value
            expect(response)
                .toBe(value);
            // Action method that should be called when the async work is complete
            done();
        });
    });

});
