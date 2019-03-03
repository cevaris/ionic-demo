import {Component, ViewChild} from '@angular/core';
import {IonInfiniteScroll} from "@ionic/angular";
import {range} from "lodash";

const minPoke = 1;
const maxPoke = 809;
const pageSize = 20;
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
    // @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
    items = [];

    constructor() {
        for (let i = 0; i < 30; i++) {
            this.items.push( this.items.length );
        }
    }

    doInfinite(event) {
        console.log('Begin async operation');

        setTimeout(() => {
            for (let i = 0; i < 30; i++) {
                this.items.push( this.items.length );
            }

            console.log('Async operation has ended');
            event.target.complete();
        }, 500);
    }
}

// export class PokeInfiniteScrollPage {
//     @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
//
//     data = new Array(809);
//     currPage = 0;
//
//     constructor() {
//         this.data = range(minPoke, maxPoke, 1);
//     }
//
//     loadData(event) {
//         console.log("loadData", this.currPage, event);
//         setTimeout(() => {
//             console.log('Done loading', this.currPage, event);
//             event.target.complete();
//             this.currPage++;
//
//             // App logic to determine if all data is loaded
//             // and disable the infinite scroll
//             if (this.currPage > (maxPoke / this.currPage)) {
//                 event.target.disabled = true;
//             }
//         }, 500);
//     }
// }
