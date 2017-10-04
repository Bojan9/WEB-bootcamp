var konji = [
    {
        "ime": 'crni',
        "boja": '#2d221a',
        "broj": 1,
        "brzina": 40,
        "masa": 130,
        "dolzNoze": 45
    },
    {
        "ime": 'belco',
        "boja": '#fd3',
        "broj": 2,
        "brzina": 36,
        "masa": 120,
        "dolzNoze": 39
    },
    {
        "ime": 'bojan',
        "boja": '#343s',
        "broj": 3,
        "brzina": 59,
        "masa": 115,
        "dolzNoze": 43
    },
    {
        "ime": 'aleksandar',
        "boja": '#23s2',
        "broj": 4,
        "brzina": 29,
        "masa": 149,
        "dolzNoze": 55,
    }
]

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
]

var kladilnica = {

    "koeficient": 2,
    "minVlog": 100,
    "maxVlog": 1000000
}

function start() {
    var prethodnaSlika = 0;
    var interval = setInterval(function () {
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
    }, 100)

    function iterator(redenBroj) {
        var i = 0;
        for (i = 0; i < 4; i++) {
            var konj = $($('.konj img')[i]);
            konj.attr('src', '../sliki/k' + i + '_' + redenBroj + '.png');
            konj.css('margin-left', parseInt(konj.css('margin-left')) + Math.floor((Math.random() * 10)));
            if (parseInt(konj.css('margin-left')) >= 425) {
                clearInterval(interval);
            }
        }
    }
}
