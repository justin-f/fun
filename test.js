var cards = [1, 2, 3, 4, 5];
var deck = [];
var hand = [];

function buildDeck() {
  for(var i = 0; i < cards.length; i++) {
      deck.push(cards[i]);
    }
    return 'OK';
}

function deal() {
    hand.push(deck[0]);
    return hand;
}