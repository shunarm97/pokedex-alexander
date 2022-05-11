import { useEffect, useState } from "react"
import getInfoByUrl from "../services/getInfoByUrl"
import PokeType from "./PokeType"
import {Link} from "react-router-dom"

const PokeItem = ({url}) => {
    const [pokeObj, setPokeObj] = useState({})
    const [pokeImg, setPokeImg] = useState('')
    const [typesArr, setTypesArr] =useState([])
    const [hp, setHp] = useState(null)
    const [attack, setAttack] = useState(null)
    const [pokeId, setPokeId] =useState(null)
    const [defense, setDefense] =useState(null)
    const [speed, setSpeed] = useState(null)
        useEffect(() => {
            getInfoByUrl(url)
            .then((res) => {
                setPokeObj( res.data)
                setPokeImg(res.data.sprites.front_default)
                setTypesArr(res.data.types)
                setHp(res.data.stats[0].base_stat)
                setPokeId(res.data.id)
                setAttack(res.data.stats[1].base_stat)
                setDefense(res.data.stats[2].base_stat)
                setSpeed(res.data.stats[5].base_stat)
            })
        }, [url])

    return (
        <Link to={`/pokedex/${pokeId}`}>
         <div style={{margin: "15px", backgroundColor:"brown", borderRadius:"8px"}}>  
            <h1>{pokeObj.name}</h1>
            <img src={pokeImg} alt='' />
            {typesArr.map((item) => <PokeType key={item.slot} type={item.type} />)}
            <p>HP: {hp}</p>
            <p>Attack: {attack}</p>
            <p>Defense: {defense}</p>
            <p>Speed: {speed}</p>
          </div>
        </Link>
    )
}
export default PokeItem