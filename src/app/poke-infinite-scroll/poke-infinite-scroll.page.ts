import {Component, ViewChild} from '@angular/core';
import {IonInfiniteScroll} from "@ionic/angular";
import {min, range} from "lodash";

const minPoke = 1;
const maxPoke = 809;
const pageSize = 30;
const rootURL = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/[ID].png";
const pokeUrl = (id) => {
    return rootURL.replace("[ID]", id.padStart(3, 0));
};

@Component({
    selector: 'app-home',
    templateUrl: 'poke-infinite-scroll.page.html',
    styleUrls: ['poke-infinite-scroll.page.scss'],
})
export class PokeInfiniteScrollPage {
    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
    data = [];

    constructor() {
        this.data = this.data.concat(range(minPoke, this.data.length + pageSize, 1));
    }

    loadData(event) {
        setTimeout(() => {
            this.data = this.data.concat(range(this.data.length - 1, min([this.data.length + pageSize, maxPoke]), 1));
            event.target.complete();
            console.log('loadData', 'complete');

            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (this.data.length == maxPoke) {
                event.target.disabled = true;
                console.log('loadData', 'disabled');
            }
        }, 500);
    }

    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
}
