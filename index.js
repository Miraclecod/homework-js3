//Task 1
console.log("Task 1");
let arr = new Array(15);

for(let i = 0; i < arr.length; i++){
    arr[i] =  Math.random() * 200 - 100;
}

console.log(arr);
function arrayCalculation(arr){
    let result = {
        totalPlus: 0,
        totalMinus: 0,
        totalZero: 0
    }
    for(let i = 0; i < arr.length; i++){
        if(isNaN(arr[i])){
            console.log("это не число", arr[i]);
            return;
        }

        if(arr[i] > 0) result.totalPlus++;
        else if(arr[i] < 0) result.totalMinus++;
        else result.totalZero++; 
    }
    return result;
}

console.log(arrayCalculation(arr));

//Task 2
console.log("Task 2");
function arraySum(arr){
    let result = {
        sumPlus: 0,
        sumMinus: 0
    }

    for(let i = 0; i < arr.length; i++){
        if(isNaN(arr[i])){
            console.log("это не число", arr[i]);
            return;
        }

        if(arr[i] < 0) result.sumMinus += arr[i]
        else if(arr[i] > 0) result.sumPlus += arr[i]
        else console.log("введен 0")
    }
    return result;
}

console.log(arraySum(arr));

//Task 3
console.log("Task 3");
function arrayCalculationInRange(arr, A, B){
    if(isNaN(A) || isNaN(B)){
        console.log("это не число");
        return;
    }
    let result = {
        totalPlus: 0,
        totalMinus: 0,
        totalZero: 0
    }

    for(let i = 0; i < arr.length; i++){
        if(isNaN(arr[i])){
            console.log("это не число");
            return;
        }

        if(arr[i] > A && arr[i] < B){
            if(arr[i] > 0) {
                result.totalPlus++;
            }
            else if(arr[i] < 0){ 
                result.totalMinus++;
            }
            else {
                result.totalZero++;
            }
        }
    }
    return result;
}

console.log(arrayCalculationInRange(arr, -50 , 50));

//Task 4
console.log("Task 4");
let str4 = "dsdse343rfаввапапВААdfd==323,,dsdsd";

function stringFilter(str, flag){
    let resultNumber = "";

    if(flag == "D"){
        for(let i = 0; i < str.length; i++){
            if(!isNaN(str[i])){
                resultNumber += str[i];
            }
        }
        return resultNumber;
    }
    else if(flag == "S"){
        return str.match(/[a-zA-Zа-яА-Я]/g).join('');
    }
    else{
        console.log("неправильный флаг");
        return;
    }
}

console.log(stringFilter(str4, "D"));

//Task 5
console.log("Task 5");

let str5 = "dsdsderewre2323efrerfd";

function sortString(str, flag){
    if(flag.toUpperCase() == "AZ"){
        return str.split('').sort().join('');
    }else if(flag.toUpperCase() == "ZA"){
        return str.split('').sort().reverse().join('');
    }else{
        console.log("неправильный флаг");
        return;
    }
}


console.log(sortString(str5, "za"));
//Task 6

console.log("Task 6");

let num6 = 5434343434554;

function deleteNumber(number, deleteNumber){
    let str = String(number);
    return +str.split(deleteNumber).join('');
}

console.log(deleteNumber(num6, 34));

//Task 7

console.log("Task 7")

let num7 = 6425456645223;

function sumNumber(number){
    let result = 0;
    let num = number.toString();

    for(let i = 0; i < num.length; i++){
        if(i == 0 || i == 1 || i == num.length - 1 || i == num.length - 2){
            result += +num[i];
        }
    }
    return result;
}

console.log(sumNumber(num7));

//Task 8

console.log("Task 8");

let str8 = "hello, world!!!22323efellllll";

function removeRepeat(str){
    let result = '';

    for(let i = 0; i < str.length; i++){
        if(str[i] == str[i + 1] || str[i] == str[i - 1]){
            
        }else{
            result += str[i];
        }
    }
    return result;
}

console.log(removeRepeat(str8));

//Task 9
console.log("Task9");

let arr9 = [1, 2, 9, 3, 9, 3, 7];

function deleteNumberInArray(arr, numberCompare){
    let count = 0;
    for(let i = arr.length; i >= 0; i--){
        if(arr[i] < numberCompare){
            arr.splice(i, 1);
            count++;
        }else{

        }
    }
    return count > 0 ? true : false;
}

console.log(deleteNumberInArray(arr9, 4));
console.log(arr9);

//Task 10
console.log("Task 10");

let arr10 = [2, 3, 6, 8343434545, 454546510, 56565645, 6];

function deleteRepeat(arr){

    let temp = false;
    for(let i = 0; i < arr.length; i++){
        let strSymbol = arr[i].toString();
        if(arr[i] != +findCharacters(strSymbol)){
            temp = true;
        }
        arr[i] = +findCharacters(strSymbol);
        if(isNaN(arr[i])){
            arr.splice(i, 1);
        }
    }
    return temp;
}

function findCharacters(str) {
    let unique = '';
    for (let i = 0; i < str.length; i++) {
        if (str.lastIndexOf(str[i]) == str.indexOf(str[i])) {
            unique += str[i];
        }
    }
    return unique == 0 ? undefined : unique;
}
console.log(deleteRepeat(arr10));
console.log(arr10);
//Task 11
console.log("Task 11");

let arr11 = [4, 5, 4, 10, 7, 8, 9, 9, 10, 11];

function maxNumber(arr){
    let arrMax = [...arr];
    let max = [];

    max[0] = arrMax[0];
    max[1] = arrMax[0];
    
    for(let i = 0; i < arrMax.length; i++){
        if(max[0] < arrMax[i] && arrMax[i] != max[1]){
            max[0] = arrMax[i];
        }
        for(let j = 0; j < arrMax.length; j++){
            if(max[1] < arrMax[j]){
                max[1] = arrMax[j];
            }
        }
    }
    
    
    return max;
}



console.log(maxNumber(arr11));

//Task 12

console.log("Task 12");

let arr12 = [2, 4, 5, 6, 7, 4, -4, -5, 6, -10];

function deleteBySign(arr, flag){
    let count = 0;
    if(flag == "+"){
        for(let i = arr.length - 1; i >= 0 ; i--){
            if(arr[i] > 0){
                arr.splice(i, 1);
                count++;
            }
        }
    }else if(flag == "-"){
        for(let i = arr.length - 1; i >= 0; i--){
            if(arr[i] < 0){
                arr.splice(i, 1);
                count++;
            }
        }
    }else{
        console.log("неправильный флаг");
    }
    return count > 0 ? true : false;
}

console.log(deleteBySign(arr12, "-"));
console.log(arr12);

//Task 13 

console.log("Task 13");

let str13 = "434erererefdf---rerer";

function searchString(str, subtext){
    let regex = new RegExp('' + subtext, 'g');
    let result = str.match(regex);
    
    return result.length;
}

function findSubstring(text, pattern){
    let res = -1;
    let pf = getPrefix(pattern);
    let index = 0;
    for(let i = 0; i < text.length; i++){
        while(index > 0 && pattern[index] != text[i]){
            index = pf[index - 1];
        }
        if(pattern[index] == text[i]){
             index++;
        }
        if(index == pattern.length){
            return res = i - index + 1;
        }
    }
    return res;
}

function getPrefix(text){
    let result = new Array(text.length);
    result[0] = 0;
    let index = 0;

    for(let i = 1; i < text.length; i++){
        while(index >= 0 && text[index] != text[i]){
            index--;
        }
        index++;
        result[i] = index;
    }

    return result;
}
console.log(searchString(str13, "er"));
console.log(findSubstring(str13, "fd"));

//Task 14 

console.log("Task 14");

function matrixArray(rows, columns){
    let arr = [];
    for(let i = 0; i < rows; i++){
        arr[i] = [];
        for(let j = 0; j < columns;j++){
            arr[i][j] = (Math.random() * 100 - 50);
        }
    }
    return arr;
}

let arr14 = matrixArray(3, 3);
console.log(arr14);

function matrixSum(matrix){
    let result = {
        index: 0,
        sum: Number.NEGATIVE_INFINITY
    } 
    let max;
    for(let i = 0; i < matrix.length; i++){
        max = 0;
        for(let j = 0; j < matrix.length; j++){
            max += matrix[i][j];
        }
        if(max > result.sum){
            result.sum = max;
            result.index = i;
        }
    }
    return result;
}

console.log(matrixSum(arr14));

//Task 15

console.log("Task 15");

let arr15 = matrixArray(3, 3);

function matrixSumColomns(matrix){
    let result = {
        index: 0,
        sum: Number.NEGATIVE_INFINITY
    } 
    let max;
    for(let i = 0; i < matrix.length; i++){
        max = 0;
        for(let j = 0; j < matrix.length; j++){
            max += matrix[j][i];
        }
        if(max > result.sum){
            result.sum = max;
            result.index = i;
        }
    }
    return result;
}
console.log(arr15);
console.log(matrixSumColomns(arr15));