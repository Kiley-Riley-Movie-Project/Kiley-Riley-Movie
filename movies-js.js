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



//Fetch to get data from Glitch API. WOO we did it
fetch(`https://cool-maddening-kick.glitch.me/movies`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let html = "";
        for (const datum of data){
            html += `
            <div class="card">
                <h3>${datum.title}</h3>
                <p>Rating: ${datum.rating}</p>
            </div>
            `
        }
        // format data to html
        // update inner html of #movieDisplay
        $(`#movieDisplay`).html(html);
    })
/* Trying to make the loading messaged look better

setTimeout(function() {
    $('#mydiv').fadeOut('fast');
}, ); // <-- time in milliseconds

let loadingTimeOut = fetch(`https://cool-maddening-kick.glitch.me/server.js`).then(response => response.json())
.then(response => console.log(response))*/
