import { Component, Input } from '@angular/core';
import { IimageManifest } from '../../interfaces/image-manifest';
import { ActivatedRoute } from '@angular/router';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-image-details',
  standalone: true,
  imports: [],
  templateUrl: './image-details.component.html',
  styleUrl: './image-details.component.css'
})
export class ImageDetailsComponent {

  constructor(private route: ActivatedRoute, private imService: ImagesService){
    this.route.queryParamMap.subscribe(
      params => {
        const receivedData = params.get('tags')!;


      }
    )
  }

}
