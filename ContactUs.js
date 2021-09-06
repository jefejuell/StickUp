//onclick="yardQuote()"

const yardCost = [
    {serviceLevel: "minor", cost: 10},
    {serviceLevel: "normal", cost: 20},
    {serviceLevel: "major", cost: 30}
]
function yardQuote() {
    var person = window.prompt("Thank you for your interest in Stick Up's services. Please tell us your name.","Type your name please.");

    if (person != null) {
        var service = window.prompt(person + ", we will be happy to provide you with a quote", "Briefly describe the current condition of your property.");
    }
    if (service != null) {
        var serviceLevel = window.prompt("Judging by your description, would you categorize the job as minor, normal, or major? " + "Your description: " + service, "Please enter Minor, Normal, or Major");
    }
    if (serviceLevel != null) {
        var address = window.prompt("You have reached out to a professional team " + person + "! " + "We would like to take a look at the property.  What is your address?", "Please type in your address.");
    }
    if (serviceLevel.toLowerCase() === 'minor') {
        let cost = $10;
        //let cost = yardCost[0][1];
      } else if (serviceLevel.toLowerCase() === 'normal') {
        let cost = $20;
        //let cost = yardCost[1][1];
      } else if (serviceLevel.toLowerCase() === 'major') {
        let cost = $30;
        //let cost = yardCost[2][1];
      }

    if (address != null & serviceLevel != null & service != null & person != null) {
        alert("Thank you for your interest in StickUp's services.  An initial esimate of the job cost is " + cost + ". " + "We will be in touch with you shortly to schedule a consultation.")

    } 
    
}

