import React,{useState} from 'react';
import Error from './error';
import shortid from 'shortid';


function Formulario(props)
{

    const {GuardarGasto,GuardarCrearGasto} = props;


    //declaracion de state  
    const[nombreGasto,GuardarNombreGasto] =  useState('');
    const[cantidadGasto,GuardarCantidadGasto] = useState(0);
    const[error ,GuardarError] = useState(false);

    

    const AgregarGasto = (e) =>{
        e.preventDefault(); 

        //validar Campo

        if(cantidadGasto < 1 || isNaN(cantidadGasto) || nombreGasto ===''){ 
            GuardarError(true);
            //return para no seguir con las siguientes lineas
            return;
        }



        //construir objeto de gasto
        const gasto ={
        nombreGasto,
        cantidadGasto,
        id : shortid.generate() 
            
        }


        //pasar gasto al componente principal APP

        GuardarGasto(gasto);
        GuardarCrearGasto(true);

        //eliminar alerta

        GuardarError(false);

        //resetear formulario
        
        GuardarNombreGasto('');
        GuardarCantidadGasto('');



    }

    return(
        <form  onSubmit={AgregarGasto}>
                <h2>Agrega tus gastos</h2>

                {error ? <Error mensaje='Todos los campos son obligatorio o presupuesto incorrecto'/> : null }  

            <div className="campo">
                <label>Nombre del Gasto</label>
                <input 
                type="text"
                className="u-full-width"
                placeholder="Ej Trasporte"
                onChange={e => GuardarNombreGasto (e.target.value)}
                value={nombreGasto}
                />

            </div>

            <div className="campo">
             <label>Precio del Gasto</label>
                <input 
                type="number"
                className="u-full-width"
                placeholder="Ej 300"
                onChange={e => GuardarCantidadGasto( parseInt( e.target.value),10)}
                value={cantidadGasto}
                />

            </div>

            <input type="submit" className="button-primary u-full-width" value="Agregar Gastos"  />

        </form>
    )

}

export default Formulario ;