var sectionPeople = document.getElementById('starwarsPeople');
var modal = document.getElementById('exampleModal');
// Solicitud de datos al API SWAPI
// fetch('https://swapi.co/api/people/')
fetch("https://swapi.co/api/films/")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log('Request successful', data);
    let films = data.results;
    console.log(films);
    getFilms(films);

  })
  .catch(function(error) { //Elemento que despliega en caso de error
    console.log('Request failed', error)
  });


const getFilms = (films) => {
  console.log(films);
  let output = ``;
  films.forEach(function(element, index) {
    let titleFilm = element.title;
    let episodeFilm = element.episode_id;
    let characters = element.characters;
    let arrayFilms = ['./assets/images/movies/episodeIV.jpg',
      './assets/images/movies/episodeII.jpg',
      './assets/images/movies/episodeI.jpg',
      './assets/images/movies/episodeIII.jpg',
      './assets/images/movies/episodeVI.jpg',
      './assets/images/movies/episodeV.jpg',
      './assets/images/movies/episodeVII.jpg'
    ];
    let imageFilms = arrayFilms[index];
    // Plantilla para mostrar los datos
    output +=
      `<div class="card stylePeople" style="width: 13rem;">
        <img class="card-img-top" src=${imageFilms} alt="Card image cap">
        <div>
          <div class="card-body">
            <h4 class="card-title">Title:</h4>
            <h5 class="card-title">${titleFilm}</h5>
            <p class="card-text">Episode: ${episodeFilm}</p>
            <h4 class="card-title">Characters:</h4>
            <a data-detail="${characters[0]}" data-toggle="modal" data-target="#exampleModal">${characters[0]}</a>
            <a data-detail="${characters[1]}"  data-toggle="modal" data-target="#exampleModal">${characters[1]}</a>
            <a data-detail="${characters[2]}"  data-toggle="modal" data-target="#exampleModal">${characters[2]}</a>
          </div>
        </div>
      </div>`

    //Imprime plantilla en HTML
    sectionPeople.innerHTML = output;

    // Obteniendo el arreglo de elementos anchor
    const elementosA = document.getElementsByTagName("a");
    console.log(elementosA);
    console.log(elementosA.length);



    for (let i = 0; i <= elementosA.length - 1; i++) {
      elementosA[i].onclick = function ahora() {
        let urlCharacter = this.getAttribute('data-detail');
        // Haciendo petición con la url obtenida
        fetch(`${urlCharacter}`).then(function(response) {
            return response.json();
          })
          .then(function(dataChar) {
            console.log(dataChar);
            modalInfo(dataChar);
          }).catch(function(errorChar) {
            console.log('Error!!!', errorChar);
          });
      };
    }
  }); //Fin del ForEach de films
} //fin función films

const modalInfo = (output) => {
  // Obteniendo los datos de cada personaje
  let nameChar = output.name;
  let birthChar = output.birth_year;
  let genChar = output.gender;
  let heightChar = output.height;
  let massChar = output.mass;
  let hairChar = output.hair_color;
  let skinChar = output.skin_color;
  let urlChar = output.url;
  console.log(urlChar);
  let arrayNumA = urlChar.charAt(28);
  console.log(typeof(arrayNumA));
  let arrayNumb = urlChar.charAt(29);
  console.log(arrayNumb);

  let arrayNum = urlChar.charAt(28) - 1;
  console.log(arrayNum);
  if (urlChar.charAt(28) === "1" && urlChar.charAt(29) === "0") {
    arrayNum = "9";
  }
  console.log(arrayNum);

  let arrayImage = ['./assets/images/characters/luke.jpg', './assets/images/characters/cp3o.jpg',
    './assets/images/characters/r2d2.jpg', './assets/images/characters/dart.jpg',
    './assets/images/characters/leia.jpg', './assets/images/characters/owen.jpg',
    './assets/images/characters/beru.jpg', './assets/images/characters/R5-D4.jpg',
    './assets/images/characters/Biggs.jpeg', './assets/images/characters/obi.jpg'
  ];

  let imgSRC = arrayImage[arrayNum];

  // Modificando el MODAL
  $('#exampleModal').on('show.bs.modal', function(event) {
    let modal = $(this);
    modal.find('.modal-title').text(nameChar);
    modal.find('#imageChar').attr("src", `${imgSRC}`);
    modal.find('#birth').text(`Birth Year: ${birthChar}`);
    modal.find('#gender').text(`Gender: ${genChar}`);
    modal.find('#height').text(`Height: ${heightChar}`);
    modal.find('#mass').text(`Mass: ${massChar}`);
    modal.find('#hair-color').text(`Hair-color: ${hairChar}`);
    modal.find('#skin-color').text(`Skin-color: ${skinChar}`);

  });
};
// Petición para los planetas usando jquery

$(document).ready(function (){
  dataRequest(urlStarWars);
});

const urlStarWars ="https://swapi.co/api/planets/";

function dataRequest (url) {
  fetch(`${url}`).then(response => {
    response.json(). then( dataPlanets => {
      let planets = dataPlanets.results;
      let dataTemplate = ``;
      console.log(planets);
      planets.forEach(function (item, index, array){
        // Arreglo con las imágenes de cada planeta
        let arrayImages = [
          "./assets/images/planets/Aldera_City.png","./assets/images/planets/yavin_iv.jpg",
          "./assets/images/planets/hoths.jpg","./assets/images/planets/Dagobah.jpg",
          "./assets/images/planets/Bespin.png","./assets/images/planets/Endor.jpg",
          "./assets/images/planets/Naboo.png", "./assets/images/planets/Coruscant.jpg",
          "./assets/images/planets/Kamino.png","./assets/images/planets/Geonosis.jpeg",
        ];

        let planetName = dataPlanets.results[index].name;
        let planetDiam = dataPlanets.results[index].diameter;
        let planetClim = dataPlanets.results[index].climate;
        let planetGrav = dataPlanets.results[index].gravity;
        let planetPopulation = dataPlanets.results[index].population;
        let planetRot = dataPlanets.results[index].rotation_period;
        let planetOrb = dataPlanets.results[index].orbital_period;
        let planetSurface = dataPlanets.results[index].surface_water;
        let planetTerrain = dataPlanets.results[index].terrain;
        let planetImages = arrayImages[index];
        dataTemplate +=
        `<div class="card planets-div" id="planet-Info" style ="width:80%">
          <img class="card-img-top" src=${planetImages} alt="Card image cap" >
          <div class="card-body">
            <h1 class="card-title">Planet's Name : ${planetName}</h1>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Diameter: ${planetDiam}</li>
              <li class="list-group-item">Climate : ${planetClim}</li>
              <li class="list-group-item">Gravity : ${planetGrav}</li>
              <li class="list-group-item">Population : ${planetPopulation}</li>
              <li class="list-group-item">Rotation Period : ${planetRot}</li>
              <li class="list-group-item">Orbital Period : ${planetOrb}</li>
              <li class="list-group-item">Surface Water : ${planetSurface}</li>
              <li class="list-group-item">Terrain: ${planetTerrain}</li>
            </ul>
          </div>
        </div>`;

        $("#planets-Info").html(dataTemplate);
      });
    });
  });
};




// Petición para los vehículos
fetch('https://swapi.co/api/vehicles/')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const vehicles = data.results;
    let output2 = ``;
    console.log(vehicles);

    vehicles.forEach((item, index) => {
     console.log(index);
     let arrayImages = ["./assets/images/vehicles/Sand_Crawler.jpg", "./assets/images/vehicles/T-16_skyhopper.gif",
                        "./assets/images/vehicles/X_34_landspeeder.jpg", "./assets/images/vehicles/TIE_LN_starfighter.jpg",
                        "./assets/images/vehicles/Snowspeeder.jpg", "./assets/images/vehicles/TIE_bomber.jpg",
                        "./assets/images/vehicles/AT_AT.jpg", "./assets/images/vehicles/AT_ST.jpg",
                        "./assets/images/vehicles/Storm_IV_Twin_Pod_cloud_car.jpg", "./assets/images/vehicles/Sail_barge.jpg"];


     const name = item.name;
     const model = item.model;
     const manufacturer = item.manufacturer;
     const costInCredits = item.cost_in_credits;
     const images = arrayImages[index];
     console.log(images);


     output2+=

     `<div class="card stylePeople" style="width: 13rem;">
       <img class="card-img-top" src=${images} alt="Card image cap">
       <div>
         <div class="card-body">
           <h4 class="card-title">Name:</h4>
           <h5 class="card-title">${name}</h5>
           <p class="card-text">Model: ${model}</p>
           <p class="card-text">Manufacturer: ${manufacturer}</p>
           <p class="card-text">Cost: ${costInCredits}</p>
         </div>
       </div>
     </div>`

  $("#vehicles-Info").html(output2);
  });

  })
  .catch(function(error) {
    //console.log('Request failed', error)
  });
