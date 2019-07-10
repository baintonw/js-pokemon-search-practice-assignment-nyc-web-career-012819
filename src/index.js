  const input = document.querySelector('#pokemon-search-input')
  const pokemonContainer = document.querySelector('#pokemon-container')
  const filterBtn = document.querySelector('#filter-button')
  console.log(POKEMON)
  console.log('You are here')
  //YOUR CODE HERE
  pokemonContainer.addEventListener('click', function(e){
    console.log(e.target)
  })
  filterBtn.addEventListener('click', function(e) {
    // console.log("hello")
    fetch('http://localhost:3000/pokemon')
    	.then(res => res.json())
    	.then(allPokemon => {
        return filterPokemon(allPokemon)
      })
      .then(selected =>
        selected.forEach(function(pokemon){
            pokemonContainer.innerHTML +=`
                <div id="${pokemon.id}" class="pokemon-card">
                  <div class="pokemon-frame">
                    <h1 class="center-text">${pokemon.name}</h1>
                      <div class="pokemon-image">
                        <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
                      </div>
                  </div>
                </div>
              `

        })//forEach
      )//then end
    })//search button end
  function filterPokemon(array){
    let filteredPokemon = array.filter(function(pokemon){
      let pokemonName = pokemon.name
      return pokemonName.includes(input.value)
    })
    return filteredPokemon
  }//filter end







//Filter pokemon. input.value may need work

//ADD POKEMON CARDS TO CONTAINER
//   //fetch('http://localhost:3000/pokemon')
// 	.then(res => res.json())
// 	.then(allPokemon => allPokemon.forEach(function(pokemon){
// 	pokemonContainer.innerHTML +=`
// 	<div id="${pokemon.id}" class="pokemon-card">
//   		<div class="pokemon-frame">
//     		<h1 class="center-text">${pokemon.name}</h1>
//     	<div class="pokemon-image">
//       	<img data-id="7" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
//     </div>
//   </div>
// </div>
// `
// }))
