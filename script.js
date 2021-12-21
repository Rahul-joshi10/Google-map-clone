//My mapbox account API access token

import {config} from "./config.js";

mapboxgl.accessToken =config.apikey;

//this is to access your location. It will show the pop-up saying " the site wants to know your location"
 navigator.geolocation.getCurrentPosition(sucessLocation, errorLocation, {
     enableHighAccuracy: true
 }) 

 function sucessLocation(position){
    //  console.log(position);
     setupMap([position.coords.longitude, position.coords.latitude]);
 }

function errorLocation(){
  //Default location in case of error
    setupMap(73.919548,18.568859);
}

//main
function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
      })

      // Add zoom and rotation controls to the map.
      const nav = new mapboxgl.NavigationControl()
      map.addControl(nav);

      //To get the directions
      var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
        })
         map.addControl(directions,'top-left');
    }







