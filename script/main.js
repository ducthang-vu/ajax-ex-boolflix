console.log('main.js is working');
console.log($);


/* FUNCTIONS */
function addingStars(raw_score) {
    var score = Math.ceil(raw_score / 2) 
    var fullStar = '<i class="fas fa-star"></i>'
    var emptyStar = '<i class="far fa-star"></i>'
    return fullStar.repeat(score) + emptyStar.repeat(5-score)
}


function gettingFlag(iso_code) {
    // A function accepting a iso 639-1 code as a string, and returning the appropriate flag, if stored in the img folder, else returns false.
    var dict = {
        en: 'en.svg',
        it: 'it.svg'
    }
    return iso_code in dict ? dict[iso_code] : false
}


function get_html_lang(iso_code) {
    var flag =  gettingFlag(iso_code)
    console.log(flag)
    return flag ? '<img src="img/' + flag + '" alt="flag">' : iso_code
}


function gettingMovies(query, template) {
    $.ajax({
        url: "https://api.themoviedb.org/3/search/movie",
        method: 'GET',
        data: {
            api_key: '1e44d8a8c31825e9df1bd0cab47e61e5',
            query: query,
            language: 'it-IT'
        },
        success: (response) => {
            if (response.results.length) {
                response.results.forEach(movie => {
                    var context = {
                        title: movie.title,
                        title_or: movie.original_title,
                        language: get_html_lang(movie.original_language),
                        vote: addingStars(movie.vote_average)
                    };

                $('.main-content-list').append(template(context));
                $('#search-input').val('');
                });
            } else {
                alert('No movie has been found');
                $('search-input').select();
            }
        },
        error: () => console.log('API error')
    });
}


function searchingMovies(userInput, template) {
    if (userInput.trim()) {
        $('.main-content-list').empty();
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