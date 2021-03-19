

function sortLetters(word) {
    var letters = [];

    for (var i = 0; i < word.length; i++) {
        letters.push(word[i]);

    }
    console.log(letters);


    letters.sort();
    console.log(letters);


    console.log(letters.join(""));





}

sortLetters("konexio");