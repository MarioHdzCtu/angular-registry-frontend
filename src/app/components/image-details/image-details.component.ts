import { Component, inject, Input } from '@angular/core';
import { IimageManifest } from '../../interfaces/image-manifest';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagesService } from '../../services/images.service';
import { RepoTags } from '../../interfaces/repo-tags';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-image-details',
  standalone: true,
  imports: [
    MatCardModule,
    MatChipsModule,
    MatGridListModule
  ],
  templateUrl: './image-details.component.html',
  styleUrl: './image-details.component.css'
})
export class ImageDetailsComponent {
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  repo: RepoTags;
  imService = inject(ImagesService);
  manifest: IimageManifest | null = null;

  constructor(){
    this.repo = this.router.getCurrentNavigation()?.extras.state as RepoTags;
    console.log(this.repo.tags)
    this.repo.tags.forEach((tag) => {
      this.imService.getImageManifest(this.repo.name,tag).subscribe({
        next: (data) => {
          this.manifest = data as IimageManifest;
        },
        error: (err: any) => {
          console.error(err)
        }
      });
    })
    
    
  }

}
