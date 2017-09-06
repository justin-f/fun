
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
      document.getElementById("deck").innerHTML = deck.toString();
        }
}

//deal one card to player and remove from shuffled Deck
var hand = [];
function dealCards(){
    if(fullDeck.length > 0) {
    for (var i = 0; i < 1; i++) {
        
    hand.push(deck[i]);
    var button = document.createElement("button");
    button.className = 'hand';
    button.innerHTML = deck[i];
    deck.splice(deck[i], 1);    
    }
    
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button);
    document.getElementById("deck").innerHTML = deck.toString();
  }
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
