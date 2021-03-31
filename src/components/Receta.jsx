import { makeStyles, Modal } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import { ModalContext } from '../Context/ModalContext'

function getModalStyle() {
    const top = 50 
    const left = 50 
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const Receta = ({receta:{strDrink,strDrinkThumb , idDrink}}) => {

    //Configuracion del modal material-ui
    const [modalStyle] = useState(getModalStyle)
    const [open, setOpen] = useState(false)

    const classes = useStyles()
    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }


    const { setIdReceta , info , setReceta} = useContext(ModalContext)
    
    const mostrarIngredientes = (info)=>{
      let ingredientes = []
      for (let i = 1; i < 16; i++) {
       if(info[`strIngredient${i}`]){
         ingredientes.push(
           <li>
            { info[`strIngredient${i} `] }
            { info[`strMeasure${i}`] }
           </li>
         )
       }

       
        
      }
      return ingredientes
    }    


   return (
        <div className="col-md-4 pb-5 ">
            
            <div className="shadow-sm card text-dark bg-light">
            <img className="card-img-top" src={strDrinkThumb} alt={`${strDrink}`} />
            <div className="card-body">
                <h4 className="card-title text-center">{strDrink}</h4>
                <button
                  className="btn btn-block btn-danger"
                  onClick={()=> {
                    setIdReceta( idDrink )
                    handleOpen();
                  }}>Ver
                  bebida</button>

                  <Modal
                  open={open}
                  onClose={()=>{
                    setIdReceta(null)
                    setReceta({})
                    handleClose()
                    
                  }}>
                    <div style={modalStyle} className={
                        classes.paper
                    }>
                        <h4>{info.strDrink}</h4>
                        <h5>Instrucciones</h5>
                        <p>
                            {
                                info.strInstructions
                            }
                        </p>
                        <img className="img-fluid my-4" src={info.strDrinkThumb} />
                    
                            <h6>
                              ingredientes y cantidades
                              <ul>
                                {
                                  mostrarIngredientes(info)
                                }
                              </ul>
                            
                              </h6>
                        </div>
                  </Modal>
                </div>
            </div>

        </div>
    )
}

export default Receta
