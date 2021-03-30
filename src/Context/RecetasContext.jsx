import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { useForm } from '../Hooks/useForm'

export const recetasContext = createContext()

export const RecetasProvider = ({children}) => {

    const [recetas, setRecetas] = useState([])
    const [busqueda , buscarRecetas ] = useState({
        nombre:'',
        categoria:''
    })
    const [consultar, setConsultar] = useState(false)

    const { nombre , categoria } = busqueda

    useEffect(() => {

       if(consultar) {
        const obtenerRecetas = async ()=> {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`
            const res = await axios.get(url)
            setRecetas(res.data.drinks)
        }

        obtenerRecetas()
       }
    }, [busqueda])

    return (
        <recetasContext.Provider
            value={
                {
                    buscarRecetas,
                    setConsultar,
                    recetas
                }
            }
        >
        {children}
            
        </recetasContext.Provider>
    )
}


