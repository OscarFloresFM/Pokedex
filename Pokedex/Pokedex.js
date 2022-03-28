const fetchpokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}` ;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("https://i.blogs.es/757a98/pk4/450_1000.jpg");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg) ;
        pokeImage(pokeImg) ;
        Nombrepokemon.innerHTML = data.name;
        puntosvida.innerHTML = data.stats[0].base_stat
        puntosfuerza.innerHTML = data.stats[1].base_stat
        puntosdefensa.innerHTML = data.stats[2].base_stat
        puntosagilidad.innerHTML = data.stats[5].base_stat
        posicionpokedex.innerHTML = data.id
        tipopokemon.innerHTML = data.types[0].type.name
        Habilidades.innerHTML = data.abilities[0].ability.name +" , "+ data.abilities[1].ability.name
    })
}

fetchpokemon();

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}
const Nombrepokemon = document.getElementById('name-screen')
const puntosvida = document.getElementById('Vida')
const puntosfuerza = document.getElementById('Fuerza')
const puntosdefensa = document.getElementById('Defenza')
const puntosagilidad = document.getElementById('Agilidad')
const posicionpokedex = document.getElementById('Noxpokedex')
const tipopokemon = document.getElementById('ElementoT')
const Habilidades = document.getElementById('habilidades')