"use strict"
// alert ("Test")
const movieUrl = "https://cool-maddening-kick.glitch.me"
// fetch ('https://cool-maddening-kick.glitch.me', {
//     method: 'GET',
//     headers: {
//         'Accept': 'application/json',
//     },
//     })
// .then(response => response.text())
// // .then(text => console.log(text))

fetch('https://cool-maddening-kick.glitch.me')
.then(response =>
console.log(response))
.catch(error => console.error(error));

const movie = {
    title: "",
    rating: "",
    "id": ""};


const addMovie = {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json',
    },
    body: JSON.stringify(movie)
}
//Add movie data to a form, so it displays on website
var testform = document.createElement("h1")

testform.append(addMovie)