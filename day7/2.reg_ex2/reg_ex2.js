function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    const re = /^Mr\.|Mrs\.|Er\.|Dr\.[A-Z]+[a-z]*$/;
    
    /*
     * Do not remove the return statement
     */
    return re;
}