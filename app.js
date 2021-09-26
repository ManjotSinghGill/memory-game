const play = document.getElementById('play-button');

play.addEventListener('click', () =>{

  play.style.display = 'none';

  const playAgain = document.getElementById('play-again');
  const scoreCard = document.getElementById('scorecard');
  const grid = document.getElementById('grid');
  const resultDisplay = document.querySelector('#result');
  
  var cardsChosen= [];
  var cardsChosenId = [];
  const cardsWon = [];

  playAgain.style.display = 'block';
  scoreCard.style.display = 'block';
  grid.style.display = 'flex';
  
  //cards
  const cardArray = [
    {
      name: 'cheeseburger',
      img: './images/cheeseburger.png'
    },
    {
      name: 'cheeseburger',
      img: './images/cheeseburger.png'
    },
    {
      name: 'fries',
      img: './images/fries.png'
    },
    {
      name: 'fries',
      img: './images/fries.png'
    },
    {
      name: 'hotdog',
      img: './images/hotdog.png'
    },
    {
      name: 'hotdog',
      img: './images/hotdog.png'
    },
    {
      name: 'ice-cream',
      img: './images/ice-cream.png'
    },
    {
      name: 'ice-cream',
      img: './images/ice-cream.png'
    },
    {
      name: 'milkshake',
      img: './images/milkshake.png'
    },
    {
      name: 'milkshake',
      img: './images/milkshake.png'
    },
    {
      name: 'pizza',
      img: './images/fries.png'
    },
    {
      name: 'pizza',
      img: './images/fries.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random());

  //Flip card
  function flipcard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }


  // Check for mataches
  function checkForMatch() {
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]){
      cards[optionOneId].setAttribute('src', 'images/white.png');
      cards[optionTwoId].setAttribute('src', 'images/white.png');
      cards[optionOneId].removeEventListener("click", flipcard); 
      cards[optionTwoId].removeEventListener("click", flipcard);
      cardsWon.push(cardsChosen);
    }
    else {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
    }
    cardsChosen = [];
    cardsChosenId = [];
    if (cardsWon.length == cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations, you found them all!';

    }
    else{
      resultDisplay.textContent = cardsWon.length;
    }
  }


// gameboard
  function createBoard() {
    for(let i = 0; i < cardArray.length; i++){
      var card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipcard);
      grid.appendChild(card);
    }
  } 

createBoard();

})

function reloadPage() {
  window.location.reload();
}