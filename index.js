var alphabet = ["abcdefghijklmnopqrstuvwxyz0123456789"];
var morse = [".-", "-...", "-.-.", "-.." ".", "..-.", "--". "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", "-----", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----."];
exports.textToMorse = function(text) {
    var final = "";
    for (var i = 0; i < text.length; i++) {
        for (var q = 0; q < alphabet.length; q++) {
            final += morse[q];
        }
    }
}
exports.morseToText = function(morse) {
  var final = "";
  var finalCode = [];
  var finalCodeText = "";
  for (var i = 0; i < morse.length; i++) {
	for (var q = 0; q < alphabet.length; q++) {
	    if (morse[i] == "." || morse[i] == "-") {
	    	finalCodeText += morse[i];
	    } else if (morse[i] == " ") {
        	finalCode.push(finalCodeText);
	      	finalCodeText = "";
	    }
	}
    }
    for (var i = 0; i < finalCode.length; i++) {
        for (var q = 0; q < morse.length; q++) {
	    if (finalCode[i] == morse[q]) {
	    	final += alphabet[q];
	    }
	}
    }
}
exports.morseAlphabet = morse;
