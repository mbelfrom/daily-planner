
$(document).ready(function() {

    setInterval(function () {
    //Date -> Class -> Function Constructor 
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

$(".time-block").each(function Output() {
    console.log(this);
    const date = new Date();
    const hour = date.getHours();
    const id = $(this).attr("id");
    id.split(".").pop();
    if (id < date.getHours) {

    }
    

    if(data[id]) {
        $(this).find("textarea").val(data[id]);
        
        
    }

});
const userDescriptionInput = document.querySelector("#description");
const saveButton = document.querySelectorAll(".saveBtn");

saveButton.addEventListener("click", function() {

//Create user object for submission 
    const notes = $(this).siblings(".description").val()
    const numHr = $(this).parent().attr("id")
    
    localStorage.setItem(numHr, notes)
    
    }
)
    document.getElementById("description").innerHTML = localStorage.getItem();
//Submission to local storage

console.log(localStorage.setItem(userDescriptionInput))

    timeBlocks.forEach(function(hour) {
        if(hour === date.getHours()) {
            $("textarea").addClass("bg-success");

        } else if(hour < dat.getHours()) {
            $("textarea").addClass("bg-secondary")

        } else {
            

        }
    });
});