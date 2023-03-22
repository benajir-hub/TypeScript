/**
 * 3 types of access modifiers-
 * -public (by default all members are public but need to initialize public when declaring in constructor parameter)
 * -private
 * -protected
 *
 */
var Point = /** @class */ (function () {
    //We can prefix the parameters by access modifiers and also don't need to initialize these before 
    //Moreover we can also secure the code using access modifiers
    function Point(x, y) {
        this.x = x;
        this.y = y;
        console.log('Value assigned while object creation through constructor!');
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return Point;
}());
var point = new Point();
point.draw();
var point2 = new Point(2, 3);
point2.draw();
