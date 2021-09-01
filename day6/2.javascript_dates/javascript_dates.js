// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"

function getDayName(dateString) {
            
    let date  = new Date(dateString);
    let dayNum = date.getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday",
                    "Thursday", "Friday", "Saturday"];
    let dayName = days[dayNum];
    return(dayName);
            
} 