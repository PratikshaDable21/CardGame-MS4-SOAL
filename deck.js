//The variable suits is an array of card suites that we will use as a lookup table.
// 2nd variable values will hold all the possible values that a card can have.

var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// In order to create the deck, we're going to pair up each suit from the array above, with
// each possible value also from the array declared above. We're going to create a new
// card Object with the corresponding value and suit and that object will be added that to the deck array.

// The getDeck() function will return this brand new deck to the caller.
function getDeck()
{
	var deck = new Array();

	for(var i = 0; i < suits.length; i++)
	{
		for(var x = 0; x < values.length; x++)
		{
			var card = {Value: values[x], Suit: suits[i]};
			deck.push(card);
		}
	}

	return deck;
}

// Shuffle Fuction
function shuffle()
{
	// for 1000 turns
	// switch the values of two random cards
	for (var i = 0; i < 1000; i++)
	{
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}

	renderDeck();
}