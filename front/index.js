/**
 * LOGIQUE METIER (Exportée pour les tests Jest)
 */

export async function displayRandomCat() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1");
    const result = await response.json();
    return result[0];
}

export async function displayRandomCats(limit = 10) {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=${limit}`);
    const result = await response.json();
    return result;
}

export async function postUserData(email, password) {
    const response = await fetch('../back/traitement-json.php', {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ email, password })
    });
    return await response.json();
}

export async function getAllUsers() {
    const response = await fetch('../back/traitement-json.php?allUsers', {
        headers: {
            "Content-Type": "application/json",
        },
    });
    return await response.json();
}

if (typeof document !== 'undefined') {
    // Sélection des éléments
    const mail = document.getElementById('email');
    const mdp = document.getElementById('mdp');
    const submit = document.getElementById("submit-input");
    const getCat = document.getElementById('get-cat');
    const getCats = document.getElementById('get-cats');
    const btnAllUsers = document.getElementById('get-allUsers');
    const catContainer = document.getElementById("cats-container");

    // Événement : Récupérer tous les utilisateurs
    if (btnAllUsers) {
        btnAllUsers.addEventListener('click', async (e) => {
            e.preventDefault();
            const result = await getAllUsers();
            console.log("Liste des utilisateurs :", result);
        });
    }

    // Événement : Inscription / Connexion
    if (submit) {
        submit.addEventListener('click', async (event) => {
            event.preventDefault();
            if (!mail.value || !mdp.value) return alert("Veuillez remplir les champs");

            const result = await postUserData(mail.value, mdp.value);
            console.log("Résultat traitement :", result);
        });
    }

    // Événement : Un seul chat
    if (getCat) {
        getCat.addEventListener('click', async () => {
            const result = await displayRandomCat();
            if (catContainer) {
                catContainer.innerHTML = '';
                const newImg = document.createElement('img');
                newImg.src = result.url;
                newImg.className = "cat-image";
                catContainer.append(newImg);
            }
        });
    }

    // Événement : Plusieurs chats
    if (getCats) {
        getCats.addEventListener('click', async () => {
            const result = await displayRandomCats(10);
            if (catContainer) {
                catContainer.innerHTML = '';
                result.forEach(element => {
                    const newImg = document.createElement('img');
                    newImg.src = element.url;
                    newImg.className = "cat-image";
                    catContainer.append(newImg);
                });
            }
        });
    }
}