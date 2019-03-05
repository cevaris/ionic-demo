import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { AuthenticatedUser } from '../AuthenticatedUser';

@Component({
    selector: 'login-modal-page',
    templateUrl: 'modal.page.html',
})
export class ModalPage {

    constructor(private modalController: ModalController) {
    }

    foo: string;
    bar: string;
    authenticatedUser: AuthenticatedUser;

    ionViewWillEnter() {
        console.log("loading modal", `${this.foo} ${this.bar}`);
    }

    submit() {
        this.authenticatedUser = new AuthenticatedUser({
            username: 'authedUserName',
            apiKey: '1a0b60394cfc11ec9d12ee6492bd8265'
        });
        this.modalController.dismiss(this.authenticatedUser);
    }
}
