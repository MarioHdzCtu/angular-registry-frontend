import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private base_url = environment.url;
  http = inject(HttpClient);

  constructor() { }

  getAllImages() {
    // const images_url = this.base_url + "/v2/_catalog";
    const images_url = "http://localhost:4200/v2/_catalog";
    return this.http.get(images_url,
      {headers: {
        "Access-Control-Allow-Origin": images_url
      }}
    );
  }
}
