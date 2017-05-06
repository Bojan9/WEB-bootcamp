var vlez = document.getElementById("vlez");
var kopce= document.getElementById("presmetaj");
var izlez= document.getElementById("izlez");
var znak = false;

function presmetaj (){



    var vrednost = vlez.value;

    console.log(vrednost);

    var rezultat = eval(vrednost);

    console.log(rezultat);

    izlez.value = rezultat;
}

function vnesi(broj){

    if( broj == '+' || broj == '-'){
        if(znak){
        }
        else{
            znak = true;
            vlez.value = vlez.value + broj;
        }
    }
    else{
        znak=false;
        vlez.value = vlez.value + broj;

    }



    console.log(broj);

}
