"use strict";
var person={
    ime: "",
    prezime: ""
}
function newJoke() {
    //    $.get("https://api.chucknorris.io/jokes/random", function(data) {
    //        var html = "<p>" + data.value + "</p>";
    //        $(".joke").empty();
    //        $(".joke").append(html);
    //        $(".ChuckNorrisImg .immage").attr("src","http://lorempixel.com/400/200/sports/");
    //    });

    $.ajax({
        method: "GET",
        url: "http://api.icndb.com/jokes/random",
        data: {
            "firstName": person.ime,
            "lastName": person.prezime
        }
    }).done(function (data) {
        var html = "<p>" + data.value.joke + "</p>";
        $(".joke").empty();
        $(".joke").append(html);
    });
}
$(function () {
    $(".data-wrapper").show();
    $(".general").hide();
    $(".joke-wrapper").hide();
    $(".start").on("click", function () {
        $(".general").show();
    });

    $(".save").on("click", function () {
        person.ime = $("#ime-input").val();
        person.prezime = $("#prezime-input").val();

        if (ime !== "" && prezime !== "") {
            $("#ime")[0].innerHTML = person.ime;
            $("#prezime")[0].innerHTML = person.prezime;
            $(".data-wrapper").hide();
            $(".joke-wrapper").show();
        } else {
            alert("Nesto ne ti e popolneto!");
        }
    });

    $(".get-joke").on("click", newJoke);
});


