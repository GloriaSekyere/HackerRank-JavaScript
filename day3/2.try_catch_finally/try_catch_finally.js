/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
 
function reverseString(s) {
    try {
        let newString = ""
        let i = 3;
        while (i > -1) {
            newString += s[i];
            i--;
        }
        console.log(newString);
    }
    catch (err) {
        console.log(err.message);
        console.log(s);
    }
}