function fightBegin(player1, player2){
  if (player1 === player2) {
    return "rematch";
  }else if(player1 === "gunting" && player2 === "batu"){
    return "satoshi wins" ;
  }else if(player1 === "gunting" && player2 === "kertas"){
    return "you wins";
  }else if(player1 === "batu" && player2 === "gunting"){
    return "you wins";
  }else if(player1 === "batu" && player2 === "kertas"){
    return "satoshi wins";
  }else if(player1 === "kertas" && player2 === "gunting"){
    return "satoshi wins";
  }else if(player1 === "kertas" && player2 === "batu"){
    return "you wins";
  }
}

function switchNumberToWord(num){
  switch (num) {
    case 1 :
    num = "gunting";
    break;
    case 2 :
    num = "batu";
    break;
    case 3 :
    num = "kertas";
    break;
  }
  return num;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
