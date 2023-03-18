//normal way of declaring function
//anonymous function
var log = function (message) {
    console.log(message);
};
log('Orthodox way of anonymous function');
//declaring function with fat arrow sign
var doLog = function (message) {
    console.log(message);
};
doLog('anonymous function with arrow function');
//if there is only one line in the function
/*let doLog = (message) => console.log(message)*/
//if there is only one line in the function and only one parameter
/*let doLog = message => console.log(message)*/ //this is not good approach
//for empty parameter
/*let doLog = () => console.log()*/
var message = 'TypeScript';
