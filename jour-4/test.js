// - Créer une fonction `sortLetters` qui reçoit une string en paramètre
// - La fonction retourne une string avec les mêmes lettres, dans l'ordre alphabétique
// - Appelez votre fonction avec "konexio" comme argument et vérifiez que vous obtenez "eiknoox"


function sortLetters(word) {
    console.log(word);

    var letters = [];

    for(var i = 0; i < word.length; i++) {
        letters.push(word[i]);

    }

    console.log(letters);



    letters.sort();
    console.log(letters);

    console.log(letters.join(""));
}


sortLetters("konexio");