import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomePageModule'
    },
    {
        path: 'list',
        loadChildren: './list/list.module#ListPageModule'
    },
    {
        path: 'buttons',
        loadChildren: './buttons/buttons.module#ButtonsPageModule'
    },
    {
        path: 'case-action-sheet',
        loadChildren: './case-action-sheet/case-action-sheet.module#CaseActionSheetPageModule'
    },
    {
        path: 'poke-infinite-scroll',
        loadChildren: './poke-infinite-scroll/poke-infinite-scroll.module#PokeInfiniteScrollPageModule'
    },
    {
        path: 'login-modal',
        loadChildren: './login-modal/login-modal.module#LoginModalPageModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
