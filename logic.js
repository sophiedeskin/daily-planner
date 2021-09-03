var activitiesInput = document.querySelector("textarea");
var activities = []
const data = JSON.parse(localStorage.getItem("day-schedule")) || {};

const date = new Date();
    const hour = date.getHours();



var parsed9 = JSON.parse(localStorage.getItem("9"));
$("#text9").val(parsed9.text);

var parsed10 = JSON.parse(localStorage.getItem("10"));
$("#text10").val(parsed10.text);

var parsed11 = JSON.parse(localStorage.getItem("11"));
$("#text11").val(parsed11.text);

var parsed12 = JSON.parse(localStorage.getItem("12"));
$("#text12").val(parsed12.text);

var parsed13 = JSON.parse(localStorage.getItem("13"));
$("#text13").val(parsed13.text);

var parsed14 = JSON.parse(localStorage.getItem("14"));
$("#text14").val(parsed14.text);

var parsed15 = JSON.parse(localStorage.getItem("15"));
$("#text15").val(parsed15.text);

var parsed16 = JSON.parse(localStorage.getItem("16"));
$("#text16").val(parsed16.text);

var parsed17 = JSON.parse(localStorage.getItem("17"));
$("#text17").val(parsed17.text);

// Find all .time-block elements
$(".time-block").each(function (i, object) {
const hour = object.id;
if(hour === date.getHours()) {
//     //current hour
document.getElementById(`text${object.id}`).style.backgroundColor = "red"
}else if (hour > date.getHours()){
     document.getElementById(`text${object.id}`).style.backgroundColor = "green"
//     //future hour
 }else {
//     //past hour
 document.getElementById(`text${object.id}`).style.backgroundColor = "grey"
}



    // see if you have any data in local storage for each text area
    if (object.id) {
      // place that text
      console.log(object.id);
    }
    // apply the class for if the time block is current, in the past, or future
  });

  $(".saveBtn").on("click", function (event) {
    event.preventDefault();
    // Retrieve the value from the text area
    const val = $(this).siblings("textarea").eq(0).val().trim();
    // retrieve the id from the parent
    const id = $(this).parent().attr("id");
    console.log(val)
    console.log(id)
    const data = {time:id, text:val}
    // save to localstorage
    localStorage.setItem(id, JSON.stringify(data));
    console.log(data)
  });
    

  setInterval(function () {
    document.getElementById("currentDay").innerHTML = formatDate(new Date());
  }, 1000);
  
  function formatDate(today) {
    var year = today.getFullYear(),
      month = today.getMonth() + 1,
      date = today.getDate(),
      hour = today.getHours(),
      minutes = today.getMinutes(),
      seconds = today.getSeconds();
  
    return `${month}/${date}/${year} ${hour}:${minutes}:${seconds}`;
  }





