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


const descCard = document.querySelector(".descCard");

descCard.addEventListener('click', function() {
    const descArray = ['a new', 'an old', 'a stinky', 'a red', 'a shiny', 'your favourite', 'a blue', 'a red', 'a yellow', 'a green', 'a purple', 'a pink'];
    shuffle(descArray)
    console.log(descArray[1])

    //print to page

    const descCardRando = document.querySelector('.descCardRando');
    descCardRando.textContent = descArray[1];

      /* Color Generator */

const cardColor = document.querySelector(".descCard");

// color changer

cardColor.style.backgroundColor = `rgb( ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 
${Math.floor(Math.random() * 256)})`
})

const itemCard = document.querySelector(".itemCard");

const pickItemCard = document.querySelector(".itemCard");

pickItemCard.addEventListener('click', function() {
    const objectsArray = ['photo','starts with the letter t','starts with the letter s', 'starts with the letter m', 'utensil', 'candle', 'dice', 'socks', 'book', 'shirt', 'hat', 'crayon', 'toy','starts with the letter r', 'magnet', 'fruit', 'footwear','starts with the letter l', 'picture', 'starts with the letter f', 'pants', 'stuffy', 'game', 'jewelery', 'an animal', 'something heavy', 'something light' ];
    shuffle(objectsArray)
    console.log(objectsArray[1])

         /* Color Generator */

const cardColor = document.querySelector(".itemCard");

// color changer

cardColor.style.backgroundColor = `rgb( ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 
${Math.floor(Math.random() * 256)})`

    //print to page

    const randoItemCard = document.querySelector('.itemCardRando');
    randoItemCard.textContent = objectsArray[1];
})






