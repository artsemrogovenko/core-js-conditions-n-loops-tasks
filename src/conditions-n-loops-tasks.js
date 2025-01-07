/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if(number>=0){
    return true;
  }
  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if(a > b && a > c){
    return a;
  }else if(b> a && b>c){
    return b;
  }else{
    return c;
  }

}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  let area=[];
  let [x,y]=Object.values(queen);
   let sideLength= 8;

   for (let i = 0; i < x; i++) {
    area.push({x:i+1,y})
   }
   for (let i = x; i < sideLength; i++) {
    area.push({x:i+1,y})
   }
   for (let i = 0; i < y; i++) {
    area.push({x ,y:i+1});
   }
   for (let i = y; i < sideLength; i++) {
    area.push({x ,y:i+1});
   }

   for (let i = x+1, j = y+1; i <= sideLength || j <= sideLength; i++, j++) {
     if (i>=sideLength||j>=sideLength){break;}
    area.push({x: i,y:j });
   }

   for (let i = x-1, j = y-1; i > 0 || j > 0; i--, j--) {
     if (i<=0||j<=0){break;}
    area.push({x:i ,y:j });
  }

  for (let i = x-1, j = y+1; i > 0 || j <= sideLength; i--, j++) {
    if (i<=0||j>=sideLength){break;}
    area.push({x: i,y:j });
   }

   for (let i = x+1, j = y-1; i <= sideLength || j > 0; i++, j--) {
     if (i>=sideLength||j<=0){break;}
    area.push({x: i,y:j });
   }

  for (const obj of area) {
    if( king.x=== obj.x && king.y=== obj.y){
      return true;
  }
  }

   return false;

}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if((a===c || a===b) || (b===c || b===a) || (c===a || c===b)){
    if(b-1===a && b-1===c || a-1===c && a-1===b || c-1===a && c-1===b){
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const table = {1:"I",4:"IV",5:"V",9:"IX",10:"X"};
  let result="";

  let keys=[10,9,5,4,1];

  for (let key of keys) {
    while (num >= key) {
      result=result+table[key];
      num=num-key;
    }
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = "";
  const decode=(value)=>{
    switch (value) {
      case "0":return "zero";
      case "1":return "one";
      case "2":return "two";
      case "3":return "three";
      case "4":return "four";
      case "5":return "five";
      case "6":return "six";
      case "7":return "seven";
      case "8":return "eight";
      case "9":return "nine";
      case "-":return "minus";
      case ".":
      case ",":return "point";
    }
  }
  for (let i = 0; i < numberStr.length; i++) {
    result += decode(numberStr[i]) ;
    if(i<numberStr.length-1){
      result+=" ";
    }
  }

  return result;

}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let head =  [];
  let partLength = Math.floor(str.length/2);
  for (let i = 0; i < Math.floor(str.length/2) ; i++) {
    head[i]=str[i];
  }
  if(str.length%2===0){
    partLength=partLength+1;
  }
  let step =0;
  for (let k = str.length-1; k > partLength; k--) {
    if(str[k]!==head[step]){
      return false;
    }
    step++;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i++) {
    if(str[i]===letter){
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let divider =1;
  let integer =  num/divider;
  while(Math.trunc(integer>10)){
divider=divider*10;
integer =  integer/10;
  }  ;

  let int = num;
  while (divider>=1) {
    let firstDigit= Math.trunc(int/divider);
    if(firstDigit===digit){
      return true;
    }

    int=int-(firstDigit*divider);
    divider/=10;
  }
return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(/* arr */) {
  throw new Error('Not implemented');
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  let currentValue=1;

  let matrix= Array(size);
  for (let i = 0; i < size; i++) {
    matrix[i]=Array(size);
  }
  let step = size-1;

  let col=0;
  let row=0;
  do{
  for (let r = col; r < step; r++) {
    matrix[row][r]=currentValue;
    currentValue+=1;
  }
  for (let d = row; d < step; d++) {
    matrix[d][step]=currentValue;
    currentValue+=1;
  }
  for (let l = step; l>col; l--) {
    matrix[step][l]=currentValue;
    currentValue+=1;
  }
  for (let u =step; u>row ; u--) {
    matrix[u][col]=currentValue;
    currentValue+=1;
  }
    if(matrix[row][col]===undefined){
      matrix[row][col]=currentValue;
    }
  step-=1;
  row+=1;
  col+=1;
  }while(matrix[row][col]===undefined);

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  let size = matrix.length;
  let rotated = Array(size);

  for (let i = 0; i < size; i++) {
    rotated[i]= Array(size);
  }
  let i=size-1;
  let row =0;
  while(i!==-1){
    for (let k = 0; k < size; k++) {
      rotated[k][i]=matrix[row][k];
    }
    row+=1;
    i-=1;
  }
  for (let j = 0; j < size; j++) {
    for (let m = 0; m < size; m++) {
      matrix[j][m]=rotated[j][m];
    }
  }

  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} sorted - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  throw new Error('Not implemented');

  let length=arr.length;
  let middle = Math.floor(length/2);
  let sorted=arr;
  let pivot=sorted[middle];

  // return sorted;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const shuffle=(data)=>{
    let head="";
    let tail="";
    for (let i = 0; i < data.length; i++) {
      if(i%2===0){
        head=head+data[i];
      }else{
        tail=tail+data[i];
      }
    }
    return head+tail;
  }
  let result = str;
  for (let i = 0; i < iterations; i++) {
    result=shuffle(result);
  }
  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let variants= [];
  throw new Error('Not implemented');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
