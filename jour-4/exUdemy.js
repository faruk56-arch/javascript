
// const voiture = {
//     marque: 'ford',
//     annee: 2000,
//     color: 'white',
//     rouler() {
//         console.log(this.annee);
//     }
// }

// console.log(Object.keys(voiture));

class Voiture {
    constructor(marque, annee, option) {
        this.marque = marque;
        this.annee = annee;
        this.option = option;
    }
    rajoutOption(nomOption) {
        this.option++;
        console.log(`rajout de ${nomOption}, nombre de option : ${this.option}`);
        return this;
    }
    dateSortie() {
        console.log(`Date de sortie de cette voiture ${this.annee} et le marque est ${this.marque}`);
    }

}
class Moto extends Voiture {
    asssurance() {
        console.log("vous avez pris une assurance");
    }

}

// const voiture1 = new Voiture('ferari', 2002, 'red');
// const voiture2 = new Voiture('marcedez', 2021, "black");
// console.log(voiture1, voiture2);


function persOnage(nom, taille) {
    this.nom = nom;
    this.taille = taille;
    
}
persOnage.prototype.avancer = function(){
    console.log(`${this.nom} avance......`);
}
const pers1= new persOnage('poutine', 1.90);
const pers2= new persOnage('trump', 1.70);
pers1.avancer();
console.log(pers1, pers2);

