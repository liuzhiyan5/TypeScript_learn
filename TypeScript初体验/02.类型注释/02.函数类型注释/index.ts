function fn(): string {
  return "11"
}

const fn1 = (): number => {
  return 11
}

// 不用定义，类型推断  (name: string) => string | false
const fn2 = (name: string) => {
  if (name) {
    return name
  } else {
    return false
  }
}

// 永远都不会又返回值
const fn3 = (): never => {
  throw new Error()
}

// 不过所有带有throw语句都是没有返回值的
const fn4 = (message: string) => {
  if (!message) throw new Error()
}

let objfn5 = {
  name: "曹操",
  date: new Date(),
  inObj: {
    name1: "曹丕",
    sex: 1
  }
}
const fn5 = ({
  name, date, inObj: { name1, sex }
}: {
  name: string;
  date: Date;
  inObj: {
    name1: string,
    sex: number
  }
}) => {
  console.log(name, date, name1, sex)
}
fn5(objfn5)