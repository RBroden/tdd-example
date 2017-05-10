import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Item } from '../_shared/_models/item.model';

export class InMemoryDataService implements InMemoryDbService {

    i: number = 0;

    createDb() {
        let items = <Item[]>[
            {
                id: this.i++,
                name: 'Apple Butter',
                type: 'butter',
                cost: 3.99,
                notes: 'This is delicous!',
                tags: [
                    'food',
                    'apple',
                    'butter'
                ]
            }, {
                id: this.i++,
                name: 'Apple Cake',
                type: 'food',
                cost: 9.99,
                tags: [
                    'food',
                    'dessert',
                    'apple',
                    'cake'
                ]
            }, {
                id: this.i++,
                name: 'Apple Chips',
                type: 'snack',
                cost: 2.99,
                tags: [
                    'food',
                    'snack',
                    'apple',
                    'chips'
                ]
            }, {
                id: this.i++,
                name: 'Apple Cider',
                type: 'drink',
                cost: 2.99,
                notes: 'Good during the winter.',
                tags: [
                    'food',
                    'drink',
                    'apple',
                    'cider'
                ]
            }, {
                id: this.i++,
                name: 'Apple Crisp',
                type: 'dessert',
                cost: 7.99,
                tags: [
                    'food',
                    'dessert',
                    'apple',
                    'crisp'
                ]
            }, {
                id: this.i++,
                name: 'Apple Pie',
                type: 'dessert',
                cost: 10.99,
                tags: [
                    'food',
                    'dessert',
                    'apple',
                    'pie'
                ]
            }, {
                id: this.i++,
                name: 'Ajiaco',
                type: 'soup',
                cost: 3.99,
                notes: 'A potato soup with regional variations. From the region of Colombia',
                tags: [
                    'food',
                    'potato',
                    'soup',
                    'Colombia'
                ]
            }, {
                id: this.i++,
                name: 'Aloo gobi',
                type: 'soup',
                cost: 4.99,
                notes: 'A dish of cauliflower, potato, and turmeric. From the region of India',
                tags: [
                    'food',
                    'cauliflower',
                    'potato',
                    'turmeric',
                    'India'
                ]
            }, {
                id: this.i++,
                name: 'George Washington',
                type: 'president',
                notes: 'Was not affiliated with any party.',
                tags: [
                    'president'
                ]
            }, {
                id: this.i++,
                name: 'John Adams',
                type: 'president',
                notes: 'Second president. Was also vice president to George Washington.',
                tags: [
                    'president',
                    'vice president'
                ]
            }, {
                id: this.i++,
                name: 'Thomas Jefferson',
                type: 'president',
                notes: 'Had two vice presidents. Was also vice president to John Adams.',
                tags: [
                    'president',
                    'vice president'
                ]
            }, {
                id: this.i++,
                name: 'Always Dreaming',
                type: 'horse',
                tags: [
                    'horse',
                    'race horse',
                    'Kentucky Derby'
                ]
            }, {
                id: this.i++,
                name: 'Lookin At Lee',
                type: 'horse',
                tags: [
                    'horse',
                    'race horse',
                    'Kentucky Derby'
                ]
            }, {
                id: this.i++,
                name: 'Battle of Midway',
                type: 'horse',
                tags: [
                    'horse',
                    'race horse',
                    'Kentucky Derby'
                ]
            }, {
                id: this.i++,
                name: 'Classic Empire',
                type: 'horse',
                tags: [
                    'horse',
                    'race horse',
                    'Kentucky Derby'
                ]
            }, {
                id: this.i++,
                name: 'Pratical Joke',
                type: 'horse',
                tags: [
                    'horse',
                    'race horse',
                    'Kentucky Derby'
                ]
            }, {
                id: this.i++,
                name: 'Avatar',
                type: 'movie',
                cost: 425000000,
                notes: 'Released 12/18/2009'
            }, {
                id: this.i++,
                name: 'Star Wars Episode VII: The Force Awakens',
                type: 'movie',
                cost: 306000000,
                notes: 'Released 12/18/2015'
            }, {
                id: this.i++,
                name: 'Pirates of the Caribbean: At Worlds End',
                type: 'movie',
                cost: 300000000,
                notes: 'Release 5/24/2007'
            }, {
                id: this.i++,
                name: 'Spectre',
                type: 'movie',
                cost: 300000000,
                notes: 'The most expensive way to fall asleep.'
            }, {
                id: this.i++,
                name: 'Love',
                type: 'emotion'
            }, {
                id: this.i++,
                name: 'Fear',
                type: 'emotion'
            }
        ];
        return {items};
    }
}