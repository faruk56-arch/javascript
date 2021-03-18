



// - Créez une fonction `formatDate` qui reçoit en paramètre une string (au format aaaa-mm-jj)
// - La fonction doit renvoyer la date au format jj/mm/aaaa
// - Appelez la fonction et affichez son résultat dans la console



function formatDate (nom) {
   var time = new Date(nom)

   var year =  time.getFullYear();
   var month = time.getMonth() + 1;

   var jour = time.getDate();
   
console.log(  jour + "-" + month + "-" + year );

    
}
formatDate("2020-02-10");




