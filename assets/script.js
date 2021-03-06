
$(document).ready(function () {
    console.log(localStorage);
    setInterval(function () {
        //
        const currentDate = moment().format('dddd, MMMM do');
        const date = new Date();

        //get month
        const month = date.getMonth() + 1;
        //get the day  (date)
        const day = date.getDate();
        //get year 
        const year = date.getFullYear();


        // hour 
        let hour = date.getHours();
        // get minutes
        let minutes = date.getMinutes();

        //seconds
        let seconds = date.getSeconds();
        // var hours = date.getMinutes();
        if (hour > 12) { hour -= 12 }

        // var minutes = date.getMinutes();
        if (minutes < 10) { minutes = `0` + `${minutes}` }

        // var seconds = date.getSeconds();
        if (seconds < 10) { seconds = `0` + `${seconds}` }

        const formattedTime = `${month}/${day}/${year}/ ${hour}:${minutes}:${seconds}`;
        $("#time").text(formattedTime);
    }, 1000);
    // setting the date and time variables
    // const newDate = NewDate();
    const currentHour = moment().hours();
    // parsing info from the html document
    $(".time-block").each(function (time) {
        const id = $(this).attr("id");
        const currentHour = parseInt(id.split("-").pop());
        const date = new Date();
        date.getHours();

        // Background colors will change with corresponding colors
        if (currentHour === date.getHours()) {
            //  current hour will be have a light background
            //  select only
            $(this).find("textarea").addClass("bg-secondary text-black");
        } else if (currentHour < date.getHours()) {
            //  past hours will have a red background
            $(this).find("textarea").addClass("bg-warning text-black");
        } else {
            //  future hours will have a green background
            $(this).find("textarea").addClass("bg-success text-black");
        }

        //     if(data[id]) {
        //  input text
        //         $(this).find("textarea").val(data[id]);
        // Load data on refresh
        // }
    });
    // accessing the local storage 
    const userDescriptionInput = document.querySelector("#description");
    const saveButton = document.querySelectorAll(".saveBtn");

    $(".saveBtn").click(function () {

        //Create user object for submission 
        const notes = $(this).siblings(".description").val()
        const numHr = $(this).parent().attr(".id")

        localStorage.setItem(numHr, notes)

    });

});

