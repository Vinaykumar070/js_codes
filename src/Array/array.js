//----- Adding and Removing Elements ------//
const arr = [1, 2, 3];

// Add elements
arr.push(4); // Adds to the end
arr.unshift(0); // Adds to the beginning

// Remove elements
arr.pop(); // Removes from the end
arr.shift(); // Removes from the beginning





//---- Find Element----//
const arr1 = [10, 20, 30, 40];

// Find an element (returns the first match)
const found = arr1.find(element => element === 20); 

// Find the index of an element
const index = arr1.findIndex(element => element === 20);





// ----- Sorting ------//
const arr2 = [4, 2, 5, 1, 3];

// Sort in ascending order
arr2.sort((a, b) => a - b);

// Sort in descending order
arr2.sort((a, b) => b - a);



//----Combine array---//
const arry1 = [1, 2, 3];
const arry2 = [4, 5, 6];

// Concatenate two arrays
const combined = arry1.concat(arry2);

// Spread operator to combine arrays
const combined2 = [...arry1, ...arry2];


/// ----- DUPLICATES IN ARRAY -----//
 //-----    Using filter() and indexOf() ---//

 function findDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) !== index && arr.indexOf(item) === index);
}

const array = [1, 2, 3, 4, 5, 6, 2, 3];
console.log(findDuplicates(array)); // [2, 3]




// -- IMP ----//
/// --- Using an Object for Counting Occurrences This method involves using an object to count how many times each element appears, and then identifying the duplicates. --//

function findDuplicates(arr) {
    const count = {};
    const duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        count[arr[i]] = (count[arr[i]] || 0) + 1;
    }

    for (let key in count) {
        if (count[key] > 1) {
            duplicates.push(Number(key)); // Convert the key back to a number if necessary
        }
    }

    return duplicates;
}

const array1 = [1, 2, 3, 4, 5, 6, 2, 3];
console.log(findDuplicates(array1)); // [2, 3]




// ---- IMP----//
/// -- To find two numbers in an array that add up to a given target (in this case, 7), you can use a few different approaches. Below are some of the most efficient methods: ---//
function findPairWithSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]];
            }
        }
    }
    return null; // No pair found
}

const array3 = [1, 2, 3, 4, 5, 6];
const target = 7;
console.log(findPairWithSum(array3, target)); // [1, 6] or [2, 5] or [3, 4]


//-- for only first pair ---//
function findFirstPairWithSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]];  // Return the first matching pair
            }
        }
    }
    return null; // No pair found
}

const array5 = [1, 2, 3, 4, 5, 6];
const target2 = 7;
console.log(findFirstPairWithSum(array5, target2)); // [1, 6]

