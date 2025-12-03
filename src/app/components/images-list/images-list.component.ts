import { Component, inject } from '@angular/core';
import {MatListModule} from '@angular/material/list'
import { ImagesService } from '../../services/images.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import {TooltipPosition, MatTooltipModule} from '@angular/material/tooltip';
import { RepoTags } from '../../interfaces/repo-tags';

@Component({
  selector: 'app-images-list',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    MatDividerModule,
    RouterLink,
    MatTooltipModule
  ],
  templateUrl: './images-list.component.html',
  styleUrl: './images-list.component.css'
})
export class ImagesListComponent {

  imService = inject(ImagesService);
  repositories: string[] = [];
  repositories_tags: RepoTags[] = [];

  constructor() {
    this.getAllImages();

  }

  getAllImages(){
    this.imService.getAllImages().subscribe({
      next: (data: any) => {
        this.repositories = data['repositories'];
        this.getImagesTags();
      },
      error: (err: any) => {
        console.log(err);
        this.repositories = [];
      }
    });
  }

  getImagesTags(){
    this.repositories.forEach(
      (element) => {
      this.imService.getImageTags(element).subscribe({
        next: (data: any) => {
          this.repositories_tags.push({
            "name":data['name'],
            tags: data['tags']
          });
          this.repositories_tags.sort((a, b) => a.name.localeCompare(b.name));
        },
        error: (err: any) => {
          console.error(err);
        }
      });
    });
  }

}
