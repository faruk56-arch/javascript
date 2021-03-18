
// - Créez une fonction `calculateAge` qui reçoit en paramètre une date au format string (qui sert de date de naissance)
// - La fonction doit calculer l'âge de la personne (en années) née a ce moment là, en fonction de la date d'aujourd'hui
// - Appelez la fonction et affichez son résultat dans la console



function calculateAge(date) {

    var age = new Date();
    var year = age.getFullYear();
    var month = age.getDate();
    console.log(year,month);


}

calculateAge("2021-02")