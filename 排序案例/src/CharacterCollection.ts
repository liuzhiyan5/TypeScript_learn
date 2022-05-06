import { Sorter } from "./Sorter";

export class CharacterCollection extends Sorter {
  constructor(public data: string) {
    super()
  }

  // 获取长度
  length(): number {
    return this.data.length
  }

  // 比较前后数字大小
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase()
  }

  // 位置转换
  swap(leftIndex: number, rightIndex: number): void {
    // 转数组
    let characters = this.data.split("")
    let leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;
    // 转回数组
    this.data = characters.join("");
  }
}