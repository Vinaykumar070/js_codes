// -- create Object ---//
const obj1 = {}; // Empty object
const obj2 = { name: 'John', age: 30 }; // Object with properties




//----- Accessing Object Properties -----//
const person = { name: 'John', age: 30 };

// Dot notation
console.log(person.name);

// Bracket notation (for dynamic property names)
console.log(person['age']);



// ---  Adding and Modifying Properties ---//
const person1 = { name: 'John' };

// Adding properties
person1.age = 30;
person1['gender'] = 'male';

// Modifying properties
person1.age = 31;


//------ Deleting Properties -----//
const person1 = { name: 'John', age: 30 };

// Deleting a property
delete person1.age;


//----- Object Destructuring ---//
const person1 = { name: 'John', age: 30, gender: 'male' };

// Destructuring to extract properties into variables
const { name, age } = person1;
console.log(name, age); // 'John' 30


// ------ Object.keys(), Object.values(), Object.entries() ----//
const person2 = { name: 'John', age: 30 };

// Get all keys
const keys = Object.keys(person2); // ['name', 'age']

// Get all values
const values = Object.values(person2); // ['John', 30]

// Get key-value pairs as arrays
const entries = Object.entries(person2); // [['name', 'John'], ['age', 30]]


///---- Cloning Objects ----//
const person3 = { name: 'John', age: 30 };

// Shallow clone using Object.assign()
const clone = Object.assign({}, person3);

// Shallow clone using spread operator
const clone2 = { ...person3 };

// Deep clone using JSON (for simple structures)
const deepClone = JSON.parse(JSON.stringify(person3));


//----- Merging objects-------//
const person5 = { name: 'John' };
const contact = { phone: '123-4567' };

// Merging objects
const merged = { ...person5, ...contact }; // { name: 'John', phone: '123-4567' }



/// ---- Checking if an Object has a Property -----//
const person6 = { name: 'John', age: 30 };

// Freeze an object (no modifications allowed)
Object.freeze(person6);
person6.age = 31; // Won't work

// Seal an object (properties can be modified, but no new properties can be added)
Object.seal(person6);
person6.gender = 'male'; // Won't work
person6.age = 31; // Works


