let mainDivOpp = document.querySelector("#curiosity");
//mainDivOpp.innerHTML = "";

// NASA API
const count = 15;
const apiKey = 'IxIBOwaTmmj18dCu2RLvBHM6H3AgOSfsuQ1YYor0';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;


let resultsArray = [];
let resultsArray = [];








async function getNasaPictures() {

  try {
    const response = await fetch(apiUrl);
    resultsArray = await response.json();
    console.log(resultsArray);
    createImageCards(resultsArray);
    
  } catch (error) {
    // Catch Error Here
  }
}


getNasaPictures();