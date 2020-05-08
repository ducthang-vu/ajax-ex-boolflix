/* FUNCTIONS */
function get_starsArray_score(raw_score) {
    return [1, 2, 3, 4, 5].map(x => x <= Math.ceil(raw_score / 2))
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


function format_overview(overview) {
    return overview ? overview.substring(0, 100) + '...' : 'Trama non disponibile';
}


function printCards(template, product, array_of_objects) {
    array_of_objects.forEach(object => {
        var context = {
            poster_link: object.poster_path,
            title: object.title || object.name,
            title_or: object.original_title || object.original_name,
            language: get_html_lang(object.original_language),
            vote:  get_starsArray_score(object.vote_average),
            product: product,
            overview: format_overview(object.overview),
            active: object.poster_path ? null : ' active '
        };

        $('.main-content-list').append(template(context));
    });
}


function ending_search() {
    if (!$('.main-content-list').html()) {
        $('.failed-message').slideDown();     //failed search notified to user
        $('#search-input').focus();
    } 
    $('#search-input').val('');
}


function gettingMovies(query, template) {
    var links_labels = {
        movie: 'Film',
        tv: 'Serie TV'
    };
    var call_counter = Object.keys(links_labels).length;

    for (const link in links_labels) {
        $.ajax({
        url: "https://api.themoviedb.org/3/search/" + link,
        method: 'GET',
        data: {
            api_key: '1e44d8a8c31825e9df1bd0cab47e61e5',
            query: query,
            language: 'it-IT'
        },
        success: (response) => {
            printCards(template, links_labels[link], response.results);
            if (!--call_counter) ending_search();
            },
        error: () => console.log('API error')
        });
    }
}


function startSearching(userInput, template) {
    $('.main-content-list').empty();    //reset list
    $('.failed-message').hide();    // hide error message
    userInput.trim() ? gettingMovies(userInput, template) : ending_search();
}


/* MAIN */
$(document).ready(function () {
    // Init Handlebars
    var source = $('#template-movie-card').html();
    var template = Handlebars.compile(source);

    // Activating search-button and "enter" key
    $('#search-btn').click(() => startSearching($('#search-input').val(), template));
    $(document).keyup(function(e) { 
        if (e.which == 13 || e.keyCode == 13) startSearching($('#search-input').val(), template);
    });
});
