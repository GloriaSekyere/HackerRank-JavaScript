function getLetter(s) {
    let letter;
    if (s.length >=1 && s.length <=100) {
        switch (s[0]) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                letter = "A";
                break;
            
            case "b":
            case "c":
            case "d":
            case "g":
            case "f":
                letter = "B";
                break;
            
            case "h":
            case "j":
            case "k":
            case "l":
            case "m":
                letter = "C";
                break;
            
            default:
                letter = "D"
        }
          
    }
    return letter;
}