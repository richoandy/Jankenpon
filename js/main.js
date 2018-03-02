//1 gunting 2 batu 3 kertas
var imported = document.createElement('script');
imported.src = 'js/helper.js';
document.head.appendChild(imported);

var imported2 = document.createElement('script');
imported2.src = 'js/jankenpon.js';
document.head.appendChild(imported2);

var playerLives = 3;
var playerwinCounts = 0;

function play(clickId){
  var player1 = clickId;
  var player2 = switchNumberToWord(getRandomInt(1, 4));
  var satoshiHand = "";
  var fightResult = fightBegin(player1, player2);

  if (player2 === "gunting") {
    satoshiHand = "img/gunting.png";
  }else if(player2 === "batu"){
    satoshiHand = "img/batu.png";
  }else if(player2 === "kertas"){
    satoshiHand = "img/kertas.png";
  }
  document.getElementById("satoshi-hand").src = satoshiHand;
  document.getElementById("satoshi-hand").style.visibility = "visible";

  if ( fightResult === "you wins") {
    playerwinCounts++;
    playerLives++;
    setLivesImage("menang");
    playWinningSoundEffect(playerwinCounts)
    setWinCount(playerwinCounts)
  }else if(fightResult === "rematch"){
    playRematchSoundEffect();
  }else{
    playerLives--;
    playLosingSoundEffect();
    setLivesImage(playerLives);
  }

  if (playerwinCounts === 5) {
    showFinalDialog("win");
  }

  if (playerLives === 0) {
    showFinalDialog("lose");
  }
}

function setLivesImage(playerLives){
  var divLivesLeft = document.getElementById("livesLeft");
  var lives = divLivesLeft.children;
  console.log(lives)
  if (playerLives === "reset") {
    divLivesLeft.innerHTML = "";
    for (var i = 0; i < 3; i++) {
      var img = document.createElement('img');
      img.setAttribute('src', 'img/heart.jpg');
      img.setAttribute('alt', 'lives');
      img.setAttribute('class', 'lives');
      divLivesLeft.appendChild(img);
    }
  }else if(playerLives === "menang"){
    var img = document.createElement('img');
    img.setAttribute('src', 'img/heart.jpg');
    img.setAttribute('alt', 'lives');
    img.setAttribute('class', 'lives');
    divLivesLeft.appendChild(img);
  }
  else{
    for (var i = playerLives; i < lives.length; i++) {
      divLivesLeft.removeChild(lives[i]);
    }
  }
}

function setWinCount(winCount){
  document.getElementById("winCount").innerHTML = "Win Count " + winCount;
}

function reset(){
  playerLives = 3;
  playerwinCounts = 0;
  setWinCount(0);
  setLivesImage("reset"); //tampilkan 3 lives image
  document.getElementById("satoshi-hand").style.visibility = "hidden";
}
