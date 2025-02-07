import { Component, inject } from '@angular/core';
import {MatListModule} from '@angular/material/list'
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-images-list',
  standalone: true,
  imports: [
    MatListModule
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
