import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyService {
  getItems(): any[] {
    return [
        { "id": 1, "socialMediaLink": "https://www.facebook.com/example", "socialMediaName": "Facebook", "description": "Example Facebook page" }, { "id": 2, "socialMediaLink": "https://www.twitter.com/example", "socialMediaName": "Twitter", "description": "Example Twitter account" }, { "id": 3, "socialMediaLink": "https://www.instagram.com/example", "socialMediaName": "Instagram", "description": "Example Instagram profile" }
      // Diğer öğeleri buraya ekleyebilirsiniz
    ];
  }
}
