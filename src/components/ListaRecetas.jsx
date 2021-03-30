import React, { useContext } from 'react'
import { recetasContext } from '../Context/RecetasContext'
import Receta from './Receta'

const ListaRecetas = () => {

    const { recetas } = useContext(recetasContext)
    console.log(recetas)
    
    return (
        <div className="row mt-4">
            {
                recetas.map(receta=> (
                    <Receta  
                    key={receta.idDrink}
                    receta={
                        receta
                    }
                    />
                ))

            }

        </div>
    )
}

export default ListaRecetas
