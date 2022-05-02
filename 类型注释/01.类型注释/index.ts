// 像以下这种简单的变量定义，可以不使用类型注释，可以由ts进行类型推断
let num: number = 6
let str: string = "3"
let hasName: boolean = true

// 像这种后面跟new的，那new后面就是他的类型
let date: Date = new Date()

let colors: string[] = ["yellow", "green", "red"]
let colors2: Array<string> = ["yellow", "green", "red"]

let numbers: number[] = [1, 2, 3]
let numbers2: Array<number> = [1, 2, 3]

let obj: {
  one: number;
  two: string;
} = { one: 111, two: "222" }

// 自定义类
class Car {
  drive() {
    console.log(11)
  }
}
let car: Car = new Car()

// 函数
function fn(str: string): void {
  console.log(str)
}
fn("45")

function fn2(num1: number, num2: number): number {
  return num1 + num2
}

fn2(1, 2)

let nothing: undefined = undefined
let nothingMuch: null = null