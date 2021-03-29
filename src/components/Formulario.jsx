import React, { Fragment, useContext } from 'react'
import { CategoriasContext } from '../Context/CategoriaContext'

const Formulario = () => {

    const {categorias} = useContext(CategoriasContext)
    return (
        
            <Fragment>
            <fieldset className="text-center">
            <legend className="">
                Busca babidas por categoria o ingrediente
    </legend></fieldset>
    <form>
        <div className="row mt-4">
            <div className="col-md-4 form-group">
                <input type="text"
                    name="nombre"
                    placeholder=" Buscar por ingrediente"
                    className="form-control" />

            </div>
            <div className="col-md-4 form-group">
                <select
                    name="categoria"
                    name="categoria"
                    className="form-control">
                    <option value="" selected={true} disabled={true}> ---seleccione una opcion---</option>
                    {
                        categorias.map(({strCategory})=>(
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
