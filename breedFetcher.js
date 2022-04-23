const request = require('request');
// const name = process.argv[2];

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(`Failed to request details: ${error}`, null);
      return;
    }
    const data = JSON.parse(body);

    if (data.length === 0) {
      callback(`Failed to find breed ${breedName}`, null);
      return;
    }

    const breed = data[0].description;
    callback(null, breed);

  });
};


module.exports = { fetchBreedDescription };
