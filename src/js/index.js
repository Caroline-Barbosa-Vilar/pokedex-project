const pokemonSelectionList = document.querySelectorAll('.pokemon')
// const pokemonsCard = document.querySelectorAll('.pokemon-card')

pokemonSelectionList.forEach(pokemon => {
  
  pokemon.addEventListener('click', () => {
    const openedPokemonCard = document.querySelector('.open')
    openedPokemonCard.classList.remove('open')

    const idSelectedPokemon = pokemon.attributes.id.value

    const idPokemonCardToOpen = 'card-' + idSelectedPokemon
    const openPokemonCard = document.getElementById(idPokemonCardToOpen)
    openPokemonCard.classList.add('open')

    const activePokemonList = document.querySelector('.active')
    activePokemonList.classList.remove('active')

    const selectPokemon = document.getElementById(idSelectedPokemon)
    selectPokemon.classList.add('active')
  })
})