console.log('main.js is working');
console.log($);

$(document).ready(function () {
    var source = $('#template-movie-card').html();
    var template = Handlebars.compile(source);
    
    //test
    var context = {
        title: "titolo",
        title_or: "titolo2",
        language: "lingua",
        vote: "voto"
    }

    $('.main-content').append(template(context))
});