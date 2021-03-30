import React, { useState } from 'react'


export const useForm = (obj)=> {
    const [datosForm, setDatosForm] = useState(obj)

    const obtenerDatos = ({ target: { name, value } })=> {
        setDatosForm({
            ...datosForm ,
            [name] : value
        })
    }

    return[
        datosForm,
        obtenerDatos
    ]
}