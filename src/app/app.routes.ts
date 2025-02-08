import { Routes } from '@angular/router';
import { ImagesListComponent } from './components/images-list/images-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: 'all', component:ImagesListComponent},
    {path: '**', component: PageNotFoundComponent}
];
