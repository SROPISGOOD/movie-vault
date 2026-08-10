let movies = JSON.parse(localStorage.getItem("movies")) || [];

const moviesDiv = document.getElementById("movies");

function saveMovies() {
    localStorage.setItem("movies", JSON.stringify(movies));
}

function renderMovies() {
    moviesDiv.innerHTML = "";

    movies.forEach((movie, index) => {
        moviesDiv.innerHTML += `
        <div class="movie">
            ${movie.poster ? `<img src="${movie.poster}" alt="${movie.title}">` : ""}
            <h2>${movie.title}</h2>

            <p><strong>Release:</strong> ${movie.release}</p>
            <p><strong>Budget:</strong> ${movie.budget}</p>
            <p><strong>Collection:</strong> ${movie.collection}</p>
            <p><strong>IMDb:</strong> ${movie.imdb}</p>
            <p><strong>Audience:</strong> ${movie.audience}</p>
            <p><strong>Runtime:</strong> ${movie.runtime}</p>
            <p><strong>Cast:</strong> ${movie.cast}</p>
            <p><strong>Director:</strong> ${movie.director}</p>

            <div class="actions">
                <button onclick="deleteMovie(${index})">Delete</button>
            </div>
        </div>
        `;
    });
}

function addMovie() {

    const movie = {
        poster: document.getElementById("poster").value,
        title: document.getElementById("title").value,
        release: document.getElementById("release").value,
        budget: document.getElementById("budget").value,
        collection: document.getElementById("collection").value,
        imdb: document.getElementById("imdb").value,
        audience: document.getElementById("audience").value,
        runtime: document.getElementById("runtime").value,
        cast: document.getElementById("cast").value,
        director: document.getElementById("director").value
    };

    if(movie.title === ""){
        alert("Enter Movie Title");
        return;
    }

    movies.push(movie);

    saveMovies();

    renderMovies();

    document.querySelectorAll("input").forEach(input => input.value = "");
}

function deleteMovie(index){

    movies.splice(index,1);

    saveMovies();

    renderMovies();

}

renderMovies();
