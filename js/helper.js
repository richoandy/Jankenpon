//pop up box
function showRules(){
  document.getElementById("rules").style.visibility = "visible";
  document.getElementById("show-rules-button").disabled = true;

  setTimeout(function(){
    document.getElementById("rules").style.visibility = "hidden"}, 8000);
  setTimeout(function(){
    document.getElementById("show-rules-button").disabled = false;}, 8000);
}

function show(){
  reset();
  document.getElementById("player").style.visibility = "visible";
  document.getElementById("enemy").style.visibility = "visible";
  document.getElementById("lets-play-button").disabled = true;
}

function showFinalDialog(cond) {
  var text = "";
  if (cond === "win") {
    text = "Kamu MENANG ! Main Lagi ?"
  }else{
    text = "Kamu KALAH ! Main Lagi ?"
  }
  setTimeout(function() {
    var r = confirm(text);
    if (r == true) {
      reset();
    } else {
        window.location.href = 'end.html';
    }
  },10)
}
//-----------------------------------------------------------------------------

//sound effect
function playWinningSoundEffect(winCount){
  if (winCount === 1) {
    var snd = new Audio("sound/1.mp3");
    snd.play();
  }else if (winCount === 2) {
    var snd = new Audio("sound/2.mp3");
    snd.play();
  }else if (winCount === 3) {
    var snd = new Audio("sound/3.mp3");
    snd.play();
  }else if (winCount === 4) {
    var snd = new Audio("sound/4.mp3");
    snd.play();
  }else if (winCount === 5) {
    var snd = new Audio("sound/5.mp3");
    snd.play();
  }
}

function playLosingSoundEffect() {
  var randomInt = getRandomInt(1, 4);
  var snd = new Audio("sound/lose"+randomInt+".mp3");
  snd.play();
}

function playRematchSoundEffect(){
  var randomInt = getRandomInt(1, 4);
  var snd = new Audio("sound/rematch"+randomInt+".mp3");
  snd.play();
}
//-----------------------------------------------------------------------------
