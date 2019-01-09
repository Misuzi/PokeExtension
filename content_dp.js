// content_dp.js
// Dream Points Script

function claim()
{
    var claim_table = document.getElementById("blue_table");
    var rows = claim_table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

    var cols1 = rows[1].getElementsByTagName("td");
    var button1 = cols1[2].getElementsByTagName("a")[0];
    if (button1 != undefined)
    {
        button1.click();
    }
    var cols2 = rows[2].getElementsByTagName("td");
    var button2 = cols2[2].getElementsByTagName("a")[0];
    if (button2 != undefined)
    {
        button2.click();
    }
    var cols3 = rows[3].getElementsByTagName("td");
    var button3 = cols3[2].getElementsByTagName("a")[0];
    if (button3 != undefined)
    {
        button3.click();
    }
}


// Script
(function(){counter_cheat();});
setTimeout(claim, 5000);
setTimeout( function(){window.location.reload(true)}, 1200000);