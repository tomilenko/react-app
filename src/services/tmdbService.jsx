require('isomorphic-fetch');

const endpoint = 'https://api.themoviedb.org/3/';
const apiKey = 'ec100598eff80eb95917837627303bb3';
// const options = {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json'
//     }
//   }

function discoverMovies() {
  let url = `${endpoint}discover/movie?api_key=${apiKey}`;
  return fetch(url).then(function(response) {
    if (response.status >= 400) {
        throw new Error("Bad response from server");
    }
    return response.json();
  }).then(function(stories) {
      return stories.results;
  });
};

module.exports = {
  discoverMovies
}