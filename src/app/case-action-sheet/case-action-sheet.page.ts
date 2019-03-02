import {Component} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import {camelCase, snakeCase} from 'lodash';

const originalTextValue = "type example text";

@Component({
    selector: 'app-home',
    templateUrl: 'case-action-sheet.page.html',
    styleUrls: ['case-action-sheet.page.scss'],
})
export class CaseActionSheetPage {

    textValue = originalTextValue;

    constructor(public actionSheetController: ActionSheetController) {
    }


    async presentActionSheet() {
        const actionSheet = await this.actionSheetController.create({
            header: 'Update Casing',
            buttons: [{
                text: 'Reset',
                role: 'destructive',
                icon: 'refresh',
                handler: () => {
                    console.log('Undo clicked');
                    this.textValue = originalTextValue;
                }
            }, {
                text: 'SnakeCase',
                icon: 'trending-down',
                handler: () => {
                    console.log('SnakeCase clicked');
                    this.textValue = snakeCase(this.textValue);
                }
            }, {
                text: 'CamelCase',
                icon: 'cloud',
                handler: () => {
                    console.log('CamelCase clicked');
                    this.textValue = camelCase(this.textValue);
                }
            }, {
                text: 'Cancel',
                icon: 'close',
                role: 'cancel',
                handler: () => {
                    console.log('Cancel clicked');
                }
            }]
        });
        await actionSheet.present();

    }
}
