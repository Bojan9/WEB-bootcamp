console.log("zdravo");
var counter = 1;


function levelUp(){
    console.log("LevlUp");
}

function vmetniTekst(){
  document.getElementById("crvena").innerHTML = "crvena";
  document.getElementsByClassName("zelena")[0].innerHTML = "zelena";
}

function proverka(zgolemuvac){

    if(counter == 1){
        console.log("da eden e");
        counter += zgolemuvac;
    }
    else{
        console.log("ne e eden");
    }
    console.log(counter);
}

function zgolemuvac(){
    var elementValue = parseInt(document.getElementsByClassName("vlez")[0].value);

    counter += elementValue;
    console.log(counter);
}
