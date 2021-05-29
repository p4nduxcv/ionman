import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IonItemSliding } from "@ionic/angular";
import { OffersService } from "../offers.service";
import { Offer } from "./offer.model";

@Component({
  selector: "app-offers",
  templateUrl: "./offers.page.html",
  styleUrls: ["./offers.page.scss"],
})
export class OffersPage implements OnInit {
  loadOffers: Offer[];

  constructor(private OffersService: OffersService, private router: Router) {
    this.loadOffers = this.OffersService.offers;
  }

  ngOnInit() {}

  onEdit(offerId: String, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(["/", "places", "tabs", "offers", "edit", offerId]);
    console.log("Editing item", offerId);
  }
}
