/**
 * Classic way of declaring multiple parameter
 * works fine in simple cases may cause problem in complex cases
 * can cause problem of object literal in multiple places (other function may expects this point object)
 * Better approach is INTERFACE concept
*/

let drawpoint = (point: {x: number, y: number}) => {
    console.log('X: ' + point.x + '\n' + 'Y: ' + point.y)
}
drawpoint ( {
    x: 2,
    y: 3
});

/**
 * INTERFACE - a better aproach
 * can be used in multiple places
 * Naming convention: Starts with Capital letter (Pascal naming convention)
 */

interface Point{
    x: number,
    y: number,
    
}


let draw = (type: Point): void => {
    console.log('1st point: ' + type.x + '\n' + '2nd point: ' + type.y);
}

console.log('--Using Interface--');

let drawDistance = {x : 2, y : 3 }
draw(drawDistance);