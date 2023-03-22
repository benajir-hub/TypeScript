/**
 * //A property looks like a field from the outside but internally it's really a method in the class
 * //It's allow the objects to assign or read the value of a private property outside of a class
 * 
 */

class Point{
    
    constructor(private _x: number, private _y: number){

        console.log('Values assigned while object creation through constructor!');
    }

    draw(){
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }

    //In JavaScript & TypeScript setter and getter follows camelCase naming convention
    get x(){
        return this._x;
    }
    set x(value: number){
        
        //this._x = value;

        //we can add some condition if we want

        if(value < this._x)

            throw new Error ('New value cannot be smaller than the previous one.');
            
        this._x = value;
    }
}



let point = new Point(2,3);

console.log('Values after initialisation!')
point.draw();

//we can read the private property _x of Point class outside of the class
let x = point.x;
//we can also reassign the value of _x
point.x = 10;

console.log('Values after reassigning!')
point.draw();

