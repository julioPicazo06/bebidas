import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const CategoriasContext = createContext()


export const CategoriasProvider = (props) => {

    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        // llamada a la api
        const obtenerCategorias = async()=> {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            const res = await axios.get(url)
            setCategorias(res.data.drinks)
        }

        obtenerCategorias()
    }, [])

    return (
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}
