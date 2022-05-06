"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    // 排序方法
    sort() {
        const length = this.length();
        for (var i = 0; i < length - 1; i++) {
            for (var j = 0; j < length - 1 - i; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
