import {Component} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {ModalPage} from "./modal/modal.page";

@Component({
    selector: 'app-home',
    templateUrl: 'login-modal.page.html',
    styleUrls: ['login-modal.page.scss'],
})
export class LoginModalPage {
    constructor(public modalController: ModalController) {
        this.authenticatedUser = {
            username: 'not-logged-in',
            apiKey: 'not-authenticated'
        };
        this.presentModal();
    }

    authenticatedUser: object;

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
