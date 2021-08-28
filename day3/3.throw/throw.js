/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
 
function isPositive(a) {
    if (a >= -100 && a <= 100) {
        try {
            if (a == 0) throw "Zero Error";
            if (a < 0) throw "Negative Error";
            if (a > 0) return "YES";
        }
        catch (err) {
            return err;
        }
    }
}