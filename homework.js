// 1. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

function sum(numbers) {
  var total = 0;
  for (var index = 0; index < numbers.length; index++) {
    total = total + numbers[index]
  }
  return total
}

// loop through array: named a var called total which starts at 0 , created a loop for indexing array values
// add numbers in array: tell the program that the total var = the "total" (we add to each time we loop) + indexed numbers
// return the sum: return the total var

// 2. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.


function average(numbers) {
  var total = sum(numbers)
  for (var index = 0; index < numbers.length; index++) {
    var average = total / numbers.length
  }
  return average
}

// 3. Create a function called "intersection" that takes two arrays and
// returns a new array that contains the elements found in both arrays.
// The order they are in does not matter, but no duplicates should be
// in the returned array, even if they were in the input.

function intersection(array1, array2) {
  var newArray = []
  for (var index = 0; index < array1.length; index++) {
    for (var i = 0; i < array2.length; i++) {
      if (array1[index] === array2[i]) {
        newArray.push(array1[index])
      }
    }
  } return newArray

  // as long as the 'index' is < the length of the array
}

// 4. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

function minimum(arrayOfNumbers) {
  var minimum;
  for (var i = 0; i < arrayOfNumbers.length; i++) {
    if (typeof (minimum) === 'undefined' || arrayOfNumbers[i] < minimum) {
      minimum = arrayOfNumbers[i]
    }
  } return minimum
}

// 5. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

// function selectionSort(arraySort) {
//   var arraySortCopy = arraySort.slice(0)
//   var minimum = minimum(arrayOfNumbers) 
//   var newArray = []
//     for (var i = 0; index < arraySort.length; i++) {

//   }
// }


// 6. Create a function called "createUser" that takes a name and a Date object
// and returns an object with the keys "name" and "dob" (date of birth) with
// those values.

function createUser(name, dob) {
   var user = {name: "Andre", dob: new Date(1999, 1, 15)}

  

}
// call function createUser (Ashley, dob) -- return "name" Ashley, "dob" 7/1/80

// 7. Create a function called "calculateAge" that takes a user created from
// createUser and a Date object considered the current date, and calculates the user's
// age in years on that date. You can use your code from yesterday's homework.

// 8. Create a function called "addAge" that takes a user created from createUser
// and a Date object and adds a new key on the user object, "age", with the age
// in years the user was on that date.

// 9. Create a function called "createUsers" that takes two arrays of equal
// length, the first being a list of names and the second being a list of dates of
// birth, and returns a new array of objects created from those original arrays.

// 10. Create a function called "averageAge" that takes an array of users and
// a Date object and returns the average age in years of the users on that date.
// You do not have to handle the situation in which the current date is before
// a user's date of birth.
