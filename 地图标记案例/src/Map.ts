import { Company } from "./Company";
import { User } from "./User";

// 接口
export interface Mappable {
  location: {
    lat: number,
    lng: number
  },
  markerContent(): string
}


export class Map {
  map: google.maps.Map

  constructor() {
    this.map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  // 添加地图标记
  addMarker(mappable: Mappable) {
    // 地图显示标记点
    const marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    // 标记点点击
    // 为标记绑定点击事件
    marker.addListener("click", () => {
      // 创建弹窗
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      // 打开弹框并指定弹框在哪个地图的哪个的标记的位置上弹出
      infoWindow.open(this.map, marker);
    });
  }
}