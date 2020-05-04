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
            console.log(response.results)
            response.results.forEach(movie => {
                var context = {
                    title: movie.title,
                    title_or: movie.original_title,
                    language: movie.original_language,
                    vote: movie.vote_average
                };

                $('.main-content').append(template(context));
            });
        },
        error: () => console.log('API error')
    });
}


$(document).ready(function () {
    var source = $('#template-movie-card').html();
    var template = Handlebars.compile(source);
    
    $('#search-btn').click(() => {
        console.log('btn pressed')
        console.log($('#search-input').val())
        gettingMovies($('#search-input').val(), template)
    })
});