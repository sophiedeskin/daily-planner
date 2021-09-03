var activitiesInput = document.querySelector("textarea");
var activities = []
const data = JSON.parse(localStorage.getItem("day-schedule")) || {};

const date = new Date();
    const hour = date.getHours();


//getting input from users entry and parsing it and saving it to the page
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
    //converting our string into an integer
const hour = parseInt(object.id);
if (hour === date.getHours()) {
     //current hour
     document.getElementById(`text${object.id}`).style.backgroundColor = "red"
}else if (hour > date.getHours()){
    //future hour
     document.getElementById(`text${object.id}`).style.backgroundColor = "green"
 }else {
     //past hour
 document.getElementById(`text${object.id}`).style.backgroundColor = "grey"
}
  });

  $(".saveBtn").on("click", function (event) {
    event.preventDefault();
    // Retrieve the value from the text area
    const val = $(this).siblings("textarea").eq(0).val().trim();
    // retrieve the id from the parent
    const id = $(this).parent().attr("id");
    const data = {time:id, text:val}
    // save to localstorage and turning back into a string
    localStorage.setItem(id, JSON.stringify(data));
  });
    
//placing our formated date into its section
  setInterval(function () {
    document.getElementById("currentDay").innerHTML = formatDate(new Date());
  }, 1000);
  //formatting date
  function formatDate(today) {
    var year = today.getFullYear(),
      month = today.getMonth() + 1,
      date = today.getDate(),
      hour = today.getHours(),
      minutes = today.getMinutes(),
      seconds = today.getSeconds();
  
    return `${month}/${date}/${year} ${hour}:${minutes}:${seconds}`;
  }





