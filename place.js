//1
const number = [5, 7, 2]
console.log(number)
number[1] = number[1] * 10
console.log(number)

//2
let word = ['one', 'four', 'tree']
console.log(word)
word[3]='two'
console.log(word)

//3
const arr = [4, 765, 12, 9999, 1, 10, 55, 6, 8, 140]
let sum = 0
for(let i = 0; i < arr.length; i += 1) {
 sum += arr[i]
}
console.log(sum)

//4
const arr2 = [1, 2, 3, 4, 5]
for (let y = 0; y < arr2.length; y++) {
    const h = arr2[y];
    console.log(h)
}

//5
const arr3 = ["high", "eight", "monday", "five", "nummber"]
for (let t = 0; t < arr3.length; t++) {
    if (arr3[t].length > 5) {
        console.log(arr3[t]);
    }
}

//6
const array = [34, 45, 4343, 54, 35, 78, 98, 9898, 7809, 8]
let biggestNumber = array[0];
biggestNumber = array[1] > biggestNumber ? array[1] : biggestNumber;
biggestNumber = array[2] > biggestNumber ? array[2] : biggestNumber;
biggestNumber = array[3] > biggestNumber ? array[3] : biggestNumber;
biggestNumber = array[4] > biggestNumber ? array[4] : biggestNumber;
biggestNumber = array[5] > biggestNumber ? array[5] : biggestNumber;
biggestNumber = array[6] > biggestNumber ? array[6] : biggestNumber;
biggestNumber = array[7] > biggestNumber ? array[7] : biggestNumber;
biggestNumber = array[8] > biggestNumber ? array[8] : biggestNumber;
biggestNumber = array[9] > biggestNumber ? array[9] : biggestNumber;

console.log(biggestNumber)

//7
const joker = [12, 45, 7, 89, 32, 56, 3, 98, 20, 67];

for (let g = 0; g < joker.length; g++) {
    if (joker[g] % 2 === 0) {
        console.log(joker[g]);
    }
}