import faker from "@faker-js/faker";
import { Mappable } from "./Map";

export class User implements Mappable {
  name: string
  location: {
    lat: number,
    lng: number
  }

  constructor() {
    this.name = faker.name.firstName()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }

  markerContent(): string {
    return `名字：${this.name}`
  }
}