/*JS*/
// Variables // 
var longitude; 
var latitude; 
var x = document.getElementById("demo");
// Fonction qui demande à l'utilisateur sa position //
function activeLocation() {
  if (navigator.geolocation) 
  {
    navigator.geolocation.getCurrentPosition(showLocation);
  } 
  else 
  {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
// Sauvegarde des variables latitude et longitude //
function showLocation(position) {
    latitude = position.coords.latitude; 
    longitude = position.coords.longitude;
    console.log("Latitude : " + latitude + " Longitude : " + longitude); 
    ajaxOpenSM(); 
}

// Construction de la requête //xx
function ajaxOpenSM()
{
    maRequete = new XMLHttpRequest(); 
    maRequete.open('GET','https://nominatim.openstreetmap.org/reverse?format=json&lat='+latitude+'&lon='+longitude, true);
    maRequete.onreadystatechange = callB;
    maRequete.send();
}
// Fonction de callBack de la fonction ajaxOpenSM //
function callB()
{
    if (maRequete.readyState === XMLHttpRequest.DONE) 
    {
        if (maRequete.status === 200) 
        {
          console.log(maRequete.responseText);
          var codeP = getCP(maRequete.responseText); 
          colorDPT(codeP); 
        } 
        else 
        {
          alert(maRequete.status);
        }
    }
}
// Fonction qui récupère le code postal //
function getCP(response)
{     
  var chaine = JSON.stringify(response); 
  var postcode = chaine.substr(586,2); 
  return postcode; 

}
//Fonction qui colore un département //
function colorDPT(dpt)
{
  var color = document.querySelector("path[data-num='"+dpt+"']"); 
  color.style.fill="red"; 
} 

// Appel de la fonction activeLocation() et colorDPT() au chargement du DOM //
window.addEventListener("DOMContentLoaded", activeLocation); 