
$(document).ready(function() {

    setInterval(function () {
    //
    const date = new Date();
    
    //get month
    const month = date.getMonth() + 1;
    //get the day  (date)
    const day = date.getDate();
    //get year 
const year =  date.getFullYear();


// hour 
const hour = date.getHours();
// get minutes
const minutes = date.getMinutes();

//seconds
const seconds = date.getSeconds();

const formattedTime = `${month}/${day}/${year}/ ${hour}:${minutes}:${seconds}`; 
$("#time").text(formattedTime);
}, 1000);

/* If the time block is in the past the time block 
is gray, if the time block is in the present the color is red, 
if the time block is in the future the color is red. */
const date = NewDate();

$(".time-block").each(function(time) {
    const id = $(this).attr("id");
    const currentHour = parseInt(id.split("-").pop());
    date.getHours();


    if (currentHour === date.getHours()) {
        //  current hour will be have a light background
        //  select only
        $(this).find("textarea").addClass("bg-light text-black");
    } else if (currentHour < date.getHours()) {
        //  past hours will have a red background
        $(this).find("textarea").addClass("bg-warning text-black");
    } else {
        //  future hours will have a green background
        $(this).find("textarea").addClass("bg-success text-black");
    }

    if(data[id]) {
//  input text
        $(this).find("textarea").val(data[id]);
        // saving data on refresh
        }
});
const userDescriptionInput = document.querySelector("#description");
const saveButton = document.querySelectorAll(".saveBtn");

$(".saveBtn").on("click", function (event) {
    event.preventDefault();
//Create user object for submission 
    const notes = $(this).siblings(".description").val()
    const numHr = $(this).parent().attr("id")
    
    localStorage.setItem(numHr, notes)
    
    }
)
    document.getElementById("description").innerHTML = localStorage.getItem(this);
//Submission to local storage

console.log(localStorage.setItem(userDescriptionInput))
});