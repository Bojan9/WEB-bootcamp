/*var prethodnaSlika = 0;

var interval = setInterval(function () {
     if(prethodnaSlika == 0){
         $('#konj').attr('src','img/k0_1.png');
     }
     if(prethodnaSlika == 1){
         $('#konj').attr('src','img/k0_2.png');
     }
     if(prethodnaSlika == 2){
         $('#konj').attr('src','img/k0_3.png');
     }
     if(prethodnaSlika == 3){
         $('#konj').attr('src','img/k0_0.png');
     }
     prethodnaSlika += 1;
     if(prethodnaSlika == 4){
         prethodnaSlika = 0;
     }

     if(prethodnaSlika == 0){
         $('#konj').attr('src','img/k0_1.png');
     }
     else{
         if(prethodnaSlika == 1){
             $('#konj').attr('src','img/k0_2.png');
         }
         else{
             if(prethodnaSlika == 2){
                 $('#konj').attr('src','img/k0_3.png');
             }
             else{
                 if(prethodnaSlika == 3){
                     $('#konj').attr('src','img/k0_0.png');
                 }
             }
         }
     }
     prethodnaSlika++;
     if(prethodnaSlika == 4){
         prethodnaSlika = 0;
     }
    switch (prethodnaSlika) {
    case 0:
        $('#konj').attr('src', 'img/k0_1.png');
        break;
    case 1:
        $('#konj').attr('src', 'img/k0_2.png');
        break;
    case 2:
        $('#konj').attr('src', 'img/k0_3.png');
        break;
    case 3:
        $('#konj').attr('src', 'img/k0_0.png');
        break;
    case 4:
        prethodnaSlika = 1;
        $('#konj').attr('src', 'img/k0_1.png');
    }
    prethodnaSlika++;

    $('#konj').attr('src', 'img/k0_' + ++prethodnaSlika + '.png');
    prethodnaSlika == 3 ? prethodnaSlika = 0: '';

    $('#konj').attr('src', 'img/k0_' + prethodnaSlika + '.png');
    prethodnaSlika++;
    if(prethodnaSlika == 4){
        prethodnaSlika = 0;
    }
}, 100)*/

var prethodnaSlika = 0;

var interval = setInterval(function(){
    if(prethodnaSlika == 0){
        $('#konj').css('background-position-x', '100px');
    }
    if(prethodnaSlika == 100){
        $('#konj').css('background-position-x', '200px');
    }
    if(prethodnaSlika == 200){
        $('#konj').css('background-position-x', '300px');
    }
    if(prethodnaSlika == 300){
        $('#konj').css('background-position-x', '0px');
    }
    prethodnaSlika += 100;
    if(prethodnaSlika == 400){
        prethodnaSlika = 0;
    }console.log(prethodnaSlika);
},100)
