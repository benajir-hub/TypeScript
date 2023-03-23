"use strict";
/**
 * A monule can be created by 'export' key word and can be access by other modules by 'import' keywword
 * Modules can be loaded by other modules by molude loader at runtime.
 * Modules are used in JS- 'CommonJS' module loader for Node.js and 'requirejs' for web application
 *
 *
 * By 'export' keyword we are defining this file as module as well as exporting the 'Point' class outside of this module
 */
exports.__esModule = true;
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ' Y: ' + this.y);
    };
    return Point;
}());
exports.Point = Point;
