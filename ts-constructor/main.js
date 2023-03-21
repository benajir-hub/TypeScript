var Point = /** @class */ (function () {
    /**
    * In typescript 'constructor' is the the reserved keyword for constructor
    * In typescript there is no use of multiple constructors but only one
    * However if we put '?' mark after the name of parameter we can make that parameter optional
    *
    * //optional parameter
    * constructor(x?: number, y?: number){
        this.x = x;
        this.y = y;
    }
    *
    *
    */
    //normal way of declaring contructor with mandatory parameter
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
//for optional consstructors
/**
* let point = new Point();
*/
var point = new Point(2, 3);
point.draw();
