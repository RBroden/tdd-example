import { browser, by, element } from 'protractor';
import { Item } from '../src/app/_shared/_models/item.model';

describe('App', () => {

    beforeEach( () => {
        browser.get('/');
    });

    it('should have a title', () => {
        let subject = browser.getTitle();
        expect(subject).not.toBe('');
    });

    it('filling out form and hitting submit should display text and reset form', () => {
        let validItem: Item = <Item>{
            name: 'test name',
            type: 'test type',
            cost: 42,
            notes: 'test notes'
        };
        element(by.css('input[formControlName=name')).sendKeys(validItem.name);
        element(by.css('input[formControlName=type')).sendKeys(validItem.type);
        element(by.css('input[formControlName=cost')).sendKeys(validItem.cost);
        element(by.css('input[formControlName=notes')).sendKeys(validItem.notes);
        element(by.id('fourthComponentSubmit')).click();
        let itemNameDisplay = element(by.id('itemNameDisplay')).getText();
        let itemTypeDisplay = element(by.id('itemTypeDisplay')).getText();
        let itemCostDisplay = element(by.id('itemCostDisplay')).getText();
        let itemNotesDisplay = element(by.id('itemNotesDisplay')).getText();
        // item name should be displayed
        expect(itemNameDisplay)
            .toBe(validItem.name);
        // item input value should be empty after submit
        expect(element(by.css('input[formControlName=name')).getAttribute('value'))
            .toBe('');
        // item name should be displayed
        expect(itemTypeDisplay)
            .toBe(validItem.type);
        // item input value should be empty after submit
        expect(element(by.css('input[formControlName=type')).getAttribute('value'))
            .toBe('');
        // item name should be displayed
        expect(itemCostDisplay)
            .toBe(validItem.cost.toString());
        // item input value should be empty after submit
        expect(element(by.css('input[formControlName=cost')).getAttribute('value'))
            .toBe('');
        // item name should be displayed
        expect(itemNotesDisplay)
            .toBe(validItem.notes);
        // item input value should be empty after submit
        expect(element(by.css('input[formControlName=notes')).getAttribute('value'))
            .toBe('');
    });

});
