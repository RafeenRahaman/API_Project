const url1 = "https://api.thecatapi.com/v1/images/search";
const url2 = "https://randomuser.me/api"

let button = document.getElementById("Btn")
let button2 = document.getElementById('Btn2')


function catfunction() {
    fetch(url1)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        let img = document.getElementById('img')
        let imgsrc = myJson[0].url
        img.src = imgsrc
        img.style.maxHeight = '568px'
        img.style.maxWidth = '320px'
    });
    let p = document.getElementById('p')
    p.innerText = ''
}

function pfunction() {
    fetch(url2)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        let userData = myJson.results[0]
        let p = document.getElementById('p')
        p.innerText = "This cat's current location is " + userData.location.city + ", " + userData.location.country + "; Coordinates " + userData.location.coordinates.latitude + " " + userData.location.coordinates.longitude
    });
}

button.addEventListener("click", catfunction)
button2.addEventListener("click", pfunction)