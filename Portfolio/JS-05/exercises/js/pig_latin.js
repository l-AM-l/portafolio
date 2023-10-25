/*
Pig Latin
*/

function igpayAtinlay(str) {
    // TODO: Initialize the word array properly
    var str = document.getElementById("word").value;
    var returnArray = [],
     // TODO: make sure that the output is being properly built to produce the desired result.
        wordArray = str.split(" ");

    for (var i = 0; i < wordArray.length; i++) {
        var word = wordArray[i];
        var beginning = word.charAt(0);

        if (/[aeiouAEIOU]/.test(beginning)) {
            returnArray.push(word);
        } else {
            for (var ii = 1; ii < word.length; ii++) {
                if (/[aeiouAEIOU]/.test(word.charAt(ii))) {
                    break;
                } else {
                    beginning += word.charAt(ii);
                }
            }
            returnArray.push(word.slice(ii) + beginning + 'ay');
        }
    }

    document.getElementById("pigLatLbl").textContent = returnArray.join(" ");
}