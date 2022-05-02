// 类与对象
class Test {
  testFn1() {
    console.log("testFn1")
  }

  testFn2() {
    console.log("testFn2")
  }
}

let test = new Test()
test.testFn1()
test.testFn2()

// 继承
class Lei {
  leiFn() {
    console.log("leiFn")
  }
}

class One extends Lei {
  name = "曹操"
}

let one = new One()
console.log(one.name)
one.leiFn()