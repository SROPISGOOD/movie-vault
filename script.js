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

            <h2>${movie.title}</h2>

            <p>📅 <strong>Release:</strong> ${movie.release}</p>
            <p>💰 <strong>Budget:</strong> ${movie.budget}</p>
            <p>💵 <strong>Collection:</strong> ${movie.collection}</p>
            <p>⭐ <strong>IMDb:</strong> ${movie.imdb}</p>
            <p>🍿 <strong>Audience:</strong> ${movie.audience}</p>
            <p>⏱️ <strong>Runtime:</strong> ${movie.runtime}</p>
            <p>🎬 <strong>Director:</strong> ${movie.director}</p>

            <div class="actions">
                <button onclick="deleteMovie(${index})">Delete</button>
            </div>

        </div>
        `;
    });
}

function addMovie() {

    const title = document.getElementById("title").value.trim();

    if (title === "") {
        alert("Please enter a movie title.");
        return;
    }

    const movie = {
        title: title,
        release: document.getElementById("release").value,
        budget: document.getElementById("budget").value,
        collection: document.getElementById("collection").value,
        imdb: document.getElementById("imdb").value,
        audience: document.getElementById("audience").value,
        runtime: document.getElementById("runtime").value,
        director: document.getElementById("director").value
    };

    movies.push(movie);

    saveMovies();
    renderMovies();

    document.querySelectorAll(".form input").forEach(input => input.value = "");
}

function deleteMovie(index) {
    movies.splice(index, 1);
    saveMovies();
    renderMovies();
}

renderMovies();
