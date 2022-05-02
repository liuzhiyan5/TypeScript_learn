// any[]
const arr = []

// string[]
const arr1 = ["100"]

// string[][]
const arr2 = [["200"]]

// (string | Date)[]
const arr3 = ["500", new Date]

const arr4 = ["abcd", 56, "kkkk"]
arr4.map((item: (string | number)): (string | number) => {
  return item
})