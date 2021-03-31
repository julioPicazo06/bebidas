import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';


export const ModalContext = createContext()

export const ModalProvider = ({children}) => {
    
    const [idReceta, setIdReceta] = useState(null)
    const [info, setReceta] = useState({})
    // teniendo receta llamar api 
    useEffect(() => {
       const obtenerReceta = async () => {
           if(!idReceta) return

           const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`
                try {
                    const {data:{drinks}} = await axios.get(url)
                    setReceta(drinks[0])

                    
                } catch (error) {
                    console.log(error)
                }                

        }

        obtenerReceta()

    }, [idReceta])
    
    return(

        <ModalContext.Provider
            value={{
                setIdReceta,
                info,
                setReceta

            }}>
            {children}
        </ModalContext.Provider>
    )
}