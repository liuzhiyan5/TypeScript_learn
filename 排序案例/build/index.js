"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharacterCollection_1 = require("./CharacterCollection");
let numbersCollection = new NumbersCollection_1.NumbersCollection([55, 6, 4, 12, 82]);
let characterCollection = new CharacterCollection_1.CharacterCollection("DbA");
numbersCollection.sort();
characterCollection.sort();
console.log(numbersCollection.data);
console.log(characterCollection.data);
