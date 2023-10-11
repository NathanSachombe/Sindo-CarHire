console.log(1+1);

// Ensure the dom is loaded before doing anything
document.addEventListener('DOMContentLoaded', () => {
	getCars();
  //getCars('audi');
  
})

function renderCars(cars) {
  const container = document.querySelector('.cars');

  // clear the cars container
  //container.innerHTML = '';

  // iterate through each car and append to the dom
  cars.forEach((car) => {
    const carName = document.createElement('button');
    carName.textContent = cars.model;
    carName.classList.add(
      'list-group-item',
      'list-group-item-action'
    );
    carName.addEventListener('click', () => {
      renderCars(cars.model);
    });

    //container.appendChild(carName);
  });
}

// Fetch Request
function getCars(make = 'toyota') {
    fetch(`https://api.api-ninjas.com/v1/cars?limit=10&make=${make}`,  {
        method: 'GET',
        headers: {
            'X-Api-Key': '8z1iHUxwTH21XU0mSBVpDQ==4047Fe2H0dOtTZWc'
        },
        })
      .then(response => response.json())
      .then(result => renderCars(result))
      .catch(error => console.log('error', error));
    }

    //const makeDropDown = document.getElementById("makeDropDown")



    
    
