import React,{useState,useEffect} from 'react';
import Pregunta from './components/pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';



function App() {


  //state 
  const[presupuesto,GuardarPresupuesto] = useState(0);
  const [restante,GuardarRestante] =  useState(0);
  const [preguntaPresupuesto,guardarPreguntaPresupuesto] = useState(true);
  const [crearGasto,GuardarCrearGasto] = useState(false);
  const [gasto,GuardarGasto ] = useState({})
  const [gastos,GuardarGastos ]= useState([]);


  useEffect ( () =>{

      if(crearGasto){

        const listadoDeGastos = [...gastos , gasto];
        GuardarGastos(listadoDeGastos);

        //restar al presupuesto
        const RestaPresupuesto  = restante - gasto.cantidadGasto;
        GuardarRestante(RestaPresupuesto);

        //una vez que se agrega se vuelve a false para ocultar
        GuardarCrearGasto(false);
      }

  },[crearGasto,gastos, gasto,presupuesto,restante ]);




  return (
    <div className="App container ">
      <header>
        
        
        <h1>Gastos Semanales</h1>
     

        <div className="contenido-principal cotenido">
          
        {(preguntaPresupuesto)
          ?
          <Pregunta 
            GuardarPresupuesto={GuardarPresupuesto}
            guardarPreguntaPresupuesto={guardarPreguntaPresupuesto}
            GuardarRestante = {GuardarRestante}
          />
          :
          
          (
            <div className="row">

              <div className="one-half column">
                   <Formulario
                   GuardarGasto = {GuardarGasto}
                   GuardarCrearGasto = {GuardarCrearGasto}
                   />
              </div>

              <div className="one-half column">

                <Listado gastos={gastos}/>
                <ControlPresupuesto 
                presupuesto ={ presupuesto} 
                restante = {restante}
                />
              </div>


            </div>

          )
        
        }



        </div>

     </header>
      

    </div>
  );
}

export default App;
