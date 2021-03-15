

function sortLetters(word) {
    var letters = [];
   
    // word = ["k", "o", "n", "e", "x" ,"i", "o"];
    
    for(var i = 0; i < word.length; i++) {
        letters.push(word[i]);

    }

    console.log(letters);
    
    letters.sort();
    console.log(letters);

    console.log(letters.join(""));
    
    
    
    

}

sortLetters("konexio");