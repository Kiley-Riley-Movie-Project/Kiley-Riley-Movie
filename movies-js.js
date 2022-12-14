"use strict"
// alert ("Test")
const movieUrl = "https://cool-maddening-kick.glitch.me/movies"

const movieSubmit = document.getElementById('submitForm');


function editClick(){
    let promptTitle = prompt("Edit Title Here" + this.title)

}

function changePadding() {

}

function fetchPost (){fetch(movieUrl, addMovie)
    .then( response => console.log(response) )
    .catch( error => console.error(error) )}


//Fetch to get data from Glitch API. WOO we did it
fetch(`https://cool-maddening-kick.glitch.me/movies`)
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        let html = "";
        for (const datum of data){
            html += `
<!--added container and text center to get them to the middle of the screen-->
              
            <div  class="main card container text-center text-white bg-dark " style="margin-bottom: 30px ; padding: 50px"  id="movieDisplay-${datum.id} ">
            <br>
                <h1 class="displayTitle">${datum.title}</h1>
                <br>
                <p class="displayRating">Rating: ${datum.rating}</p>
                <br>
                <p hidden>id: ${datum.id}</p>
                <br>
                <button type="button" class="editButton" id="edit-${datum.id}" data-id="${datum.id}"  >Edit</button>
                <br>
                <button type="button" class="deletebutton" data-id="${datum.id}" id="delete-${datum.id}" > Delete </button>
            </div>
            `
        }
        // format data to html
        // update inner html of #movieDisplay
        $(`#movieDisplay`).html(html);
        //calling delete button function
        editMovie();
        deletingMovies();

    })



//We put delete function into the get call, so that runs when data loads. We're also able to get datum.id's from this

var submitButton = document.querySelector("#movieSubmit")

//This is for our users to submit their own movie titles, rating and genre
submitForm.addEventListener('submit', function (e){
    e.preventDefault()

    //Gets values from input fields
    let movieTitle = document.querySelector('#title').valuegit 
    let movieRating = document.querySelector('#rating').value
    let movieGenre = document.querySelector('#genre').value

    //console logs input values
    console.log(movieTitle);
    console.log(movieRating);
    console.log(movieGenre);

    //makes object using let values we made
    let movie = {
        title: movieTitle,
        rating: movieRating,
        genre: movieGenre
    }
        //Sends new object to server
    fetch('https://cool-maddening-kick.glitch.me/movies', {
        method: 'POST',
        headers: {
            //tells server to expect json
            'Content-Type': 'application/json',
        },
        //turns json into a string
        body: JSON.stringify(movie)
    })
        //tells us a response of the fetch
        .then(res => res.json())
        .then(data => console.log(data))
})



//We to make the delete button, delete the movie object from json array.
//  add event listener to listen for delete button click
//          fetch(DELETE) when the listener detects to delete the object
function deletingMovies() {
    //On button click do this. works the same as addEventListener
    $('.deletebutton').on('click', function (e) {
        e.preventDefault()

        //this.dataset.id looks for the button data-id to determine which movie we are selecting
        console.log(this.dataset.id)
        fetch('https://cool-maddening-kick.glitch.me/movies/' + this.dataset.id, {
            method: 'DELETE',
            headers: {
                //tells server to expect json
                'Content-Type': 'application/json',
            },

        })
            //tells us a response of the fetch
            .then(res => res.json())
            .then(data => console.log(data)
            )
    })
}
// Edit form ideas: some kind of form appear with 2 text inputs and a submit button
function editMovie(){
    /*editID.addEventListener("click", function (e){
       let editMovie = prompt("Title to Edit");
*/



     $('.editButton').on('click', function (e){
        e.preventDefault()
         var promptTitle = prompt("Enter New Title")
         var promptRating = prompt("Enter Rating")

         let movieUpdate = {
             title: promptTitle,
             rating: promptRating,

         }
         console.log(movieUpdate);
         console.log(this.dataset.id)


        fetch('https://cool-maddening-kick.glitch.me/movies/' + this.dataset.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movieUpdate),
        })
            .then(res => res.json())
            .then(data => console.log(data)
            )
    })

}






/* Trying to make the loading messaged look better

setTimeout(function() {
    $('#mydiv').fadeOut('fast');
}, ); // <-- time in milliseconds

let loadingTimeOut = fetch(`https://cool-maddening-kick.glitch.me/server.js`).then(response => response.json())
.then(response => console.log(response))*/
