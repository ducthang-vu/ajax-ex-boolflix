console.log('main.js is working');
console.log($);


/* FUNCTIONS */
function addingStars(raw_score) {
    var score = Math.ceil(raw_score / 2);
    var fullStar = '<i class="fas fa-star"></i>';
    var emptyStar = '<i class="far fa-star"></i>';
    return fullStar.repeat(score) + emptyStar.repeat(5-score);
}


function get_html_lang(iso_code) {
    // A function accepting a iso 639-1 code as a string, and returning the appropriate flag, if stored in the img folder, else returns the string.
    var dict = {
        en: 'en.svg',
        it: 'it.svg'
    };

    var flag = dict[iso_code];
    return flag ? '<img src="img/' + flag + '" alt="flag">' : iso_code;
}


function printCards(template, product, array_of_objects) {
    array_of_objects.forEach(object => {
        var context = {
            title: object.title || object.name,
            title_or: object.original_title || object.original_name,
            language: get_html_lang(object.original_language),
            vote: addingStars(object.vote_average),
            product: product
        };

        $('.main-content-list').append(template(context));
    });
}


function gettingMovies(query, template) {
    var links = ['movie', 'tv']

    links.forEach(link => {
        $.ajax({
        url: "https://api.themoviedb.org/3/search/" + link,
        method: 'GET',
        data: {
            api_key: '1e44d8a8c31825e9df1bd0cab47e61e5',
            query: query,
            language: 'it-IT'
        },
        success: (response) => {
            $('#result-numbers').append(link + ': ' + response.results.length + ' found<br>');
            printCards(template, link, response.results);
            },
        error: () => console.log('API error')
        });
    })

    $('#search-input').val('');
}


function searchingMovies(userInput, template) {
    if (userInput.trim()) {
        $('.main-content-list').empty();
        $('#result-numbers').empty();
        gettingMovies(userInput, template);
    } else {
        alert('You must enter a valid text');
        $('#search-input').val('');
        $('#search-input').focus();
    }
}


/* MAIN */
$(document).ready(function () {
    // Init Handlebars
    var source = $('#template-movie-card').html();
    var template = Handlebars.compile(source);

    // Activating search-button and "enter" key
    $('#search-btn').click(() => searchingMovies($('#search-input').val(), template));
    $(document).keyup(function(e) { 
        if (e.which == 13 || e.keyCode == 13) searchingMovies($('#search-input').val(), template);
        }
    );
});