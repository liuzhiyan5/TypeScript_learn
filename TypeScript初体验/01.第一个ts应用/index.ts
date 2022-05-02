interface Obj {
  name: String,
  age: Number,
  country: String
}

let obj = {
  name: "曹操",
  age: 3000,
  country: "魏"
}

let user = obj.name
let life = obj.age
let city = obj.country
let sex = 1

fn(user, life, city)

function fn(user: String, life: Number, city: String) {
  console.log(`姓名：${user}。年龄：${life}。国家：${city}`)
}