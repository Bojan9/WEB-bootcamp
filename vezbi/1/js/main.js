var vlez = document.getElementById("vlez");
var kopce= document.getElementById("presmetaj");
var izlez= document.getElementById("izlez");

function presmetaj (){

    var vrednost = vlez.value;

    console.log(vrednost);

    var rezultat = eval(vrednost);

    console.log(rezultat);

    izlez.value = rezultat;
}
