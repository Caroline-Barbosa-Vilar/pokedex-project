const pokemonSelectionList = document.querySelectorAll('.pokemon')

pokemonSelectionList.forEach(pokemon => {
  
  pokemon.addEventListener('click', () => {
    const openedPokemonCard = document.querySelector('.open')
    openedPokemonCard.classList.remove('open')

    const idSelectedPokemon = pokemon.attributes.id.value

    const idPokemonCardToOpen = idSelectedPokemon + '-card' 
    const openPokemonCard = document.getElementById(idPokemonCardToOpen)
    openPokemonCard.classList.add('open')

    const activePokemonList = document.querySelector('.active')
    activePokemonList.classList.remove('active')

    const selectPokemon = document.getElementById(idSelectedPokemon)
    selectPokemon.classList.add('active')
  })
})