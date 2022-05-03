import { Company } from "./Company";
import { User } from "./User";

export class Map {
  map: google.maps.Map

  constructor() {
    this.map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  // 在地图中标记用户位置
  addUserMarker(user: User) {
    new google.maps.Marker({
      map: this.map,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }

  // 在地图中标记公司位置
  addCompanyMarker(company: Company) {
    new google.maps.Marker({
      map: this.map,
      position: {
        lat: company.location.lat,
        lng: company.location.lng,
      },
    });
  }
}