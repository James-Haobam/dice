let one_score = 0;
let two_score = 0;

document.querySelector('button').addEventListener('click', () => {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  function diceRollOne(){
  if(randomNumber1 === 1){
    document.querySelector('.img1').setAttribute('src','images/dice1.png');
  }
  else if(randomNumber1 === 2){
    document.querySelector('.img1').setAttribute('src','images/dice2.png');
  }
  else if(randomNumber1 === 3){
    document.querySelector('.img1').setAttribute('src','images/dice3.png');
  }
  else if(randomNumber1 === 4){
    document.querySelector('.img1').setAttribute('src','images/dice4.png');
  }
  else if(randomNumber1 === 5){
    document.querySelector('.img1').setAttribute('src','images/dice5.png');
  }
  else if(randomNumber1 === 6){
    document.querySelector('.img1').setAttribute('src','images/dice6.png');
  }
  }
  function diceRollTwo(){

    if(randomNumber2 === 1){
      document.querySelector('.img2').setAttribute('src','images/dice1.png');
    }
    else if(randomNumber2 === 2){
      document.querySelector('.img2').setAttribute('src','images/dice2.png');
    }
    else if(randomNumber2 === 3){
      document.querySelector('.img2').setAttribute('src','images/dice3.png');
    }
    else if(randomNumber2 === 4){
      document.querySelector('.img2').setAttribute('src','images/dice4.png');
    }
    else if(randomNumber2 === 5){
      document.querySelector('.img2').setAttribute('src','images/dice5.png');
    }
    else if(randomNumber2 === 6){
      document.querySelector('.img2').setAttribute('src','images/dice6.png');
    }
  }
  function winDetection(randomNumber1,randomNumber2){
        if(randomNumber1 > randomNumber2 ){
          one_score++;
          document.querySelector('.container h1').innerHTML = "Player 1 wins";
          document.querySelector('.score-sec .p-1').innerHTML = `Player 1 Score: ${one_score}`;
          document.querySelector('.score .p-1').innerHTML = `Score: ${one_score}`;
        }
        else if(randomNumber1 === randomNumber2){
          document.querySelector('.container h1').innerHTML = "Draw";
        }
        else{
          two_score++;
          document.querySelector('.container h1').innerHTML = "Player 2 wins";
          document.querySelector('.score-sec .p-2').innerHTML = `Player 2 Score: ${two_score}`;
          document.querySelector('.score .p-2').innerHTML = `Score: ${two_score}`;
        }
  }
  diceRollOne();
  diceRollTwo();
  winDetection(randomNumber1,randomNumber2);


});
