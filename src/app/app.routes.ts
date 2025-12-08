import { Routes } from '@angular/router';
import { ImagesListComponent } from './components/images-list/images-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ImageDetailsComponent } from './components/image-details/image-details.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';

export const routes: Routes = [
    {path: '', component: HomeComponentComponent},
    {path: 'all', component:ImagesListComponent},
    {path:'details/:image', component:ImageDetailsComponent},
    {path: '**', component: PageNotFoundComponent}
];
