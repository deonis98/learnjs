"use strict";

/**
 *  Function Learn
 */

var products = ["Choo Choo Chocolate",
	"Icy Mint",
	"Cake Batter",
	"Bubblegum"];
var hasBubbleGum = [false, false, false, true];

for (var i = 0; i < hasBubbleGum.length; i++) {

	if (hasBubbleGum[i]) console.log(products[i] + " contains bubble gum");

}
console.log('============================');

var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
var output;
var highScore = 0;

for (var i = 0; i < scores.length; i = i + 1) {
	output = "Bubble solution #" + i + " score: " + scores[i];
	console.log(output);

	if (scores[i] > highScore) highScore = scores[i];


}

console.log('Bubbles test:' + scores.length);
console.log('Highest bubble score:' + highScore);

var bestSolutions = []; 
for (var i = 0; i < scores.length; i++) { 
	if (scores[i] == highScore) { 
		bestSolutions.push(i); 
	} 
} 
console.log("Solutions with the highest score: " + bestSolutions);

