// content_gs.js
// Golden Slot Script

function click_slots()
{
  var current_url = window.location.href;
  anim_check = current_url.split("&");
  if (anim_check.length > 1)
  {
    if (anim_check[1] == "noanim" ||
        anim_check[2].split("#")[0] == "noanim")
    {
      console.log("found!");
      document.getElementById("textbar").getElementsByTagName("center")[0].getElementsByTagName("a")[0].click();
    }

  }


}


// Script
var realConfirm = window.confirm;
window.confirm = function(){
  window.confirm = realConfirm;
  return true;
}
(function() {counter_cheat();});
setTimeout(click_slots, 2000);
