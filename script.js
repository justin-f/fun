var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://github.com/justin-f/fun/blob/master/cards.JSON');
ourRequest.onload = function() {
    console.log(ourRequest.responseText);
};

ourRequest.send;