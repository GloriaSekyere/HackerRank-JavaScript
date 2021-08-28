/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
 
function vowelsAndConsonants(s) {
    const vowels = [];
    const consonants = []; 
    for (let x in s) {
        
        if (s[x]=="a" || 
            s[x]=="e" ||
            s[x]=="i" ||
            s[x]=="o" ||
            s[x]=="u") {
                vowels.push(s[x]);
                
        } else {
            consonants.push(s[x]);
        }
    } 
    for (let x in vowels) {
        console.log(vowels[x]); 
    }
    for (let x in consonants) {
        console.log(consonants[x]); 
    }
}