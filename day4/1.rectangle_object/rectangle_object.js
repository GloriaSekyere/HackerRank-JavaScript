/*
 * Complete the Rectangle function
 */
 
function Rectangle(a, b) {
    if (a >= 1 && a <= 100 && b >= 1 && b <= 100) {
        const rectangle = {
            length: a,
            width: b,
            perimeter: 2 * (a + b),
            area: a * b
        }
        return rectangle;
    }
}
