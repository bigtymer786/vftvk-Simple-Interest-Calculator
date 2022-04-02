
function compute(){
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal*years*rate/100;
    var year = new Date().getFullYear()+parseInt(years);
    
        if(principal == ""){
                    alert("Enter a positive number");
                    principal.focus();
                    return false;
                    }
        else{
        document.getElementById("result1").innerHTML = interest;
        document.getElementById("result2").innerHTML= "If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>";
              }
    }
    
    function updateRate() 
    {
        var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText=rateval;
    }    
    
        
