// Fetches and returns an array of all the dog breeds as well as sub-breeds
fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(json => console.log(json));

// Fetches and returns an URL for a random image from all breeds
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(json => console.log(json));

// Fetches and returns an URL for a image from a specific breed
fetch('https://dog.ceo/api/breed/hound/images')
  .then(response => response.json())
  .then(json => console.log(json));

// Fetches and returns an array of all sub-breeds for a specific dog breed
fetch('https://dog.ceo/api/breed/hound/list')
.then(response => response.json())
.then(json => console.log(json));