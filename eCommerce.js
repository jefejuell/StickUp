//For Submit email address input box on eCommerce.html webpage
window.addEventListener( "load", function () {
    function sendEmail() {
        const XHR = new XMLHttpRequest();
        const EA = new FormData(form); //EA stands for "email address"; Bind the FormData object and the form element

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


