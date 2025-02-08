import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private base_url = "http://localhost:4200";
  http = inject(HttpClient);

  constructor() { }

  getAllImages() {
    // const images_url = this.base_url + "/v2/_catalog";
    const images_url = `${this.base_url}/v2/_catalog`;
    return this.http.get(images_url,
      {headers: {
        "Access-Control-Allow-Origin": images_url
      }}
    );
  }

  getImageTags(image: string){
    const image_tags_url = `${this.base_url}/v2/${image}/tags/list`;
    return this.http.get(image_tags_url);
  }

  getImageManifest(image: string, tag: string){
    const image_manifest_url = `${this.base_url}/v2/${image}/manifests/${tag}`
    return this.http.get(image_manifest_url, {
      headers: {
        'Accept':'application/vnd.oci.image.index.v1+json'
      }
    });
  }
}
