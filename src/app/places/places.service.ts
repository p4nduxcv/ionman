import { Injectable } from "@angular/core";
import { PlaceDetailPageModule } from "./discover/place-detail/place-detail.module";
import { Place } from "./place.model";

@Injectable({
  providedIn: "root",
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      "p1",
      "Sigiriya",
      "World most accttractive place ever",
      "https://nerdnomads.com/wp-content/uploads/2014/03/DSC67702.jpg",
      550
    ),
    new Place(
      "p2",
      "Kurunegala",
      "Economical Hub in Srilanka",
      "https://www.urlaub-sr-lanka.info/img/2012/01/kurunegala.jpg",
      666
    ),
    new Place(
      "p3",
      "Nelligala",
      "Internation Buddhist center",
      "https://www.attractionsinsrilanka.com/wp-content/uploads/2019/10/Nelligala-International-Buddhist-Center.jpg",
      666
    ),
  ];
  get places() {
    return [...this._places];
  }
  getPlace(id: string) {
    return { ...this._places.find((p) => p.id === id) };
  }
  constructor() {}
}
