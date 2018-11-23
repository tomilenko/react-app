require('isomorphic-fetch');

const URLS = {
  movies: 'discover/movie',
  search: 'search?query='
};

const serviceHelper = {
  endpoint: 'https://api.themoviedb.org/3/',
  apiKey: 'ec100598eff80eb95917837627303bb3',
  makeUrl: (url) => {
    return `${serviceHelper.endpoint}${url}?api_key=${serviceHelper.apiKey}`;
  },
  validate: (res) => {
    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }
    return res.json();
  }
};

module.exports = {
  discoverMovies: () => {
    return fetch(serviceHelper.makeUrl(URLS.movies))
      .then((res) => serviceHelper.validate(res))
      .then((data) => data.results);
  },
  findMovie: (name) => {
    return fetch(serviceHelper.makeUrl(URLS.search + name))
      .then((res) => serviceHelper.validate(res))
      .then((data) => data.results);
  }
};