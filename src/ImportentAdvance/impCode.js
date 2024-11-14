// ---Promise -----//
// Creating a promise
const promise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Success!");
    } else {
        reject("Error!");
    }
});

// Handling the promise
promise.then((result) => {
    console.log(result); // "Success!"
}).catch((error) => {
    console.log(error); // "Error!"
});

// Async/Await (handling promises with async/await)
async function fetchData() {
    try {
        const result = await promise;
        console.log(result); // "Success!"
    } catch (error) {
        console.log(error); // "Error!"
    }
}

fetchData();


/////----Curying -----///
// Simple currying example
function add(a) {
    return function(b) {
        return a + b;
    };
}

const addFive = add(5);
console.log(addFive(10)); // 15

// Using currying to create custom functions
function multiply(a) {
    return function(b) {
        return a * b;
    };
}

const multiplyByTwo = multiply(2);
console.log(multiplyByTwo(5)); // 10




// Generator function (Lazy evaluation)
function* countUpTo(max) {
    let count = 1;
    while (count <= max) {
        yield count;
        count++;
    }
}

const counter = countUpTo(3);
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
console.log(counter.next().value); // 3
console.log(counter.next().value); // undefined (done)
