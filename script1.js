
var cards = ["br12", "br13", "br21", "br23", "br31", "br32", "br11", "br22", "br33", "rb12",
        "rb13", "rb21", "rb23", "rb31", "rb32", "rb11", "rb22", "rb33", "bb11", "rr11"];
var fullDeck = [];
var deck = [];
var hand = [];
var inspectCard=0;
var playArea = [];
var discardPile = [];
var currentCard = 'XbX3';
buildDeck(cards);
var dealCheck = 0;

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
        if(dealCheck == 0) {
        deck = shuffleArray(fullDeck);
           drawCards();
           drawCards();
           drawCards();
           drawChecker = 0;
        var button = document.getElementById("deal");
        button.className = 'btn btn-warning btn-lg disabled';
        dealCheck = 1
        } 
    }
var drawChecker = 0;    
function drawCheck() {
    if(drawChecker == 0) {
        drawCards();
    var button = document.getElementById("draw");
    button.className = 'btn btn-danger btn-lg disabled';
    } else {
        var button = document.getElementById("draw");
    button.className = 'btn btn-danger btn-lg disabled';
    }
}   

//deal one card to player and remove from shuffled Deck
// var hand = [];
function drawCards(){
    returnCard();
    if(fullDeck.length > 0 && inspectCard == 0) {
    for (var i = 0; i < 1; i++) {
    
    hand.push(deck[i].toString() + count.toString());
    showHand();
    
    
    
    deck.splice(deck[i], 1);
      }
    drawChecker++; 
        // document.getElementById("deck").innerHTML = deck.toString();
  }

}

function endTurn(){
    if(hand.length < 4) {
    returnCard();
    drawChecker = 0;
    var button = document.getElementById("draw");
    button.className = 'btn btn-danger btn-lg';
} else {
    alert('discard or play card before ending turn');
}

}


var count=1;
function showHand(){

        for (var i = 0; i < 1; i++) {
        var button = document.createElement("button");
        //assign each button an ID. ID will be the card's name and a counter value
        var cardId = deck[i].toString() + count.toString();
        
        button.setAttribute("id", cardId);
        //assign an onclick attribute to each button. playCard(cardName);
        //See the playCard function below
        button.setAttribute("onclick", "lookCard('"+ cardId +"');");
        // button.className = 'btn btn-primary btn-lg';
        buildCard(button, cardId);
        
        // button.innerHTML = deck[i].toString();
        var handArea = document.getElementById('handArea');
        handArea.appendChild(button);
        
        count++;
        }
}

function buildCard(button, cardId) {
        var firstColor = cardId.charAt(0);
        var firstNumber = cardId.charAt(2);
        var secondColor = cardId.charAt(1);
        var secondNumber = cardId.charAt(3);
        if (firstColor == 'b') {
        button.className = 'blackCard';
        button.innerHTML = firstNumber.toString() + secondNumber.toString(); 
} else {
        button.className = 'redCard';
        button.innerHTML = firstNumber.toString() + secondNumber.toString();    
        }
}





//function that will execute when a card is clicked
function lookCard(cardId){
  //pop up that allows player to confirm discard / RETURN / play
  returnCard();
  if (inspectCard === 0) {
    if (currentCard.charAt(1) == cardId.charAt(0) && currentCard.charAt(3) == cardId.charAt(2)) {
  var buttonPlay = document.createElement("button");
    buttonPlay.setAttribute("onclick", "playCard('"+cardId+"');");
    buttonPlay.innerHTML = 'Play';
    buttonPlay.className = 'btn btn-primary btn-lg btn-info';
    buttonPlay.setAttribute("id", "playButton");
  var inspectArea = document.getElementById("inspectArea");
    inspectArea.appendChild(buttonPlay);
    } else {
  var buttonPlay = document.createElement("button");
    buttonPlay.setAttribute("onclick", "playCard('"+cardId+"');");
    buttonPlay.innerHTML = 'Play';
    buttonPlay.className = 'btn btn-primary btn-lg btn-info disabled';
    buttonPlay.setAttribute("id", "playButton");
  var inspectArea = document.getElementById("inspectArea");
    inspectArea.appendChild(buttonPlay);
    }
  var buttonDiscard = document.createElement("button")
    buttonDiscard.setAttribute("onclick", "discardCard('"+cardId+"');");
    buttonDiscard.innerHTML = 'Discard';
    buttonDiscard.className = 'btn btn-primary btn-lg btn-info';
    inspectArea.appendChild(buttonDiscard);
  var buttonReturn = document.createElement("button")
    buttonReturn.innerHTML = 'Return';
    buttonReturn.className = 'btn btn-primary btn-lg btn-info';
    buttonReturn.setAttribute("onclick", "returnCard();");
    inspectArea.appendChild(buttonReturn);
    inspectCard++;
    }
    


}

function playCard(cardId){
  if (currentCard.charAt(1) == cardId.charAt(0) && currentCard.charAt(3) == cardId.charAt(2)) {
  
  var selected = hand.indexOf(cardId);
  hand.splice(selected, 1); 
  playArea.push(cardId);
  var parent = document.getElementById("handArea");
  var child = document.getElementById(cardId);
  parent.removeChild(child);
  showPlay(cardId);
  returnCard();
  currentCard = cardId.toString();
  
} 
}

function showPlay(cardId){
    
        var playCardId = cardId.toString();
        var button = document.createElement("button");
        var playArea = document.getElementById('playArea');
        playArea.appendChild(button);
        button.setAttribute("id", playCardId);
        // button.className = 'btn btn-lg btn-success';
        // button.innerHTML = cardId.toString();
        buildCard(button, cardId);
       
}


function discardCard(cardId){
  var selected = hand.indexOf(cardId);
  hand.splice(selected, 1);
  discardPile.push(cardId.substring(0, 4));
   var parent = document.getElementById("handArea");
  //Then, define the "child" (aka card) that you would like to remove from
  //the parent area.
  var child = document.getElementById(cardId);
  //Now, tell the parent element (handArea) to find the child and remove it.
  parent.removeChild(child);
  returnCard();
}

function returnCard() {
  var returnCard = document.getElementById('inspectArea');
  returnCard.innerHTML = '';
  inspectCard=0;
  }


