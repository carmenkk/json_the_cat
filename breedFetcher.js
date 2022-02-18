const request = require('request');
const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
request(url, (error,response,body) => {
  if (error) {
    console.log('error:', error);
  } else {
    const data = JSON.parse(body);
    const content = data[0];
    if (content) {
      console.log(content.description);
    } else {
      console.log(`${breedName} can not be found.`);
    }
  }
});

