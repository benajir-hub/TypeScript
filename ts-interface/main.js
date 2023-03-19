/**
 * Classic way of declaring multiple parameter
 * works fine in simple cases may cause problem in complex cases
 * can cause problem of object literal in multiple places (other function may expects this point object)
 * Better approach is INTERFACE concept
*/
var drawpoint = function (point) {
    console.log('X: ' + point.x + '\n' + 'Y: ' + point.y);
};
drawpoint({
    x: 2,
    y: 3
});
var draw = function (type) {
    console.log('1st point: ' + type.x + '\n' + '2nd point: ' + type.y);
};
console.log('--Using Interface--');
var drawDistance = { x: 2, y: 3 };
draw(drawDistance);
