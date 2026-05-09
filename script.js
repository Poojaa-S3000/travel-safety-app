let travelTimer;
let responseTimer;
let phoneNumber;

function startTravel(){
    phoneNumber = document.getElementById("phone").value;
    let interval = document.getElementById("interval").value;

    if(phoneNumber == ""){
        alert("Enter phone number");
        return;
    }

    document.getElementById("status").innerText = "Travel mode started";

    travelTimer = setInterval(showPopup, interval);
}

function stopTravel(){
    clearInterval(travelTimer);
    document.getElementById("status").innerText = "Travel stopped";
}

function showPopup(){
 alert("Timer working!");
    document.getElementById("popup").style.display="block";

    responseTimer = setTimeout(triggerEmergency, 20000);
}
    
function userSafe(){
    document.getElementById("popup").style.display="none";
    clearTimeout(responseTimer);
}
function triggerEmergency(){
    document.getElementById("popup").style.display="none";
    document.getElementById("emergency").style.display="block";
}
    // play siren
    document.getElementById("siren").play();

    // get location
    navigator.geolocation.getCurrentPosition(function(position){

        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        let message = "Emergency! I didn’t respond. My location: https://maps.google.com/?q=" + lat + "," + long;

        // open WhatsApp
        window.open("https://wa.me/" + phoneNumber + "?text=" + message);

        // open SMS
        window.open("sms:" + phoneNumber + "?body=" + message);

    function sendEmergency(){
    document.getElementById("siren").play();

    navigator.geolocation.getCurrentPosition(function(position){

        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        let message = "Emergency! I didn’t respond. My location: https://maps.google.com/?q=" + lat + "," + long;

        window.open("https://wa.me/" + phoneNumber + "?text=" + message);
        window.open("sms:" + phoneNumber + "?body=" + message);
    });
}
