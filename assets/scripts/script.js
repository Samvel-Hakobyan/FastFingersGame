
function play() {
  let secondText = document.getElementById('textTwo')
  let text = document.getElementById('text')
  text.style.display = 'none'
  secondText.style.display = 'block'
}

function startTimerTrain() {
  let secondText = document.getElementById('textTwo')
  let keyboard = document.getElementById('keyboard')
  let rocket = document.getElementById('rocket')
  secondText.style.display = 'none'
  rocket.style.display = 'none'
  var timerElement = document.getElementById('timer');
  var duration = 3;

  var timer = setInterval(function() {
      timerElement.textContent = duration;

      if (duration <= 0) {
          clearInterval(timer);
          keyboard.style.display = 'block'
          timerElement.style.display = 'none'
          keyGame()
      }

      duration--;
  }, 50);
}



let elements = document.querySelectorAll('li');
let keys = []
elements.forEach((li)=>{
if (li.hasAttribute('id')){
  keys.push(li.id)
}
})

const timestamps = [];

timestamps.unshift(getTimestamp());

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomKey() {
let a = keys[getRandomNumber(0, keys.length-1)]
return a
}


const fingers = {
  'red': 'finger_1',
  'orange': 'finger_2',
  'darkGreen': 'finger_3',
  'blue': 'finger_4',
  'darkBlue': 'finger_5',
  'lowBlue': 'finger_6',
  'yellow': 'finger_7',
  'lowGreen': 'finger_8'
};
function handShow() {
  let keys = document.getElementById("keys")
  var div = document.getElementById("myDiv");
  if (div.style.display === "none") {
    div.style.display = "flex";
    keys.style.marginTop = "0px"
  } else {
    div.style.display = "none";
    keys.style.marginTop = "100px"
  }
}

function targetRandomKey() {
 
let key = document.getElementById(getRandomKey());
key.classList.add("selectedKey");

const fingerClass = key.classList[0];
const fingerId = fingers[fingerClass];

if (fingerId) {
  document.getElementById(fingerId).style.display = 'block';
}

console.log(key)
}

function getTimestamp() {
return Math.floor(Date.now() / 1000)
}

function keyGame() {
document.addEventListener("keyup", event => {

const keyPressed = event.keyCode;
const keyElement = document.getElementById(keyPressed);
const highlightedKey = document.querySelector(".selectedKey");

keyElement.classList.add("hit")
keyElement.addEventListener('animationend', () => {
  keyElement.classList.remove("hit")
})

const keyId = parseInt(highlightedKey.id.replace(/[^\d]/g, ''))
if (keyPressed === keyId) {

  const fingerClass = highlightedKey.classList[0];
  const fingerId = fingers[fingerClass];
  if (fingerId) {
    document.getElementById(fingerId).style.display = 'none';
  }

  const soundTrue = document.getElementById('soundTrue')
  soundTrue.currentTime = 0;
  soundTrue.play();
  highlightedKey.classList.remove("selectedKey");
  targetRandomKey()
} else{
  const soundWrong = document.getElementById('soundWrong')
  soundWrong.currentTime = 0;
  soundWrong.play();
}

})
}
var toggleButton = document.getElementById('vol');
const soundTrue = document.getElementById('soundTrue')
const soundWrong = document.getElementById('soundWrong')
var isMuted = false;

toggleButton.addEventListener('click', function() {
if (isMuted) {
  soundTrue.muted = false;
  soundWrong.muted = false; 
  toggleButton.src = 'assets/img/mute.png'
  isMuted = false;
} else {
  soundTrue.muted = true;
  soundWrong.muted = true;
  toggleButton.src = 'assets/img/Speaker_Icon.svg.png';
  isMuted = true;
}
});

// function backButton() {
// let secondText = document.getElementById('textTwo')
// let keyboard = document.getElementById('keyboard')
// let rocket = document.getElementById('rocket')
// keyboard.style.display = 'none'
// secondText.style.display = 'block'
// rocket.style.display = 'block'

// const noneKey = document.getElementsByClassName("selectedKey")
// for (let key of noneKey) {
//   key.classList.remove('selectedKey')
// }
// console.log(noneKey)
// }


function startTimerWords() {
  let secondText = document.getElementById('textTwo')
  let wordsTrain = document.getElementById('game')
  let rocket = document.getElementById('rocket')
  secondText.style.display = 'none'
  rocket.style.display = 'none'
  var timerElement = document.getElementById('timer');
  var duration = 3;

  var timer = setInterval(function() {
      timerElement.textContent = duration;

      if (duration <= 0) {
          clearInterval(timer);
          wordsTrain.style.display = 'block'
          timerElement.style.display = 'none'
          gameWord()
      }

      duration--;
  }, 50);
}






let infoText = document.getElementById('random-word')
let highScore = document.getElementById('high-score')
let timeEl = document.getElementById('game-count')
let scoreEl = document.getElementById('your-score')
let gamOver = document.getElementById('game-over')
let game = document.getElementById('game')
let finalScore = document.getElementById('final-score')

function randomWord() {
  let i = Math.floor(Math.random()*words.length)
  return words[i]
}
let words = [ 'թշնամի', 'դիմակ', 'նորածին', 'թերակ', 'վաղաժամ', 'տերև', 'աշխատավարձ', 'կազմակերպություն', 'երեք', 'արցունք', 'դեղին', 'համալիր', 'շուն', 'վերջին', 'խոսք', 'ապարանակ', 'աղետ', 'անգամ', 'թափահարին', 'նվագարան', 'շուրջ', 'շրջան', 'գալարվել', 'ուլիս', 'թավարան', 'կահույք', 'մուլտի', 'արեւ', 'մոլորակ', 'խորշունջ', 'վերանորոգում', 'պահեստ', 'բարի', 'գանգատ', 'մասնակցություն', 'մեծամոր', 'սկավառակ', 'ամբողջ', 'նախապատրաստ','պատուհան', 'թելիք', 'պատուհան', 'դասավանդող', 'լուսաբանում', 'գույք', 'խանգարում', 'գործակալ', 'մայրաքաղաք', 'պատուհան', 'դիմակ', 'դասավանդություն', 'սրահ', 'հեռուստացույց', 'գարուն', 'սուրբ', 'պատուհան', 'վերանորոգում', 'կերպար', 'թողարկում', 'բնակարան', 'ականջ', 'ավագ', 'կարիճ', 'գործ', 'հասարակական', 'բնակություն', 'սրտում', 'թերապիլում', 'դուռ', 'գլխավոր', 'գեղեցիկ', 'մահացու', 'աշուն', 'վայր', 'գիշեր', 'կին', 'վաղաժամ', 'վերաբերում', 'հեղինակ', 'մարզավայր', 'մայր','թանգարան', 'հաճախորդ', 'ապարան', 'հունարեն', 'հավատք', 'գարուն', 'պահապան', 'լուսավազան', 'բնակարան', 'շուն', 'պատահար', 'մարզավայր', 'դպրոց', 'հասարակական', 'արջավազան', 'գույն', 'տներ', 'դեղատան', 'թիրախ']


function gameWord() {
  let time = 5;
  let oneWord;
  let score = 0;
  let hScore;

  if(localStorage.length == 0){
    localStorage.score = 0;
  }
  let num = setInterval(() => {
    if(time>=0){
      time--
      if(time>= 0){
      timeEl.innerHTML = time
    }
    }else {
      clearInterval(num)
      gameOver()
    }
  }, 1000);
  hScore = localStorage.score
  console.log(localStorage)
  oneWord = randomWord()
  infoText.innerHTML = oneWord
  highScore.innerHTML = hScore
  input.onchange = function () {
    if(input.value == oneWord){
      score++
      time +=4
      timeEl.innerHTML = time
      if(score>=hScore){
        hScore = score
        localStorage.score = hScore
        highScore.innerHTML = hScore
    }
      scoreEl.innerHTML = score
      input.value = ""
      oneWord = randomWord()
      infoText.innerHTML = oneWord
    } else {
      input.value = ""
      oneWord = randomWord()
      infoText.innerHTML = oneWord
      time -=2
      if(time>= 0){
        timeEl.innerHTML = time
      }
    }
  }
  
  function gameOver(){
    gamOver.style.display = 'block'
    game.style.display = 'none'
    finalScore.innerHTML = score
  }

}



function startTimerMemory() {
  let secondText = document.getElementById('textTwo')
  let memoryGame = document.getElementById('memory')
  let rocket = document.getElementById('rocket')
  secondText.style.display = 'none'
  rocket.style.display = 'none'
  var timerElement = document.getElementById('timer');
  var duration = 3;

  var timer = setInterval(function() {
      timerElement.textContent = duration;

      if (duration <= 0) {
          clearInterval(timer);
          memoryGame.style.display = 'block'
          timerElement.style.display = 'none'
          cardClick()
      }

      duration--;
  }, 50);
}


let cards = ['Ա', 'Ա', 'Բ', 'Բ', 'Գ', 'Գ', 'Դ', 'Դ', 'Ե', 'Ե', 'Զ', 'Զ', 'Է', 'Է', 'Ը', 'Ը', 'Թ', 'Թ', 'Ժ', 'Ժ', 'Ի', 'Ի', 'Լ', 'Լ', 'Խ', 'Խ', 'Ծ', 'Ծ', 'Կ', 'Կ', 'Հ', 'Հ', 'Ձ', 'Ձ', 'Ղ', 'Ղ'];

cards.sort(function() { return 0.5 - Math.random() });

var toggleBut = document.getElementById('volume');
const soundOn = document.getElementById('soundOpenCard')
var isMuted = false;

toggleBut.addEventListener('click', function() {
if (isMuted) {
  soundOn.muted = false;
  toggleBut.src = 'assets/img/mute.png'
  isMuted = false;
} else {
  soundOn.muted = true;
  toggleBut.src = 'assets/img/Speaker_Icon.svg.png';
  isMuted = true;
}
});

let gameBoard = document.getElementById("game-board");
let flippedCards = [];  // 
let matchedCards = 0;
let lockBoard = false;
let win = document.getElementById('win')
function cardClick() {
  if (lockBoard) return;
  if (this === flippedCards[0]) return;

  this.classList.add("flipped");
  const soundOpenCard = document.getElementById('soundOpenCard')
  soundTrue.currentTime = 0;

  soundOpenCard.play();
  soundTrue.currentTime = 0;

  if (!flippedCards.length) {
    flippedCards[0] = this;

    return;
  }

  if (this.dataset.card === flippedCards[0].dataset.card) {
    matchedCards += 2;
    flippedCards = [];

    if (matchedCards === cards.length) {
      setTimeout(function() {
        memory.style.display = 'none'
        win.style.display = 'flex'
      }, 500);
    }
  } else {
    lockBoard = true;
    setTimeout(function() {
      console.log(this)
      flippedCards[0].classList.remove("flipped");
      this.classList.remove("flipped");
      flippedCards = [];
      lockBoard = false;
    }.bind(this), 500);
  }
  
}
for (var i = 0; i < cards.length; i++) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.dataset.card = cards[i];
  card.addEventListener("click", cardClick);

  let cardInner = document.createElement("div");
  cardInner.classList.add("card-inner");

  let cardFront = document.createElement("div");
  cardFront.classList.add("card-front");
  cardFront.innerText = cards[i];

  let cardBack = document.createElement("div");
  cardBack.classList.add("card-back");
  let imgElement = document.createElement("img");
  imgElement.src = "./assets/img/racket.png";

  cardBack.appendChild(imgElement);

  cardInner.appendChild(cardFront);
  cardInner.appendChild(cardBack);

  card.appendChild(cardInner);

  gameBoard.appendChild(card);
}


function info() {
  let secondText = document.getElementById('textTwo')
  let rocket = document.getElementById('rocket')
  let info = document.getElementById('info')
  secondText.style.display = 'none'
  rocket.style.display = 'none'
  info.style.display = 'block'
}
