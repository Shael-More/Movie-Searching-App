const APIURL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI =
  'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';

const movie_box = document.querySelector('#movie-container');

const getMovies = async (api) => {
  const response = await fetch(api);
  const data = await response.json();
  console.log(data);
  showMovies(data.results);
};

const showMovies = (data) => {
  movie_box.innerHTML = '';
  data.forEach((item) => {
    const box = document.createElement('div');
    box.classList.add('box');
    box.innerHTML = `
               <img src="${IMGPATH + item.poster_path}"
                   alt="movie poster" />
                  <div class="info">
                      <h2>${item.original_title}</h2>
                      <span><i class='bx bxs-star'></i>${
                        item.vote_average
                      }</span>
                  </div>
          `;

    movie_box.appendChild(box);
  });
};

document.querySelector('#search').addEventListener('keyup', (e) => {
  if (e.target.value != null) {
    getMovies(SEARCHAPI + e.target.value);
  } else {
    getMovies(APIURL);
  }
});
// init call
getMovies(APIURL);
