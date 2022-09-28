function makeArray(firstArray, secondArray, maxLength) {

return firstArray.concat(secondArray).slice(0, maxLength);  

}
console.log(makeArray([2, 3, 4, 5], [2, 3, 4], 6));
