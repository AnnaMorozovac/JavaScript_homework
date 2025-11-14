// 5.2.1 — getProperty
function getProperty(obj, key) {
    return obj[key];
}
console.log("5.2.1 getProperty →", getProperty({name: "Anna"}, "name"));


// ---------------------------
// 5.2.2 — addProperty
function addProperty(obj, key) {
    obj[key] = true;
    return obj[key];
}
console.log("5.2.2 addProperty →", addProperty({}, "isActive"));


// ---------------------------
// 5.2.3 — removeProperty
function removeProperty(obj, key) {
    delete obj[key];
}
let obj3 = {age: 22};
removeProperty(obj3, "age");
console.log("5.2.3 removeProperty →", obj3);


// ---------------------------
// 5.2.4 — getFullName
function getFullName(first, last) {
    return first + " " + last;
}
console.log("5.2.4 getFullName →", getFullName("Anna", "Morozova"));


// ---------------------------
// 5.2.5 — getLengthOfWord
function getLengthOfWord(word) {
    return word.length;
}
console.log("5.2.5 getLengthOfWord →", getLengthOfWord("JavaScript"));


// ---------------------------
// 5.2.6 — getLengthOfTwoWords
function getLengthOfTwoWords(w1, w2) {
    return w1.length + w2.length;
}
console.log("5.2.6 getLengthOfTwoWords →", getLengthOfTwoWords("cat", "house"));


// ---------------------------
// 5.2.7 — isGreaterThan
function isGreaterThan(num1, num2) {
    return num1 > num2;
}
console.log("5.2.7 isGreaterThan →", isGreaterThan(10, 5));
console.log("5.2.7 isGreaterThan →", isGreaterThan(2, 7));


// ---------------------------
// 5.2.8 — isEven
function isEven(num) {
    return num % 2 === 0;
}
console.log("5.2.8 isEven →", isEven(4));
console.log("5.2.8 isEven →", isEven(7));


// ---------------------------
// 5.2.9 — isSameLength
function isSameLength(w1, w2) {
    return w1.length === w2.length;
}
console.log("5.2.9 isSameLength →", isSameLength("cat", "dog"));
console.log("5.2.9 isSameLength →", isSameLength("hello", "hi"));


// ---------------------------
// 5.2.10 — isEvenAndGreaterThanTen
function isEvenAndGreaterThanTen(num) {
    return num % 2 === 0 && num > 10;
}
console.log("5.2.10 isEvenAndGreaterThanTen →", isEvenAndGreaterThanTen(12));
console.log("5.2.10 isEvenAndGreaterThanTen →", isEvenAndGreaterThanTen(9));


// ---------------------------
// 5.2.11 — computeAreaOfATriangle
function computeAreaOfATriangle(base, height) {
    return (base * height) / 2;
}
console.log("5.2.11 computeAreaOfATriangle →", computeAreaOfATriangle(10, 5));
