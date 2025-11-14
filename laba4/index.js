// 1.1 findMinLengthOfThreeWords
function findMinLengthOfThreeWords(word1, word2, word3) {
    let minLength = word1.length;

    if (word2.length < minLength) {
        minLength = word2.length;
    } else {
        minLength = minLength;
    }

    if (word3.length < minLength) {
        minLength = word3.length;
    } else {
        minLength = minLength;
    }

    return minLength;
}
console.log("Мінімальна довжина слова:", findMinLengthOfThreeWords("cat", "elephant", "dog"));


//---------------------------------
// 1.2 filterOddElements
function filterOddElements(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            result.push(arr[i]);
        } else {
            // нічого не робимо, бо число парне
        }
    }
    return result;
}
console.log("Непарні елементи:", filterOddElements([1, 2, 3, 4, 5]));


//---------------------------------
// 1.3 getLengthOfShortestElement
function getLengthOfShortestElement(arr) {
    if(arr.length === 0) return 0;
    let minLength = arr[0].length;
    for(let i=1;i<arr.length;i++){
        if(arr[i].length < minLength){
            minLength = arr[i].length;
        }
    }
    return minLength;
}
console.log('1.3:', getLengthOfShortestElement(['apple','kiwi','banana']));


//---------------------------------
// 1.4 joinArrayOfArrays
function joinArrayOfArrays(arr){
    return [].concat(...arr);
}
console.log('1.4:', joinArrayOfArrays([[1,2],[3,4],[5]]));


//---------------------------------
// 1.5 findSmallestNumberAmongMixedElements
function findSmallestNumberAmongMixedElements(arr){
    let nums = arr.filter(el => typeof el === 'number');
    if(nums.length === 0) return 0;
    return Math.min(...nums);
}
console.log('1.5:', findSmallestNumberAmongMixedElements(['a',3,true,7,'b']));


//---------------------------------
// 1.6 computeSummationToN
function computeSummationToN(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum += i;
    }
    return sum;
}
console.log('1.6:', computeSummationToN(4));


//---------------------------------
// 1.7 convertScoreToGrade
function convertScoreToGrade(score){
    if(score < 0 || score > 100) return 'INVALID SCORE';
    if(score >= 90) return 'A';
    else if(score >= 80) return 'B';
    else if(score >= 70) return 'C';
    else if(score >= 60) return 'D';
    else return 'F';
}
console.log('1.7:', convertScoreToGrade(85));


//---------------------------------
// 1.8 getLongestOfThreeWords
function getLongestOfThreeWords(w1,w2,w3){
    let longest = w1;
    if(w2.length > longest.length) longest = w2;
    if(w3.length > longest.length) longest = w3;
    return longest;
}
console.log('1.8:', getLongestOfThreeWords('cat','elephant','dog'));


//---------------------------------
// 1.9 multiply (без *)
function multiply(a,b){
    let result = 0;
    for(let i=0;i<Math.abs(b);i++){
        result += a;
    }
    return b<0 ? -result : result;
}
console.log('1.9:', multiply(3,4));


//---------------------------------
// 1.10 computeSumBetween
function computeSumBetween(num1,num2){
    if(num2 <= num1) return 0;
    let sum = 0;
    for(let i=num1;i<num2;i++){
        sum += i;
    }
    return sum;
}
console.log('1.10:', computeSumBetween(1,4));