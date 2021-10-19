//Declare array variables
var quoteArray = [];
const yardCost = [
    ['minor', 10],
    ['normal', 20],
    ['major', 30],
    ];

//This function is called from a button click on the SticksUp ContactUs.html page
function yardQuote() {
    let cost = undefined;
    var person = window.prompt("Thank you for your interest in Sticks Up's services. Please tell us your name.","Type your name please.");
    quoteArray.push(person);

    //Create DOM nodes with user input values
    let quoteDiv = document.createElement("div");
    let person_text = document.createTextNode(person);
    quoteDiv.appendChild(person_text);
    quoteDiv.title = "QuoteData";

    //Series of window prompts that capture user input data
    if (person != null && person != 'Type your name please.') {
        var service = window.prompt(person + ", we will be happy to provide you with a quote", "Briefly describe the current condition of your property.");
        quoteArray.push(service);
        let service_text = document.createTextNode(service);
        quoteDiv.appendChild(service_text);
        }

    if (service != null) {
        var serviceLevel = window.prompt("Judging by your description, would you categorize the job as minor, normal, or major? " + "Your description: " + service, "Please enter Minor, Normal, or Major");
        quoteArray.push(serviceLevel);
        let serviceLevel_text = document.createTextNode(serviceLevel);
        quoteDiv.appendChild(serviceLevel_text);
    }

    if (serviceLevel != null) {
        var address = window.prompt("You have reached out to a professional team " + person + "! " + "We would like to take a look at the property.  What is your address?", "Please type in your address.");
        quoteArray.push(address);
        let address_text = document.createTextNode(address);
        quoteDiv.appendChild(address_text);
    }

    if (address != null) {
        var email = window.prompt("To schedule an appointment at " + address + ", please send us your email address.", "Please type in your email address.");
        quoteArray.push(email);
        let email_text = document.createTextNode(email);
        quoteDiv.appendChild(email_text);
    }
    //Quote determination logic for a preliminary pricing quote for the job.
    switch (serviceLevel.toLowerCase()) {
      case 'minor' :
          cost = yardCost[0][1];
          break;
      case 'normal' :
          cost = yardCost[1][1];
          break;
      case 'major' :
          cost = yardCost[2][1];
          break;
    }
    quoteArray.push(cost);

    //Final alert window that presents the pricing quote and outlines next steps.
    if (address != null & serviceLevel != null & service != null & person != null & email != null) {
        alert("Thank you for your interest in SticksUp's services.  An initial esimate of the job cost is $" + cost + ". " + "We will be in touch with you shortly to schedule a consultation.")
    } 
console.log(quoteArray);
}

window.addEventListener( "load", function () {
    function sendEmail() {
        const XHR = new XMLHttpRequest();
        const EA = new FormData("form"); //EA stands for "email address"; Bind the FormData object and the form element

        XHR.addEventListener( "load", function(event) {
            var emailPerson = window.prompt("Thank you for your interest in SticksUP. Please tell us your name.", "Type your name please.");

            if (emailPerson != null && emailPerson != "Type your name please.") {
                alert(emailPerson + " , we are excited to have you gear UP with SticksUP!");
            };
        } );
        XHR.addEventListener( "error", function(event) {
            alert('Oops! Something went wrong.');
        } );

        XHR.open( "POST", "https://www.freecodecamp.com/email-submit");
        XHR.send( EA );
    }
        const form = document.getElementById("form");
        form.addEventListener( "submit", function (event) {
            event.preventDefault();
    
            sendEmail();
        } );
    } );


    /*if (serviceLevel.toLowerCase() === 'minor') {
        cost = yardCost[0][1];
      } else if (serviceLevel.toLowerCase() === 'normal') {
        cost = yardCost[1][1];
      } else if (serviceLevel.toLowerCase() === 'major') {
        cost = yardCost[2][1];
      }*/


/*const yardCost = [
    {serviceLevel: "minor", cost: 10},
    {serviceLevel: "normal", cost: 20},
    {serviceLevel: "major", cost: 30}
];
*/

//Method to create DOM nodes with input values:
/*    let quoteDiv = document.createElement("div");
        let person_text = document.createTextNode(person);
        quoteDiv.appendChild(person_text);
        quoteDiv.title = "QuoteData";
        
*/
