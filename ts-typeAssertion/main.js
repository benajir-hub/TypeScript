/**
 *
 *
//Declaring the type of the variable

let message = 'abc';
let endsWithC = message.endsWith('c');
*/
//If we don't declare the variable
//To access the intellisence, we use type assertion
//type assertion is a way to tell the compiler about the type nothing else
//It doesn't change the type of the variable at runtime, not ever restructure that object in memory
var message;
message = 'abc';
var endsWithC = message.endsWith('bc');
var alternativeWay = message.endsWith('c');
