var vlez = document.getElementById("vlez");
var kopce= document.getElementById("presmetaj");
var izlez= document.getElementById("izlez");
var znak = false;
var presmetki = document.getElementById("presmetki");
var ednakvo = false;

function presmetaj (){
     ednakvo = true;



    var vrednost = vlez.value;

    console.log(vrednost);

    var rezultat = eval(vrednost);

    console.log(rezultat);

    izlez.value = rezultat;

    var pres = vrednost + "=" + rezultat + "<br/>";

    presmetki.innerHTML = presmetki.innerHTML + pres;
}

function vnesi(broj){

    if( ednakvo){
        vlez.value = '';
        ednakvo = false;
    }

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

