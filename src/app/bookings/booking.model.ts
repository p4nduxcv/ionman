export class Booking {
  constructor(
    public id: string,
    public placeId: String,
    public userId: String,
    public placeTitle: String,
    public guestNumber: number
  ) {}
}
