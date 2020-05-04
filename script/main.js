console.log('main.js is working');
console.log($);


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
            response.results.forEach(movie => {
                var context = {
                    title: movie.title,
                    title_or: movie.original_title,
                    language: movie.original_language,
                    vote: movie.vote_average
                };

                $('.main-content-list').append(template(context));
            });
        },
        error: () => console.log('API error')
    });
}


$(document).ready(function () {
    // Init Handlebars
    var source = $('#template-movie-card').html();
    var template = Handlebars.compile(source);

    // Activating search-button
    $('#search-btn').click(() => {
        var userInput = $('#search-input').val();
        if (userInput.trim()) {
            $('.main-content-list').children().remove();
            gettingMovies(userInput, template);
            $('#search-input').val('');
        }
    })
});