//In the space below each problem, write the code to answer. This page connects to index.html

/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/

var date = new Date();
var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// used the formula below from quackit.com's javascript tutorials:
// link: https://www.quackit.com/javascript/tutorial/javascript_date_and_time.cfm

var currentTime = new Date(),
    hours = currentTime.getHours(),
    minutes = currentTime.getMinutes();

if (minutes < 10) {
 minutes = "0" + minutes;
}

var suffix = "AM";
if (hours >= 12) {
  suffix = "PM";
  hours = hours - 12;
}
if (hours == 0) {
 hours = 12;
}

document.getElementById("answer1").innerHTML = "Today is " + dayNames[date.getDay()] + "." + "<br>" + (hours + ":" + minutes + " " + suffix);
console.log("Today is " + dayNames[date.getDay()]);
console.log(hours + ":" + minutes + " " + suffix);

// 2. mm-dd-yyyy, mm/dd/yyyy and dd/mm/yyyy each on a seperate line. //
// First assisted by tutorialsteacher and adapted from there

var d = date.getDate();
var m = date.getMonth() + 1;
var y = date.getFullYear();

var dateString = (m <= 9 ? '0' + m : m) + "-" + (d <= 9 ? '0' + d : d) + "-" + y;
var dateString2 = (m <= 9 ? '0' + m : m) + "/" + (d <= 9 ? '0' + d : d) + "/" + y;
var dateString3 = (d <= 9 ? '0' + d : d) + "/" + (m <= 9 ? '0' + m : m) + "/" + y;

document.getElementById("answer2").innerHTML = dateString + "<br>" + dateString2 + "<br>" + dateString3;
console.log(dateString);
console.log(dateString2);
console.log(dateString3);

// 4. from The Book

(function () {
'use strict'

paper.install(window);
paper.setup(document.getElementById('mainCanvas'));

var c= Shape.Circle(200, 200, 80);
c.fillColor = 'black';
var text = new PointText(200,200);
text.justification = 'center';
text.fillColor = 'white';
text.fontSize = 20;
text.content = 'hello world';

var tool2 = new Tool();
tool2.onMouseDown = function(event) {
  var c = Shape.Circle(event.point, 20);
  c.fillColor = 'green';
};

paper.view.draw();

}())
