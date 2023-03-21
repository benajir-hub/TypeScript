//Declaring a class 'Point'
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //...
    };
    return Point;
}());
//Declaring an object 'point' of class 'Point'
var point = new Point();
point.x = 2;
point.y = 3;
point.draw();
