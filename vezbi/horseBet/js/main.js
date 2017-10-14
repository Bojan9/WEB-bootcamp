$('.externalHorses').load('horses.html');

var konji = [
    {
        "ime": 'crni',
        "boja": '#2d221a',
        "broj": 1,
        "brzina": 40,
        "masa": 130,
        "dolzNoze": 45,
        "koeficient": 1.3
    },
    {
        "ime": 'belco',
        "boja": '#fd3',
        "broj": 2,
        "brzina": 36,
        "masa": 120,
        "dolzNoze": 39,
        "koeficient": 1.7
    },
    {
        "ime": 'bojan',
        "boja": '#343s',
        "broj": 3,
        "brzina": 59,
        "masa": 115,
        "dolzNoze": 43,
        "koeficient": 2
    },
    {
        "ime": 'aleksandar',
        "boja": '#23s2',
        "broj": 4,
        "brzina": 29,
        "masa": 149,
        "dolzNoze": 55,
        "koeficient": 2.3
    }
];

var staza = [
    {
        "lenti": 4,
        "dolzina": 1000,
        "podloga": 'zemja'
    },
    {
        "lenti": 4,
        "dolzina": 1500,
        "podloga": 'pesok'
    }
];
//
//var kladilnica = {
//
//    "koeficient": 2,
//    "minVlog": 100,
//    "maxVlog": 1000000
//};



var pocnataTrka = false;



var interval;

function iterator(redenBroj) {
    var i = 0;
    for (i = 0; i < 4; i++) {
        var konj = $($('.konj img')[i]);
        konj.attr('src', '../sliki/k' + i + '_' + redenBroj + '.png');
        konj.css('margin-left', parseInt(konj.css('margin-left')) + Math.floor((Math.random() * 10)));
        if (parseInt(konj.css('margin-left')) >= 425) {
            clearInterval(interval);
            pocnataTrka = false;
            alert('pobedi konjot' + i);
        }
    }
}

function start() {
    pocnataTrka = true;
    var prethodnaSlika = 0;
    interval = setInterval(function () {
        switch (prethodnaSlika) {
        case 0:
            iterator(1);
            break;
        case 1:
            iterator(2);
            break;
        case 2:
            iterator(3);
            break;
        case 3:
            iterator(0);
            prethodnaSlika = -1;
            break;
        }
        prethodnaSlika++;
    }, 100);
}



function reset() {
    for (i = 0; i < 4; i++) {
        var konj = $($('.konj img')[i]);
        konj.attr('src', '../sliki/k' + i + '_0.png');
        konj.css('margin-left', 0);
    }
    pocnataTrka = false;
}

function trka() {
    if (pocnataTrka === true) {

    } else {
        reset();
        start();
    }
}

function kladilnica() {
    var suma = parseInt($('.suma').val());
    var selektiranKonj = parseInt($('.selekcija').val());
    var konj = konji[selektiranKonj];

    var html = "<tr> <td>"+ suma +"</td><td>"+ konj.ime + "</td><td>" + konj.koeficient + "</td><td>"+parseInt(suma * konj.koeficient)+"</td></tr>";


//    console.log(parseInt(parseInt($('.suma').val()) * konji[parseInt($('.selekcija').val())].koeficient));

    $('.rezultati tbody').append(html);


}

function prikaziKonj(redenBroj) {
    $('.infoKonj').hide();
    $('.k' + redenBroj).show();
}
