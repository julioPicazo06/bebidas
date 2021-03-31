import { Fragment } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaRecetas from "./components/ListaRecetas";
import { CategoriasProvider } from "./Context/CategoriaContext";
import { ModalProvider } from "./Context/ModalContext";
import { RecetasProvider } from "./Context/RecetasContext";

const App = () => {
  return (
    <CategoriasProvider>
    <RecetasProvider>
    <ModalProvider>
      <Header/>
      <div className="container mt-5">
        <div className="">
            <Formulario/>
        </div>
        <ListaRecetas/>
      </div>
      </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
