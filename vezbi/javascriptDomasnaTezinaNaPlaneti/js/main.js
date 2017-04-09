
var mesecina = 0.2;
var mars = 0.4;
var jupiter = 2.4;

var tezina;


function presmetaj(){
    if(tezina > 0){

        document.getElementById(mesecina).innerHTML = tezina * mesecina;
        document.getElementById(mars).innerHTML = tezina * mars;
        document.getElementById(jupiter).innerHTML = tezina * jupiter;

    }
    else{
        console.log("Ti ne postois");
    }
}
