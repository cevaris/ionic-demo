import {Component, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
    selector: 'login-modal-page',
    templateUrl: 'modal.page.html',
})
export class ModalPage {

    constructor(private modalController: ModalController) {
    }

    foo: string;
    bar: string;
    authenticatedUser: object;

    ionViewWillEnter() {
        console.log("loading modal", `${this.foo} ${this.bar}`);
    }

    submit() {
        this.authenticatedUser = {
            username: 'authedUserName',
            apiKey: '1a0b60394cfc11ec9d12ee6492bd8265'
        };
        this.modalController.dismiss(this.authenticatedUser);
    }
}
