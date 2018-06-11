// content_rm.js
// Rumble Mission Script

var numPokemon = 2;

// FUNCTIONS--------------------------------------------------------------------

function retrieveAll()
{
  var retrieve_buttons = document.getElementsByClassName("small_rounded retrieve_screen");
  for (var i = 0; i < numPokemon; i++)
  {
    retrieve_buttons[i].getElementsByTagName("a")[0].click();
  }
}

function resendAll()
{
  var resend_buttons = document.getElementsByClassName("rounded");
  for (var i = 0; i < numPokemon; i++)
  {
    resend_buttons[i].getElementsByTagName("a")[0].click();
  }
}

function resendAll2()
{
  var resend_buttons = document.getElementsByClassName("rounded");
  for (var i = 0; i < numPokemon; i++)
  {
    resend_buttons[i].click();
  }
}

// Script
(function(){counter_cheat();});
setTimeout(retrieveAll, 15000);
setTimeout(resendAll, 30000);
setTimeout(resendAll2, 45000);
setTimeout( function(){window.location.reload(true)}, 360000);
