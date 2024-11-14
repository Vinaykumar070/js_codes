// Debounce function to delay execution
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Example usage
const debouncedFunc = debounce(() => console.log('Function executed!'), 1000);
debouncedFunc(); // Executes only after 1 second of inactivity

// Throttle function to limit executions
function throttle(func, wait) {
    let lastTime = 0;
    return function(...args) {
        const now = new Date().getTime();
        if (now - lastTime >= wait) {
            lastTime = now;
            func.apply(this, args);
        }
    };
}

// Example usage
const throttledFunc = throttle(() => console.log('Throttled execution!'), 1000);
throttledFunc(); // Executes once every 1 second




// Shallow comparison (checks if two objects are identical by reference)
function shallowEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

const obj1 = { name: 'John', age: 30 };
const obj2 = { name: 'John', age: 30 };
console.log(shallowEqual(obj1, obj2)); // true

// Deep comparison (checks if two objects are deeply equal)
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;

    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

console.log(deepEqual(obj1, obj2)); // true
