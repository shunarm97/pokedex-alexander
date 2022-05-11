import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import getPokemonById from "../services/getPokemonById"
import pokemonLogo from "../images/pokemon-logo.webp"
import "./pokemon.css"
import PokeType from "../components/PokeType"
import PokeAbilities from "../components/PokeAbilities"
import PokeMoves from "../components/PokeMoves"

const Pokemon = () => {


    const {id} = useParams()
    const navigate = useNavigate()
    const [pokeId, setPokeId] = useState(null)
    const [pokeName, setPokeName] = useState("")
    const [weight, setWeight] = useState(null)
    const [height, setHeight] = useState(null)
    const [image, setImage] = useState('')
    const [typeArr, setTypeArr] = useState([])
    const [abilitiesArr, setAbilitiesArr] = useState([])
    const [movesArr, setMovesArr] =useState([])


    useEffect(() => {
        getPokemonById(id)
        .then((res) => {
            setPokeId(res.data.id)
            setPokeName(res.data.name)
            setWeight(res.data.weight)
            setHeight(res.data.eight)
            setImage(res.data.sprites.other.home.front_default)
            setTypeArr(res.data.types)
            setAbilitiesArr(res.data.abilities)
            setMovesArr(res.data.moves)
        }) 
    }, [id])

    console.log(pokeId)
    return (
        <div>
            <Link to={`/pokedex/:id/encounters`}>
             <h2>ir a Encounters</h2>
            </Link>
            
            <img src={pokemonLogo} alt="" />
            <h1>{pokeName}</h1> <br />
            <p>Weight: {weight}</p> <br />
            <p>Height: {height}</p>
            <p># {id}</p>
            <img className="img" src={image} alt=""/>
            {typeArr.map((item) => <PokeType key={item.slot} type={item.type}/>)}
            {abilitiesArr.map((item) => <PokeAbilities key={item.slot} abilities={item.ability}/>)}
            {movesArr.map((item) => <PokeMoves key={item.move.url} moves={item.move} />)}
            <button onClick={() => navigate(-1)}>Regresar</button>
        </div>

    )
}
// 

export default Pokemon