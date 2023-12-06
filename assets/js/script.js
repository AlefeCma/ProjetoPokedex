
const namePokemon = document.querySelector('.pokemon_name')
const idPokemon = document.querySelector('.pokemon_id')
const imagePokemon = document.querySelector('.pokemon_image')

const form = document.querySelector('.form')
const formInput = document.querySelector('.input_search')

const buttonPrev = document.querySelector('.btn-prev')
const buttonNext = document.querySelector('.btn-next')

let searchPokemon = 1

const fetchPokemon = async (pokemon) => {

    const ApiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    const data = await ApiResponse.json()
    return data
}

const renderPokemon = async (pokemon) => {
    try {
        const data = await fetchPokemon(pokemon)
        imagePokemon.style.display = 'block'
        namePokemon.innerHTML = data.name
        idPokemon.innerHTML = data.id
        imagePokemon.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        formInput.value = ''
        searchPokemon = data.id
    }
    catch (error) {

        imagePokemon.style.display = 'none'
        namePokemon.innerHTML = 'pokemon não existe'

    }
}
form.addEventListener('submit', (event) => {

    event.preventDefault()

    renderPokemon(formInput.value.toLowerCase())


})

buttonNext.addEventListener('click', () => {
    searchPokemon = searchPokemon + 1
    renderPokemon(searchPokemon)

})

buttonPrev.addEventListener('click', () => {
    if (searchPokemon > 1) {

        searchPokemon = searchPokemon - 1
        renderPokemon(searchPokemon)
    }
})
renderPokemon(searchPokemon)
