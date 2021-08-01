function compute()
{
    var p = document.getElementById("principal");
    var y = document.getElementById("years");
    var r = document.getElementById("rate");
    if(p.value > 0)
    {
        let i = p.value * y.value * r.value / 100;
        UpcomingYears = new Date().getFullYear() + parseInt(y.value);
        result = document.getElementById("result")
        result.innerHTML = "<p>If you deposit <mark>"+ p.value +"</mark>,<br>at an interest rate of <mark>" + r.value + "%</mark>.<br>You will receive an amount of <mark>"+i+"</mark>,<br>in the year <mark>"+UpcomingYears+"</mark><br><br></p>";
    }
    else
    {
        alert("Amount entered is Incorrect. \nKindly enter a Positive value...!!")
    }
    
}

function changeSlider(){
    document.getElementById("rateValue").innerText = rate.value + "%"
}

