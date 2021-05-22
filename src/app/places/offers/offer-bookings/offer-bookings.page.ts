import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";
import { OffersService } from "../../offers.service";

import { Place } from "../../place.model";
import { PlacesService } from "../../places.service";
import { Offer } from "../offer.model";

@Component({
  selector: "app-offer-bookings",
  templateUrl: "./offer-bookings.page.html",
  styleUrls: ["./offer-bookings.page.scss"],
})
export class OfferBookingsPage implements OnInit {
  offers: Offer;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private PlacesService: PlacesService,
    private offerService: OffersService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("placeId")) {
        this.navCtrl.navigateBack("places/tabs/offers");
        return;
      }
      this.offers = this.offerService.offers.find(
        (p) => p.id === paramMap.get("placeId")
      );
    });
    console.log(`palces`, this.offers);
  }
}
