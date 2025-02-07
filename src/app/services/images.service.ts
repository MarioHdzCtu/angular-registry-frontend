import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private base_url = environment.url;
  http = inject(HttpClient);

  constructor() { }

  getAllImages() {
    return this.http.get(`${this.base_url}/v2/_catalog`);
  }
}
