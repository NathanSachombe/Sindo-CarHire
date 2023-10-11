// Ensure the dom is loaded before doing anything
document.addEventListener('DOMContentLoaded', () => {
	getCars();
  
})


// Fetch Request
function getCars(make) {
    fetch(`https://api.api-ninjas.com/v1/cars?limit=5&make=${make}`,  {
        method: 'GET',
        headers: {
            'X-Api-Key': '8z1iHUxwTH21XU0mSBVpDQ==4047Fe2H0dOtTZWc'
        },
        })
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    }
