let mail = document.getElementById('email');
let mdp = document.getElementById('mdp');

let submit = document.getElementById("submit-input");

let getCat = document.getElementById('get-cat');
let getCats = document.getElementById('get-cats');
let getAllUsers = document.getElementById('get-allUsers')

let catContainer = document.getElementById("cats-container")

getAllUsers.addEventListener('click', async (e)=>{
    e.preventDefault();
    console.log('getAllusers')
    const response = await fetch('../back/traitement-json.php?allUsers', {
        headers: {
            "Content-Type": "application/json",
        },
    })
    const result = await response.json()
    console.log(result)

    
})

submit.addEventListener('click',async (event)=>{
    event.preventDefault();
    console.log("coucou")
    console.log(mail.value)
    console.log(mdp.value)

    const response = await fetch('./traitement-json.php', {
        headers: {
            "Content-Type": "application/json",
        },
        method:"POST",
        body: JSON.stringify({ email: mail.value, password: mdp.value })
        
    })

    let result = await response.json()
    console.log(result)
})

getCat.addEventListener('click', async ()=>{
    const result = await displayRandomCat();
    catContainer.innerHTML = '';

     const newImg = document.createElement('img');        
        newImg.src = result.url;
        newImg.className = "cat-image";
        catContainer.append(newImg);
})

getCats.addEventListener('click', async ()=>{
    const result = await displayRandomCats();
    catContainer.innerHTML = '';
    console.log(result,'result')

    result.forEach(element => {
        const newImg = document.createElement('img');        
        newImg.src = element.url;
        newImg.className = "cat-image";
        catContainer.append(newImg);
    });
    
})


async function displayRandomCat(){
      const response = await fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1")

    const result = await response.json()
    console.log(result)
    return result[0]

}

async function displayRandomCats(){
      const response = await fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10")

    const result = await response.json()
    console.log(result)

    return result

}
