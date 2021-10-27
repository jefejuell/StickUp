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

//Code below constructs a map instance with streets style
mapboxgl.accessToken = 'pk.eyJ1IjoiamVmZWp1ZWxsIiwiYSI6ImNrdGZ6aTlpaTBkOWczMm5sMDdja3UwanYifQ.0bEdPWVZftSkB8c9ZUSBOw';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center:  [-90.370760, 38.636210],
        zoom: 10
        });
    //Adds navigation controls
map.addControl(new mapboxgl.NavigationControl());
    //Adds location markers
const marker = new mapboxgl.Marker()
    .setLngLat([-90.470760, 38.636210])
    .addTo(map);
    
const marker2 = new mapboxgl.Marker()
    .setLngLat([-90.495769, 38.701884])
    .addTo(map);

const marker3 = new mapboxgl.Marker()
    .setLngLat([-90.270020, 38.635078])
    .addTo(map);    

    //Add clickable interface that enables user to change map styles
const layerList = document.getElementById('menu');
const inputs = layerList.getElementsByTagName('input');
    
    for (const input of inputs) {
        input.onclick = (layer) => {
            const layerId = layer.target.id;
            map.setStyle('mapbox://styles/mapbox/' + layerId);
        };
    }    


// /* Given a query in the form "lng, lat" or "lat, lng"
// * returns the matching geographic coordinate(s)
// * as search results in carmen geojson format,
// * https://github.com/mapbox/carmen/blob/master/carmen-geojson.md */
// const coordinatesGeocoder = function (query) {
//     // Match anything which looks like
//     // decimal degrees coordinate pair.
//     const matches = query.match(
//     /^[ ]*(?:Lat: )?(-?\d+\.?\d*)[, ]+(?:Lng: )?(-?\d+\.?\d*)[ ]*$/i
//     );
//     if (!matches) {
//     return null;
//     }
     
//     function coordinateFeature(lng, lat) {
//         return {
//             center: [lng, lat],
//             geometry: {
//             type: 'Point',
//             coordinates: [lng, lat]
//             },
//             place_name: 'Lat: ' + lat + ' Lng: ' + lng,
//             place_type: ['coordinate'],
//             properties: {},
//             type: 'Feature'
//         };
//     }
     
//     const coord1 = Number(matches[1]);
//     const coord2 = Number(matches[2]);
//     const geocodes = [];
     
//     if (coord1 < -90 || coord1 > 90) {
//     // must be lng, lat
//         geocodes.push(coordinateFeature(coord1, coord2));
//     }
     
//     if (coord2 < -90 || coord2 > 90) {
//     // must be lat, lng
//         geocodes.push(coordinateFeature(coord2, coord1));
//     }
     
//     if (geocodes.length === 0) {
//     // else could be either lng, lat or lat, lng
//         geocodes.push(coordinateFeature(coord1, coord2));
//         geocodes.push(coordinateFeature(coord2, coord1));
//     }
     
//     return geocodes;
//     };
     
//     // Add the control to the map.
// map.addControl(
//     new MapboxGeocoder({
//     accessToken: mapboxgl.accessToken,
//     localGeocoder: coordinatesGeocoder,
//     zoom: 4,
//     placeholder: 'Try: -40, 170',
//     mapboxgl: mapboxgl,
//     reverseGeocode: true
//     })
// );

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
