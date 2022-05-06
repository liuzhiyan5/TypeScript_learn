import { NumbersCollection } from "./NumbersCollection";
import { CharacterCollection } from "./CharacterCollection";

let numbersCollection = new NumbersCollection([55, 6, 4, 12, 82])
let characterCollection = new CharacterCollection("DbA")

numbersCollection.sort()
characterCollection.sort()
console.log(numbersCollection.data)
console.log(characterCollection.data)