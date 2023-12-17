import "./App.css";
import { LandingPage } from "./page/LandingPage";
import { DetalleReceta } from "./page/DetalleReceta";
import { ConsultaIngredientes } from "./components/ConsultaIngredientes";

import {BrowserRouter,Routes,Route,Link} from "react-router-dom"


export const App = ()=>{
  return(
    <BrowserRouter>
     
      <header >
        
        <Link to="/">
      <h1 className="title">RECETAS</h1>
      </Link> 
      </header>
      
      
      <Link to="/consultaingredientes"><button className="button button-34" id="boton1">Consulta por ingrediente</button></Link>  
      <Routes>
        <Route path="/" element = {<LandingPage/>}/>
        <Route path="/receta/:id" element = {<DetalleReceta />}/>
        
        <Route path="/consultaingredientes" element = {<ConsultaIngredientes />}/>
        
        
      </Routes>   
      
      
      
    </BrowserRouter>
    
  )
}