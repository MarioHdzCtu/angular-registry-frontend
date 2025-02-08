import { Component, inject } from '@angular/core';
import {MatListModule} from '@angular/material/list'
import { ImagesService } from '../../services/images.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import {TooltipPosition, MatTooltipModule} from '@angular/material/tooltip';

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
  repositories = [];

  constructor() {
    this.getAllImages();
  }

  getAllImages(){
    this.imService.getAllImages().subscribe({
      next: (data: any) => {
        this.repositories = data['repositories'];
      },
      error: (err: any) => {
        this.repositories = [];
      }
    }); 
  }

}
