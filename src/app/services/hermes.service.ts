import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HermesService {

  constructor() { }
  tags: string[] = []
  name: string = ''

  setTags(tags: string[]) {
    this.tags = tags;
  }

  setName(name: string){
    this.name = name;
  }

  getTags(): string[]{
    return this.tags;
  }

  getName(): string{
    return this.name;
  }
}
