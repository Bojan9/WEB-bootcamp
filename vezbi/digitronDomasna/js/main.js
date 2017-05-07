var vlez = document.getElementById("vlez");
var kopce= document.getElementById("presmetaj");
var izlez= document.getElementById("izlez");
var presmetki = document.getElementById("presmetki");
var znak = false;
var ednakvo = false;

function presmetaj (){
    ednakvo = true;

    var vrednost = vlez.value;
    var rezultat = eval(vrednost);
    izlez.value = rezultat;

    var pres = vrednost + "=" + rezultat + "<br/>";
    presmetki.innerHTML = presmetki.innerHTML + pres;
}

function vnesi(broj){

    if(ednakvo){

        vlez.value = '';
        ednakvo = false;
    }

    if( broj == '+' || broj == '-' || broj == '*' || broj == '/' || broj == '%' ){

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
}

