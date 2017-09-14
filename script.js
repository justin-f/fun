
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
        var cardID = deck[i].toString() + count.toString()
        button.setAttribute("id", cardID);
        //assign an onclick attribute to each button. playCard(cardName);
        //See the playCard function below
        button.setAttribute("onclick", "lookCard('"+ cardID +"');")
        button.className = 'btn btn-primary btn-lrg';
        button.innerHTML = deck[i].toString();
        var handArea = document.getElementById('handArea');
        handArea.appendChild(button);
        count++;
        }
}

//function that will execute when a card is clicked
function lookCard(cardID){
  //pop up that allows player to confirm discard / RETURN / play
  
  if (inspectCard === 0) {
  var buttonPlay = document.createElement("button");
  buttonPlay.setAttribute("onclick", "playCard('"+cardID+"');");
  buttonPlay.innerHTML = 'Play';
  buttonPlay.className = 'btn btn-primary btn-lrg col-xs-4';
  var inspectArea = document.getElementById("inspectArea");
  inspectArea.appendChild(buttonPlay);
  var buttonDiscard = document.createElement("button")
  buttonDiscard.setAttribute("onclick", "discardCard('"+cardID+"');");
  buttonDiscard.innerHTML = 'Discard';
  buttonDiscard.className = 'btn btn-primary btn-lrg col-xs-4';
  inspectArea.appendChild(buttonDiscard);
  var buttonReturn = document.createElement("button")
  buttonReturn.innerHTML = 'Return';
  buttonReturn.className = 'btn btn-primary btn-lrg col-xs-4';
  buttonReturn.setAttribute("onclick", "returnCard();");
  inspectArea.appendChild(buttonReturn);
  inspectCard = 1;
     }
    
}

function playCard(cardID){
   
}
var discardPile = [];


function discardCard(cardID){
  debugger;
  var handArea = document.getElementById('handArea');
  var card = document.querySelector('#cardID');
  handArea.removeChild('card');
  discardPile.push(cardID);
  hand.splice(1);
  returnCard();
}

function returnCard() {
  var returnCard = document.getElementById('inspectArea');
  returnCard.innerHTML = '';
  inspectCard=0;
  }




