import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list'

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

}
