// Choose a Card for an Object

// shuffler

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


const pickDescCard = document.querySelector(".pickDescCard");

pickDescCard.addEventListener('click', function() {
    const descArray = ['a new', 'an old', 'a stinky', 'a red', 'a shiny', 'your favourite', 'a blue', 'a red', 'a yellow', 'a green', 'a purple', 'a pink'];
    shuffle(descArray)
    console.log(descArray[1])

    //print to page

    const descCardRando = document.querySelector('.descCardRando');
    descCardRando.textContent = descArray[1];
})

const descCard = document.querySelector(".descCard");

const pickItemCard = document.querySelector(".pickItemCard");

pickItemCard.addEventListener('click', function() {
    const objectsArray = ['photo','starts with the letter t','starts with the letter s', 'starts with the letter m', 'utensil', 'candle', 'dice', 'socks', 'book', 'shirt', 'hat', 'crayon', 'toy', 'magnet', 'fruit', 'footwear', 'picture' ];
    shuffle(objectsArray)
    console.log(objectsArray[1])

    //print to page

    const randoItemCard = document.querySelector('.itemCardRando');
    randoItemCard.textContent = objectsArray[1];
})

//card flipper

const card = document.getElementById('card');

card.addEventListener('click', flipCard);
  function flipCard(){
    card.classList.toggle('flipCard')
    console.log('card clicked')
  }

  const cardTwo = document.getElementById('cardTwo');

cardTwo.addEventListener('click', flipCardTwo);
  function flipCardTwo(){
    cardTwo.classList.toggle('flipCardTwo')
    console.log('clicked card 2')
  }