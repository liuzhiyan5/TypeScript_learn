import { User } from "./User";
import { Company } from "./Company";
import { Map } from "./Map";

let user = new User()
// console.log(user)

let company = new Company()
// console.log(company)

let map = new Map()
map.addUserMarker(user);
map.addCompanyMarker(company);