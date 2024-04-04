let getData = async (pname) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pname}`);
    console.log("AXIOS with async syntax:", response.data.sprites.front_default);
    return response.data.sprites.front_default;
}

let formSubmit = async (event) => {
    event.preventDefault();
    console.log(event);

    let pname = event.target[0].value;

    console.log('Our form data:', pname);


    event.target.reset();

    // Creating a new element to display the entered name
    let newName = document.createElement('h4');
    newName.innerHTML = pname;
    form.after(newName);

    try {
        let imgUrl = await getData(pname);
        // let pokemonImg = document.createElement('img');
        // pokemonImg.src = imgUrl;
        let pokemonInfo = document.createElement('div');
        pokemonInfo.innerHTML = `
            <img src="${imgUrl}" alt="">
        `;

        document.body.appendChild(pokemonInfo);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

let form = document.getElementById('nameForm');
console.log(form);
form.addEventListener('submit', formSubmit);
