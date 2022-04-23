const request = require('request');
const name = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${name}`, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  // console.log(error);
  // console.log(body);
  const data = JSON.parse(body);
  // console.log(data);
  if (data.length === 0) {
    console.log("No such breed");
    return;
  }

  console.log(data[0].description);

});

