import { Component, OnInit } from "@angular/core";
import { OffersService } from "../offers.service";
import { Offer } from "./offer.model";

@Component({
  selector: "app-offers",
  templateUrl: "./offers.page.html",
  styleUrls: ["./offers.page.scss"],
})
export class OffersPage implements OnInit {
  loadOffers: Offer[];

  constructor(private OffersService: OffersService) {
    this.loadOffers = this.OffersService.offers;
  }

  ngOnInit() {}

  onEdit(offerId: String) {
    console.log("111");
  }
}
