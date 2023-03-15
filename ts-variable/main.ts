//var number = 1;
//let count = 2;

/*using VAR keyword*/

function doSomethingRight() {
    for(var i = 0; i < 6; i ++) {
        console.log(i);
    }
    console.log('Finally' + i); //i is valid inside the function
} 

doSomethingRight();

/*Using LET Keyword*/
function doSomething() {
    for(let i = 0; i < 6; i ++) {
        console.log(i);
    }
    console.log('Finally' + i); // i is valid inside the block
} 

doSomething();