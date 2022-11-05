class Produits{
    constructor(type, taille, couleur, prixtxt, prix, img) {
    this._typeproduit = type
    this._taille = taille
    this._couleur = couleur
    this._prix = prix
    this._img= img
    this._prixtxt= prixtxt
    }

    }
var gantes= new Produits("gant", "petit", "marron", "30 €",30, "gants.jpeg");
var sacfrappe= new Produits("sac", "petit" ,"marron", "50 €",50, "suuuu.jpg");
var punching= new Produits("ball", "petit", "rouge", "40 €",40, "pb.jpg");
products = [ gantes, sacfrappe, punching]
var mybutton = document.getElementById("topbtn");



window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  function allerenhaut() {
    document.documentElement.scrollTop = 0;
  } 




















function showmenu(){
    var navlinks = document.getElementById("navlinks");
    navlinks.style.right = "0";
    console.log("çamarche")
}

function hidemenu(){
    var navlinks = document.getElementById("navlinks");
    navlinks.style.right = "-200px";
}





fetch("header.html")
    .then(response => response.text())
    .then(response => {
        document.getElementById("header").innerHTML = response;
    })

fetch("footer.html")
    .then(response2 => response2.text())
    .then(response2 => {
        document.getElementById("footer").innerHTML = response2;
    })


















