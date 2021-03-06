import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    public appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'List',
            url: '/list',
            icon: 'list'
        },
        {
            title: 'Buttons',
            url: '/buttons',
            icon: 'finger-print'
        },
        {
            title: 'Case Action Sheet',
            url: '/case-action-sheet',
            icon: 'menu'
        },
        {
            title: 'Poké Infinite Scroll',
            url: '/poke-infinite-scroll',
            icon: 'paw'
        },
        {
            title: 'Login Modal',
            url: '/login-modal',
            icon: 'lock'
        }

    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar
    ) {
        this.initializeApp();
    }

    initializeApp() {
        console.log('initializing...');
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            console.log('initialized...');
        });
    }
}
