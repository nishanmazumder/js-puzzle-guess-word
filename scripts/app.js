var wordCat = document.getElementById('wordCat');

wordCat.innerText = "Which category would you like : ";

let req = "data/words.json"

async function fetchData(req) {
    let response = await fetch(req);

    if (response.statusText == "OK") {
        return await response.json();
    } else {
        throw new Error(response.statusText);
    }
}

fetchData().then(response => {
    console.log(response)
})

// async function test() {
//     return "test";
// }

// let test = async () => {
//     return "test";
// }

// let test = async () => "Hello"

//test().then((value) => console.log(value))

//test().then(console.log)

// test().then(value => console.log(value))

// async function myFetch() {
//     let response = await fetch('image.jpg')
//     if (!response.ok) {
//         throw new Error('HTTP error: status: ${response.status}')
//     }
//     return await response.blob()
// }

// myFetch().then(bolb => {
//     let objectUrl = URL.createObjectURL(bolb)
//     let image = document.createElement('img')
//     image.src = objectUrl
//     document.body.appendChild(image)
// }).catch(e => {
//     console.log('Error ! Message:' + e.message)
// })