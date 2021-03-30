import React, { Fragment, useContext, useState } from 'react'
import { CategoriasContext } from '../Context/CategoriaContext'
import { recetasContext, RecetasProvider } from '../Context/RecetasContext'
import { useForm } from '../Hooks/useForm'

const Formulario = () => {


    const { categorias } = useContext(CategoriasContext)
    const { buscarRecetas , setConsultar ,recetas } = useContext(recetasContext)

    const [busqueda , obtenerDatos ] = useForm({
        nombre:'',
        categoria:''
    })


    const handleSumbmit = ( e ) => {
        e.preventDefault()
        buscarRecetas( busqueda )
        setConsultar(true)
        console.log(recetas)
    }
 

    return (

        <Fragment>
            <fieldset className="text-center">
                <legend className="">
                    Busca babidas por categoria o ingrediente
                </legend>
            </fieldset>
            <form onSubmit={e=> handleSumbmit(e)}
            >
                <div className="row mt-4">
                    <div className="col-md-4 form-group">
                        <input type="text"
                            name="nombre"
                            placeholder=" Buscar por ingrediente"
                            className="form-control"
                            onChange={(e) => obtenerDatos(e)}

                        />
                    </div>
                    <div className="col-md-4 form-group">
                        <select
                            name="categoria"
                            onChange={(e) => obtenerDatos(e)}


                            className="form-control">
                            <option value="" selected={true} disabled={true}> ---seleccione una opcion---</option>
                            {
                                categorias.map(({ strCategory }) => (
                                    <option key={strCategory} value={strCategory}>{strCategory}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="col-md-4">
                        <input
                            type="submit"
                            vaue="Buscar"
                            className="btn btn-info btn-block" />
                    </div>
                </div>
            </form>

        </Fragment>
    )
}

export default Formulario
