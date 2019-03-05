import { Component } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { ModalPage } from "./modal/modal.page";
import { AuthenticatedUser } from './AuthenticatedUser';

@Component({
    selector: 'app-home',
    templateUrl: 'login-modal.page.html',
    styleUrls: ['login-modal.page.scss'],
})
export class LoginModalPage {

    authenticatedUser: AuthenticatedUser

    constructor(public modalController: ModalController) {
        this.authenticatedUser = new AuthenticatedUser({
            username: 'not-logged-in',
            apiKey: 'not-authenticated'
        });
        this.presentModal();
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: ModalPage,
            componentProps: {
                foo: 'hello',
                bar: 'world',
                authenticatedUser: {}
            }
        });

        modal.onDidDismiss().then((detail) => {
            if (detail !== null) {
                console.log('The result:', detail.data);
                this.authenticatedUser = detail.data;
            }
        });

        await modal.present();
    }

}
