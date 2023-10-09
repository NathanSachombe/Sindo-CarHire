// Set source URL
let url = "https://api.api-ninjas.com/v1/cars?"

// Fetch Request
fetch("https://api.api-ninjas.com/v1/cars?limit=5&make=audi", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));