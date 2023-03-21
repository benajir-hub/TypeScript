//Declaring a class 'Point'
class Point {
    x: number;
    y: number;
    
    draw () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    getDistance(another: Point){
        //...
    }
}

//Declaring an object 'point' of class 'Point'
let point = new Point();
point.x = 2;
point.y = 3;
point.draw();