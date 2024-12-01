//1
const number = [5, 7, 2]
console.log(number)
const spliceNumber = number.splice(1, 1, )
console.log(number)

//2
const word = ['one', 'four', 'tree']
console.log(word)
word.push('two')
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
const arrayBiggest = Math.max(...array)
console.log(arrayBiggest)

//7
const joker = [12, 45, 7, 89, 32, 56, 3, 98, 20, 67];

for (let g = 0; g < joker.length; g++) {
    if (joker[g] % 2 === 0) {
        console.log(joker[g]);
    }
}