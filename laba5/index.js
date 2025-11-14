// 1.1 computeAreaOfARectangle
function computeAreaOfARectangle(length, width) {
    return length * width;
}
console.log('1.1 Площа прямокутника:', computeAreaOfARectangle(5, 3));


//--------------------------
// 1.2 computeAreaOfACircle
function computeAreaOfACircle(radius) {
    return Math.PI * radius * radius;
}
console.log('1.2 Площа кола:', computeAreaOfACircle(4));


//-------------------------
// 1.3 computePower
function computePower(num, exponent) {
    return Math.pow(num, exponent);
}
console.log('1.3 Степінь числа:', computePower(2, 3));


//--------------------------
// 1.4 computeSquareRoot
function computeSquareRoot(num) {
    return Math.sqrt(num);
}
console.log('1.4 Квадратний корінь:', computeSquareRoot(16));


//--------------------------
// 1.5 getLengthOfThreeWords
function getLengthOfThreeWords(w1, w2, w3) {
    return w1.length + w2.length + w3.length;
}
console.log('1.5 Сума довжин слів:', getLengthOfThreeWords('cat','dog','elephant'));


//--------------------------
// 1.6 joinArrays
function joinArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log('1.6 Об’єднання масивів:', joinArrays([1,2],[3,4]));


//--------------------------
// 1.7 getProductOfAllElementsAtProperty
function getProductOfAllElementsAtProperty(obj, key) {
    if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0) return 0;
    let product = 1;
    for (let i = 0; i < obj[key].length; i++) {
        product *= obj[key][i];
    }
    return product;
}
console.log('1.7 Добуток елементів:', getProductOfAllElementsAtProperty({nums:[2,3,4]}, 'nums'));


//--------------------------
// 1.8 sumDigits
function sumDigits(num) {
    let str = Math.abs(num).toString();
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str[i]);
    }
    return num < 0 ? -sum : sum;
}
console.log('1.8 Сума цифр:', sumDigits(-123));


//--------------------------
// 1.9 findShortestWordAmongMixedElements
function findShortestWordAmongMixedElements(arr) {
    let words = arr.filter(el => typeof el === 'string');
    if (words.length === 0) return '';
    let shortest = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length < shortest.length) shortest = words[i];
    }
    return shortest;
}
console.log('1.9 Найкоротше слово:', findShortestWordAmongMixedElements([4,'two',2,'three']));


//--------------------------
// 1.10 findSmallestNumberAmongMixedElements
function findSmallestNumberAmongMixedElements(arr) {
    let nums = arr.filter(el => typeof el === 'number');
    if (nums.length === 0) return '';
    return Math.min(...nums);
}
console.log('1.10 Найменше число:', findSmallestNumberAmongMixedElements([4,'two',2,'three']));


//--------------------------
// 1.11 modulo (без %)
function modulo(num1, num2) {
    if (num2 === 0) return NaN;
    let div = Math.floor(Math.abs(num1) / Math.abs(num2));
    let remainder = Math.abs(num1) - div * Math.abs(num2);
    return num1 < 0 ? -remainder : remainder;
}
console.log('1.11 Залишок ділення:', modulo(10,3));


//--------------------------
// 1.12 reverseChunks
function reverseChunks(str, p) {
    let result = '';
    for (let i = 0; i < str.length; i += p) {
        let chunk = str.slice(i, i+p);
        result += chunk.split('').reverse().join('');
    }
    return result;
}
console.log('1.12 Віддзеркалення:', reverseChunks('abcdefghi',3));


//--------------------------
// 1.13 findUniqueEvenOrOdd
function findUniqueEvenOrOdd(arr) {
    let even = arr.filter(n => n % 2 === 0);
    let odd = arr.filter(n => n % 2 !== 0);
    return even.length === 1 ? even[0] : odd[0];
}
console.log('1.13 Унікальне число:', findUniqueEvenOrOdd([2,4,6,7,8]));


//--------------------------
// 1.14 findPairWithSum
function findPairWithSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) return [arr[i], arr[j]];
        }
    }
    return [];
}
console.log('1.14 Пара з сумою:', findPairWithSum([1,2,3,4],5));


//--------------------------
// 1.15 isMirrorStrings
function isMirrorStrings(str1, str2) {
    return str1 === str2.split('').reverse().join('');
}
console.log('1.15 Дзеркальні рядки:', isMirrorStrings('abc','cba'));

// 1.16 binarySearch
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
console.log('1.16 Бінарний пошук:', binarySearch([1,2,3,4,5],3));


//--------------------------
// 1.17 Ізограма
function isIsogram(str) {
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) return false;
    }
    return true;
}
console.log('1.17 Ізограма:', isIsogram('lamp'));


//--------------------------
// 1.18 Паліндром
function isPalindrome(str) {
    str = str.toLowerCase().replace(/\s+/g,'');
    return str === str.split('').reverse().join('');
}
console.log('1.18 Паліндром:', isPalindrome('level'));
