var activities = document.querySelector("textarea");
const data = JSON.parse(localStorage.getItem("day-schedule")) || {};

// When page loads
// Find all .time-block elements
$(".time-block").each(function () {
  console.log(this);
  const id = $(this).attr("id");
  // see if you have any data in local storage for each text area
  if (data[id]) {
    // place that text
    console.log(data[id]);
  }
  // apply the class for if the time block is current, in the past, or future
});

$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  // Retrieve the value from the text area
  const val = $(this).siblings("textarea").eq(0).val().trim();
  // retrieve the id from the parent
  const id = $(this).parent().attr("id");
  // add it to our data object
  data[id] = val;
  // save to localstorage
  localStorage.setItem("day-schedule", JSON.stringify(data));
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
