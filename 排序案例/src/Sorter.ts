export abstract class Sorter {
  abstract length(): number;
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;

  // 排序方法
  sort(): void {
    const length = this.length();
    for (var i = 0; i < length - 1; i++) {
      for (var j = 0; j < length - 1 - i; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1)
        }
      }
    }
  }
}