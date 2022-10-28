var h=document.createElement("h1")
h.innerHTML="Pokemons⚡"
var div=document.createElement("div")
div.setAttribute("id","poke_container")
div.setAttribute("class","poke-container")

document.body.append(h,div)
const poke_container=document.getElementById("poke_container");
const pokemons_number=50;

const fetchpockemons=async ()=>{
    for(var i=1;i<=pokemons_number;i++){
        await getPokemon(i);
    }
}

const getPokemon=async id =>{
    const url=`https://pokeapi.co/api/v2/pokemon/${id}`;
    const res=await fetch(url);
    const pokemon=await res.json();
    createPokemonCard(pokemon)


}
fetchpockemons();
function createPokemonCard(pokemon){
     const pokemonE1=document.createElement("div");
     pokemonE1.classList.add("pokemon");
      
     const pokeInnerHTML=`  <div class="poki" style="max-width: 18rem;">
     <h2 class="card-title">${pokemon.id}</h3>
      <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="...">
      <div class="card-body">
      <h3 class="card-title">Name:${pokemon.name}</h3>
      <h3 class="card-title">Weight:${pokemon.weight}</h3>
      <h3 class="card-title">Moves: ${pokemon.moves[0].move.name},${pokemon.moves[1].move.name},${pokemon.moves[2].move.name},${pokemon.moves[3].move.name}</h3>
       <h3 class="card-title">Abilities: ${pokemon.abilities[0].ability.name}</h3>
     
      </div>
    </div>
     `;

     pokemonE1.innerHTML=pokeInnerHTML
     poke_container.appendChild(pokemonE1)
}