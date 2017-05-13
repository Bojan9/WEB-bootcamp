$(function () {
    var visina = window.innerHeight;
    var sirina = window.innerWidth;
    var kocka = $('.kocka');

    function randomMax(visina) {
        var visina = window.innerHeight;
        var sirina = window.innerWidth;
        if (visina) {
            var maxVisina = visina - parseInt(kocka.css('height'));
            return random(maxVisina) + 'px';
        } else {
            var maxSirina = sirina - parseInt(kocka.css('width'));
            return random(maxSirina) + 'px';
        }
    }

    kocka.on('mouseover', function () {
        kocka.animate({
            'top': randomMax(true),
            'left': randomMax(false)
        }, 500)
    })

    kocka.on('click', function () {
        alert('BRAVO');
    })

    kocka.css({
        'top': randomMax(true),
        'left': randomMax(false)
    })
    kocka.show()
})

function random(max) {
    return Math.floor(Math.random() * max) + 1;
}
