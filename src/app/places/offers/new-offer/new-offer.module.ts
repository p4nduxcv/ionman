import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";
import { ReactiveFormsModule } from "@angular/forms";

import { NewOfferPageRoutingModule } from "./new-offer-routing.module";

import { NewOfferPage } from "./new-offer.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NewOfferPageRoutingModule,
  ],
  declarations: [NewOfferPage],
})
export class NewOfferPageModule {}
