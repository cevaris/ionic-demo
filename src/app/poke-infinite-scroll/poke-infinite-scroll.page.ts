import {Component, ViewChild} from '@angular/core';
import {IonInfiniteScroll} from "@ionic/angular";
import {forEach, range} from "lodash";

const minPoke = 1;
const maxPoke = 809;
const pageSize = 30;
const rootURL = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/[ID].png";
const pokeUrl = (id) => {
    return rootURL.replace("[ID]", String(id).padStart(3, '0'));
};
const buildUrls = (arr, page) => {
    const ids = range(page * pageSize + 1, (page * pageSize) + pageSize, 1);
    forEach(ids, (id) => arr.push(pokeUrl(id)));
    return arr;
};

@Component({
    selector: 'app-home',
    templateUrl: 'poke-infinite-scroll.page.html',
    styleUrls: ['poke-infinite-scroll.page.scss'],
})
export class PokeInfiniteScrollPage {
    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
    data = [];
    currPage = 0;

    constructor() {
        this.data = buildUrls(this.data, this.currPage);
    }

    loadData(event) {
        setTimeout(() => {
            this.currPage++;
            this.data = buildUrls(this.data, this.currPage);
            event.target.complete();
            console.log('loadData', 'complete');

            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (this.data.length >= maxPoke) {
                event.target.disabled = true;
                console.log('loadData', 'disabled');
            }
        }, 500);
    }
}
