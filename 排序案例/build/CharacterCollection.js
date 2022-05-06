"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharacterCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    // 获取长度
    length() {
        return this.data.length;
    }
    // 比较前后数字大小
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase();
    }
    // 位置转换
    swap(leftIndex, rightIndex) {
        // 转数组
        let characters = this.data.split("");
        let leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
        // 转回数组
        this.data = characters.join("");
    }
}
exports.CharacterCollection = CharacterCollection;
