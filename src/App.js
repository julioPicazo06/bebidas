import { Fragment } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaRecetas from "./components/ListaRecetas";
import { CategoriasProvider } from "./Context/CategoriaContext";
import { RecetasProvider } from "./Context/RecetasContext";

const App = () => {
  return (
    <CategoriasProvider>
    <RecetasProvider>
      <Header/>
      <div className="container mt-5">
        <div className="">
            <Formulario/>
        </div>
        <ListaRecetas/>
      </div>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
