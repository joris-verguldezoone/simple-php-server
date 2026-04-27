// Fonctions exportées pour être testables (Bloc 2 - C16, C17)
export async function postUserData(email, password) {
    const response = await fetch('./traitement-json.php', {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ email, password })
    });
    return await response.json();
}

export async function displayRandomCats(limit = 1) {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=${limit}`);
    return await response.json();
}

// Initialisation des écouteurs d'événements
export function initApp() {
    const submit = document.getElementById("submit-input");
    const getCat = document.getElementById('get-cat');
    const getCats = document.getElementById('get-cats');
    const catContainer = document.getElementById("cats-container");

    if (submit) {
        submit.addEventListener('click', async (event) => {
            event.preventDefault();
            const mail = document.getElementById('email').value;
            const mdp = document.getElementById('mdp').value;
            const result = await postUserData(mail, mdp);
            console.log(result);
        });
    }

    if (getCat) {
        getCat.addEventListener('click', async () => {
            const result = await displayRandomCats(1);
            if (catContainer) {
                catContainer.innerHTML = '';
                const newImg = document.createElement('img');
                newImg.src = result[0].url;
                newImg.className = "cat-image";
                catContainer.append(newImg);
            }
        });
    }
}

// Lancement automatique si on est dans le navigateur
if (typeof window !== 'undefined') {
    initApp();
}