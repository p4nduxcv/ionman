import { Component, OnInit } from "@angular/core";
import { IonItemSliding } from "@ionic/angular";
import { Booking } from "./booking.model";
import { BookingService } from "./booking.service";

@Component({
  selector: "app-bookings",
  templateUrl: "./bookings.page.html",
  styleUrls: ["./bookings.page.scss"],
})
export class BookingsPage implements OnInit {
  loadedBookings: Booking[];
  constructor(private bookingservice: BookingService) {}

  ngOnInit() {
    this.loadedBookings = this.bookingservice._bookings;
  }
  onCancelBooking(offerId: string, slidingEl: IonItemSliding) {
    console.log(`slidingEl`, slidingEl);
    slidingEl.close();
  }
}
