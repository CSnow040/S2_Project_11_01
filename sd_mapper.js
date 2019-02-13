"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Caleb Snow
   Date:   2/12/19

*/

// These variables are used to give a time specific to where the user is on the sky images by using many types of methods  
var thisTime = new Date();
var timeStr = thisTime.toLocaleString();
document.getElementById("timeStamp").innerHTML = timeStr;

// These variables are used to call upon the getHours and getMonth methods to do that exactly
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();

// The variable named mapNum is used to add the specific month and hour and the variable with the name imgStr is used to put the image that corresponds with the mapNum to be displayed  
var mapNum = (2 * thisMonth + thisHour) % 24;
var imgStr = "<img src = 'sd_sky" + mapNum + ".png' />";

// This calls upon the phanisphere id and displays it within the correct image string using both methods getElementById and insertAdjacentHTML both using the correct variables for each
document.getElementById('planisphere').insertAdjacentHTML("afterbegin", imgStr);