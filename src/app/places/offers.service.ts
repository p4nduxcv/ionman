import { Injectable } from "@angular/core";
import { Offer } from "./offers/offer.model";

@Injectable({
  providedIn: "root",
})
export class OffersService {
  private _offers: Offer[] = [
    new Offer(
      "o1",
      "Silver",
      "50% of offer",
      "https://edubai.life/wp-content/uploads/2019/01/best-offer.jpg",
      "50%"
    ),
    new Offer(
      "o1",
      "Platium",
      "50% of offer",
      "https://edubai.life/wp-content/uploads/2019/01/best-offer.jpg",
      "50%"
    ),
    new Offer(
      "o1",
      "Platium",
      "50% of offer",
      "https://edubai.life/wp-content/uploads/2019/01/best-offer.jpg",
      "50%"
    ),
  ];
  get offers() {
    return [...this._offers];
  }

  constructor() {}
}
