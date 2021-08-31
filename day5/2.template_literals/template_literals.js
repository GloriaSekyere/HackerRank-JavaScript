/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */

function sides(literals, ...expressions) {
    let A = expressions[0];
    let P = expressions[1];
    
    let result = [(P + Math.sqrt((P ** 2) - 16 * A)) / 4,
                (P - Math.sqrt((P ** 2) - 16 * A)) / 4];
    result.sort(function(a,b){return a-b;});
    
    return result;
}