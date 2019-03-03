import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';

import {LoginModalPage} from './login-modal.page';
import {ModalPage} from "./modal/modal.page";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: LoginModalPage
            }
        ])
    ],
    declarations: [ModalPage, LoginModalPage],
    entryComponents: [ModalPage]
})
export class LoginModalPageModule {
}
