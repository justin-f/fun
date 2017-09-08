
// //create pile of cards
// var cards = ["br12", "br13", "br21", "br23", "br31", "br32", "br11", "br22", "br33", "rb12",
// "rb13", "rb21", "rb23", "rb31", "rb32", "rb11", "rb22", "rb33"];

// //this variable will hold all of the cards at the end
// var fullDeck = [];

// //function that builds deck, will put 10 of each card into fullDeck
// buildDeck(cards);
// function buildDeck(array){
//   //Take the item in the array
//   for (var i = 0; i < array.length; i++) {
//     //loop that item 10 times, add each loop into the deck
//     for (var x=0; x < 10; x++){
//       fullDeck.push(array[i]);
//     }
//   }
// }

// //Algorithm to shuffle the cards from fullDeck (array)
// function shuffleArray(array) {
//     for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     return array;
// }

// //show's the shuffle result on HTML page
// function showShuffle(){
//   //document.getElementById("result").innerHTML = shuffleArray(cards).toString();
//   var deck = shuffleArray(fullDeck);
//   document.getElementById("deck").innerHTML = deck.toString();
// };

// //deal three cards to player
// var hand = [];
// function dealCards(){
//     for (var i = 0; i < 3; i++) {



//     }
//     document.getElementById("hand").innerHTML = hand.toString();
//   }



var cards = ["br12", "br13", "br21", "br23", "br31", "br32", "br11", "br22", "br33", "rb12",
        "rb13", "rb21", "rb23", "rb31", "rb32", "rb11", "rb22", "rb33"];
var fullDeck = [];
var deck = [];
var hand = [];
var inspectCard=0;
buildDeck(cards);


    function buildDeck(array){
         //Take the item in the array
        for (var i = 0; i < array.length; i++) {
            //loop that item 10 times, add each loop into the deck
            for (var x=0; x < 2; x++){
             fullDeck.push(array[i]);
    }
  }
}

    function shuffleArray(array) {

    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;

}


    function showShuffle(){
        if(fullDeck.length === 36) {
      //document.getElementById("result").innerHTML = shuffleArray(cards).toString();
      deck = shuffleArray(fullDeck);
      // document.getElementById("deck").innerHTML = deck.toString();
        }
}

//deal one card to player and remove from shuffled Deck
// var hand = [];
function dealCards(){
    if(fullDeck.length > 0 && inspectCard === 0) {
    for (var i = 0; i < 1; i++) {

    hand.push(deck[i]);
    showHand();
    deck.splice(deck[i], 1);
      }
    // document.getElementById("deck").innerHTML = deck.toString();
  }


}

var count=1;
function showHand(){
        
        for (var i = 0; i < 1; i++) {
        var button = document.createElement("button");
        //assign each button an ID. ID will be the card's name and a counter value
        var cardId = deck[i].toString() + count.toString()
        button.setAttribute("id", cardId);
        //assign an onclick attribute to each button. playCard(cardName);
        //See the playCard function below
        button.setAttribute("onclick", "lookCard('"+ cardId +"');")
        button.className = 'btn btn-primary btn-lrg';
        button.innerHTML = deck[i].toString();
        var handArea = document.getElementById('handArea');
        handArea.appendChild(button);
        count++;
        }
}

//function that will execute when a card is clicked
function lookCard(cardId){
  //pop up that allows player to confirm discard / RETURN / play
  
  if (inspectCard === 0) {
  var buttonPlay = document.createElement("button");
  buttonPlay.setAttribute("onclick", "playCard('"+cardId+"');");
  buttonPlay.innerHTML = 'Play';
  buttonPlay.className = 'btn btn-primary btn-lrg col-xs-4';
  var inspectArea = document.getElementById("inspectArea");
  inspectArea.appendChild(buttonPlay);
  var buttonDiscard = document.createElement("button")
  buttonDiscard.setAttribute("onclick", "discardCard('"+cardId+"');");
  buttonDiscard.innerHTML = 'Discard';
  buttonDiscard.className = 'btn btn-primary btn-lrg col-xs-4';
  inspectArea.appendChild(buttonDiscard);
  var buttonReturn = document.createElement("button")
  buttonReturn.innerHTML = 'Return';
  buttonReturn.className = 'btn btn-primary btn-lrg col-xs-4';
  buttonReturn.setAttribute("onclick", "returnCard();");
  inspectArea.appendChild(buttonReturn);
  inspectCard++;
     }
    
}

function playCard(cardId){
   
}
var discardPile = [];

//HELPPPPPPPPPPPPPPPPPP
function discardCard(cardId){
  var handArea = document.getElementById('handArea');
  discardPile.push(cardId);
  var card = cardId
  hand.splice(1)
  returnCard();
}

function returnCard() {
  var returnCard = document.getElementById('inspectArea');
  returnCard.innerHTML = '';
  inspectCard=0;
  }




/* var cards = [
  {
    "name": "br12",
    "quantity": 10,
    "first": "black1",
    "last": "red2"
},
  {
    "name": "br13",
    "quantity": 10,
    "first": "black1",
    "last": "red3"
},
  {
    "name": "br21",
    "quantity": 10,
    "first": "black2",
    "last": "red1"
},
  {
    "name": "br23",
    "quantity": 10,
    "first": "black2",
    "last": "red3"
},
  {
    "name": "br31",
    "quantity": 10,
    "first": "black3",
    "last": "red1"
},
  {
    "name": "br32",
    "quantity": 10,
    "first": "black3",
    "last": "red2"
},
  {
    "name": "rb12",
    "quantity": 10,
    "first": "red1",
    "last": "black2"
},
  {
    "name": "rb13",
    "quantity": 10,
    "first": "red1",
    "last": "black3"
},
  {
    "name": "rb21",
    "quantity": 10,
    "first": "red2",
    "last": "black1"
},
  {
    "name": "rb23",
    "quantity": 10,
    "first": "red2",
    "last": "black3"
},
  {
    "name": "rb31",
    "quantity": 10,
    "first": "red3",
    "last": "black1"
},
  {
    "name": "rb32",
    "quantity": 10,
    "first": "red3",
    "last": "black2"
}

];

*/
