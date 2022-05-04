import { User } from "./User";
import { Company } from "./Company";
import { Map } from "./Map";

let user = new User()
// console.log(user)

let company = new Company()
// console.log(company)

let map = new Map()
map.addMarker(user);
map.addMarker(company);