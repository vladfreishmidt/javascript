/* 
                📝
    Symbol is a primitive data type for unique identifiers creation
    can be created with a Symbol() function

    Used for:
    - hidden object properties (for an object from an external script / library)
    - system symbols to change default object behavior

    not hidden on 100%
    - Object.getOwnPropertySymbols(obj)
    - Reflect.ownKeys(obj)
*/

// 1. create a new Symbol
let id = Symbol("id"); // description can be added "id"

console.log(id);

// 2. Symbols are always unique --
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false --

// 3. Symbols are not automatically converted to strings
let id3 = Symbol("id");
alert(id); // TypeError: Cannot convert a Symbol value to a string

// 4. Manual convertation
let id4 = Symbol("id");
alert(id.toString()); // Symbol(id), works now
alert(id.description); // get description

// 5. Symbols allow the creation of 'hidden' properties to avoid accidental rewriting
// 6. Symbols are ignored by for..in loop
// 7. Object.keys(user) ignors Symbols
// 8. Object.assign copies string and symbol properties
// 9. Create a Global Symbol
let idGlobal = Symbol.for("id"); // searches / creates a global symbol, global description must be unique

// 10. Get name by Symbol (Symbol.keyFor(sym))
let sym = Symbol.for("name");
alert(Symbol.keyFor(sym)); // name
