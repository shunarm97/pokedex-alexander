import { useEffect, useState } from "react"
import PokeItem from "../components/PokeItem"
import getAllPokemons from "../services/getAllPokemons"

const PokemonList = () => {

    const [pokeList, setPokeList] = useState([])

    useEffect(() => {
        getAllPokemons()
             .then((res) => {
            setPokeList(res.data.results)
         })
    }, [])

    const list = pokeList.map((item) => <PokeItem key={item.url} url={item.url} />)
    return (
        <div> 
            {list}
        </div>
    )
}
export default PokemonList