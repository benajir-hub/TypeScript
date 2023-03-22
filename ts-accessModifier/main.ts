/**
 * 3 types of access modifiers-
 * -public (by default all members are public but need to initialize public when declaring in constructor parameter)
 * -private
 * -protected
 * 
 */

class Point{
    
    //We can prefix the parameters by access modifiers and also don't need to initialize these before 
    //Moreover we can also secure the code using access modifiers
    constructor(private x?: number, private y?: number){

        console.log('Value assigned while object creation through constructor!');
    }

    draw(){
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}



let point = new Point();
point.draw();

let point2 = new Point(2,3);
point2.draw();