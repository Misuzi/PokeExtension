// content_cl.js
// Click List Script

// FUNCTIONS--------------------------------------------------------------------

function interact()
{
  var name = document.getElementsByClassName("headline1");

  if (name[0].innerHTML == "EGG")
  {
    button = document.getElementsByClassName("warmButton");
    button[0].getElementsByTagName("input")[0].click();
  }
  else
  {
    var button = document.getElementsByClassName("train_button");
    button[0].click();
  }
}

(function loop()
{
  var delay = 250 + (Math.floor((Math.random() * 250) + 1));
  setTimeout(function()
    {
      counter_cheat();
      interact();
      loop();
    }, delay);
}());
