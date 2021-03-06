// Given an array of integers, return the indieces of the two number that add up to a given target

// Edge Cases

// - Are all the numbers positive or negatives?
// - Are there duplicates numbers?
// - Will there always be a solution? ex. empty array or an array with one number?
// - What should we return if there is no solution?
// - Are there multiple answers?

const testArray1 = [1, 3, 7, 9, 2]

const testArray2 = [1, 2, 3, 4, 5]

const emptyArray = []

const arrayWithOneNumber = [5] //where the target is 8

const arrayWithOneNumberWT = [5] //where the target is the only number

const arrayWithTwoNumbers = [1, 6] //where the target is the two num sums

function twoSums(array, target) {
    if (array.length === 0) {
        return "the number is not in the list";
    }
    
    if (array.length === 1 && array[0] === target) {
        return "the number is here!!"
    }

    let currentHead = array[0]
    if (currentHead + array[1] === target) {
        return "found the number"
    }


    for (let i = 1; i < array.length; i++){
        if (currentHead + i === target) {
            return "found the number"
        } else {
            array.shift()
            return twoSums(array, target)
        }
    }
    return "the number was not found"
}

console.log(twoSums(arrayWithOneNumber, 99));