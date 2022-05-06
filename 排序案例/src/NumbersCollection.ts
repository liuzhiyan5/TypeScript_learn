import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super()
  }

  // 获取长度
  length(): number {
    return this.data.length
  }

  // 比较前后数字大小
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex]
  }

  // 位置转换
  swap(leftIndex: number, rightIndex: number): void {
    let leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}