n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("currentDay").innerHTML = m + "/" + d + "/" + y;

var saveButton = document.querySelector("button")
var activities = document.querySelector("textarea")
var hour9 = document.querySelector("#hour-9")
var hour10 = document.querySelector("#hour-10")
var hour11 = document.querySelector("#hour-11")
var hour12 = document.querySelector("#hour-12")


saveButton.addEventListener("click", function(event) {
    event.preventDefault();
const data = [{
    hour9: activities.value.trim(),
    hour10: activities.value.trim(),
    hour11: activities.value.trim(),
    hour12: activities.value.trim(),
}];
localStorage.setItem("data", JSON.stringify(data));
});



