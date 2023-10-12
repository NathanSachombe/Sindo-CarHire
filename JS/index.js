console.log(1+1);

// Ensure the dom is loaded before doing anything
document.addEventListener('DOMContentLoaded', () => {
	getCars();
  //getCars('audi');
  
})

// Fetch Request
function getCars(make = 'toyota') {
  fetch(`https://api.api-ninjas.com/v1/cars?limit=5&make=${make}`,  {
      method: 'GET',
      headers: {
          'X-Api-Key': '8z1iHUxwTH21XU0mSBVpDQ==4047Fe2H0dOtTZWc'
      },
      })
    .then(response => response.json())
    .then(result => renderCars(result))
    .catch(error => console.log('error', error));
  }

function renderCars(cars) {
  const container = document.getElementById('cars-container');
  //const container = document.querySelector('cars-container');

  // clear the cars container
  container.innerHTML = '';

  // iterate through each car and append to the dom
  cars.forEach((car) => {
    const carName = document.createElement('button');
    carName.textContent = car.model;
    carName.classList.add(
      'list-group-item',
      'list-group-item-action'
    );
    carName.addEventListener('click', () => {
      renderCars(car.model);
    });

    container.appendChild(carName);
  });
}

// Add click event on search button
function search() {
  const searchButton = document.getElementById('search');
  searchButton.addEventListener('click', () => {
    renderCars(car.model)
  });
}



const textSearch = document.querySelector("#textSearch");
textSearch.addEventListener("keyup", (e) => {
  const make = textSearch.value;
  if (e.keyCode === 13) {
    getCars(make);
  }
});



    
    
