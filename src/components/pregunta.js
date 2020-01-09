import React ,{Fragment,useState} from 'react';
import Error from './error';

function Pregunta (props){

    // guardar mas de un valor por props
    const {GuardarPresupuesto,guardarPreguntaPresupuesto,GuardarRestante} = props;


    //definir state
    const [cantidad,GuardadCantidad] = useState (0);
    const [error,GuardarError] = useState(false);


    const agregarPresupuesto = (e) => {
        e.preventDefault();

        //validar valor de cantidad

        if(cantidad < 1 || isNaN(cantidad) ){ 
            GuardarError(true);
            //return para no seguir con las siguientes lineas
            return;
        }
        GuardarError(false);
        GuardarPresupuesto(cantidad);
        GuardarRestante(cantidad);
        guardarPreguntaPresupuesto(false);

    }

        return(

          <Fragment>
              <h2>Coloca tu Presupuesto</h2>


              {error ? <Error mensaje='El presupuesto tiene que ser mayor a 0'/> : null }  
              <form onSubmit={agregarPresupuesto}>

                <input
                type='number'
                className="u-full-width"
                placeholder="ingresa tu presupuesto"
                onChange={e => GuardadCantidad (parseInt(e.target.value),10)}
                />


                <input type="submit"className="button-primary u-full-width"value="Definir Presupuesto"/>

              </form>

              
          </Fragment>

         

        );

}

export default Pregunta