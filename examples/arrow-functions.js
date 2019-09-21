/**
 * 
 * A very simple example of arrow functions 
 */


const circleArea = r => {
    const PI = 3.14;
    const area = PI * r * r;
    return area;
};
console.log(circleArea(2));
//we can even simplify 
const circleArea2 = r => 3.14 *r*r;
console.log(circleArea2(2));