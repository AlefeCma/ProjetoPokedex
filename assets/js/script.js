
const namePokemon = document.querySelector('.pokemon_name')
const idPokemon = document.querySelector('.pokemon_id')
const imagePokemon = document.querySelector('.pokemon_image')

const form = document.querySelector('.form')
const formInput = document.querySelector('.input_search')

const fetchPokemon = async (pokemon) => {

    const ApiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)

    const data = await ApiResponse.json()
    return data
}

const renderPokemon = async (pokemon) => {
    try {
        const data = await fetchPokemon(pokemon)

        namePokemon.innerHTML = data.name
        idPokemon.innerHTML = data.id
        imagePokemon.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        formInput.value = ''
    }
    catch (error) {

        formInput.value = 'pokemon não existe'

    }
}
    form.addEventListener('submit', (event) => {

        event.preventDefault()

        renderPokemon(formInput.value)


    })

    renderPokemon('1')
