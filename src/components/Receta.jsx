import React from 'react'

const Receta = ({receta:{strDrink,strDrinkThumb}}) => {
    return (
        <div className="col-md-4 pb-5 ">
            
            <div className="shadow-sm card text-dark bg-light">
            <img className="card-img-top" src={strDrinkThumb} alt />
            <div className="card-body">
                <h4 className="card-title">{strDrink}</h4>
            </div>
            </div>

        </div>
    )
}

export default Receta
