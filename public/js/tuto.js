
let x = 5;
let y = 50;

// alert('x contient ' + x +
//     '\n y contient ' + y
// )

/*alert(`x contient ${x}
y contient ${y}
Leur somme vaut ${ x + y}
`)*/

function multiplication(nombre1, nombre2){
    //Attention : les "+" sont utilisés pour la concaténation !
    /*return nombre1 + ' * ' + nombre2 + ' = ' + (nombre1 * nombre2);*/
    return `${nombre1}*${nombre2} =  ${nombre1 * nombre2}`;
}

let alerte = function () {alert('Les fonctions anonymes');};

// alerte();

/*(function () {alert('coucou')})();*/

/*
alert(multiplication(5,10))*/

/*let pierre = {
    //nom, age et mail sont des propriétés de l'objet "pierre"
    nom : ['Pierre', 'Giraud'],
    age : 29,
    mail : 'pierre.giraud@edhec.com',

    bonjour: function(){
        alert(`Bonjour,  je suis ${this.nom[0]},  j'ai ${this.age} ans`);
    }
};

pierre.bonjour();*/

function Utilisateur(nom, age, mail)
{
    this.nom = nom;
    this.age = age;
    this.mail = mail;

    // this.bonjour = function(){
    //     alert(`Bonjour, je suis ${this.nom[0]}, j'ai  ${this.age} ans et mon email est: ${this.mail}`);
    // }
}

Utilisateur.prototype.taille = 170;
Utilisateur.prototype.bonjour = function(){
    alert(`Bonjour, je suis ${this.nom[0]}, j'ai  ${this.age} ans et mon email est: ${this.mail}`);
};

let pierre = new Utilisateur(['Pierre', 'Giraud'], 29, 'pierre.giraud@edhec.com');
let mathilde = new Utilisateur(['Math', 'Ml'], 27, 'math@edhec.com');
let florian = new Utilisateur(['Flo', 'Dchd'], 29, 'flo.dchd@gmail.com');

//console.log(Utilisateur.prototype);

// console.log(pierre)


//
// function Ligne(longueur){
//     this.longueur = longueur;
// }
//
// Ligne.prototype.taille = function(){
//     document.getElementById('p1').innerHTML = 'Longueur : ' + this.longueur
// };
//
// function Rectangle(longueur, largeur){
//     Ligne.call(this, longueur);
//     this.largeur = largeur;
// }
//
// Rectangle.prototype = Object.create(Ligne.prototype);
// Rectangle.prototype.constructor = Rectangle;
//
// Rectangle.prototype.aire = function(){
//     document.getElementById('p2').innerHTML =
//         'Aire : ' + this.longueur * this.largeur
// };
//
// function Parallelepipede(longueur, largeur, hauteur){
//     Rectangle.call(this, longueur, largeur);
//     this.hauteur = hauteur;
// }
//
// Parallelepipede.prototype = Object.create(Rectangle.prototype);
// Parallelepipede.prototype.constructor = Parallelepipede;
//
// Parallelepipede.prototype.volume = function(){
//     document.getElementById('p3').innerHTML =
//         'Volume : ' + this.longueur * this.largeur * this.hauteur
// };
//
// let geo = new Parallelepipede(5, 4, 3);
//
// geo.volume();
// geo.aire();
// geo.taille();



// class Ligne
// {
//     /*Nous n'avons pas besoin de préciser "function" devant notre constructeur
//      *et nos autres méthodes classe*/
//     constructor(nom, longueur)
//     {
//         this.nom = nom;
//         this.longueur = longueur;
//     }
//
//     taille()
//     {document.getElementById('p1').innerHTML +=
//         'Longueur de  ' + this.nom + ' : ' + this.longueur + '<br>'
//     };
// }
//
// let geo1 = new Ligne('geo1', 10);
// let geo2 = new Ligne('geo2', 5);
// geo1.taille();
// geo2.taille();
//
// class Rectangle extends Ligne
// {
//     constructor(nom, longueur, largeur)
//     {
//         super(nom, longueur); //Appelle le constructeur parent
//         this.largeur = largeur;
//     }
//
//     aire()
//     {document.getElementById('p2').innerHTML +=
//         'Aire de ' + this.nom + ' : ' + this.longueur * this.largeur + '<br>'
//     };
// }
//
// let geo3 = new Rectangle('geo3', 7, 5);
// geo3.aire();
// geo3.taille();




// let prenom = 'Pierre';
//
// //bio() a accès à let prenom (et à let age) mais pas à let hobbie
// function bio(){
//     let age = 29;
//     //hobbies() a accès à let prenom et à let age (et à let hobbie)
//     function hobbies(){
//         let hobbie =  'Trail';
//         return prenom + ', ' + age + ' ans. Je fais du ' + hobbie;
//     }
//     return hobbies();
// }
//
// // Décommentez le code pour l'exécuter
// alert(bio());

// setTimeout(alert, 5000, 'Message affiché après 5 secondes');


