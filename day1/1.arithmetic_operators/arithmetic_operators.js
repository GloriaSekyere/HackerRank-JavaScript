/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/

function getArea(length, width) {
    if (length >= 1 && length <= 1000 && width >= 1 && width <= 1000) {
        let area = length * width;
        return area;
    }
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/

function getPerimeter(length, width) {
    if (length >= 1 && length <= 1000 && width >= 1 && width <= 1000) {
        let perimeter = 2 * (length + width);
        return perimeter;
    }
}