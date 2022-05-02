interface Person {
  name: string,
  age: number
}

function fn(person: Person) {
  console.log(person)
}

// 可添多属性，但不能少属性
let obj = {
  name: "曹操",
  age: 3000,
  sex: 1
}

fn(obj)