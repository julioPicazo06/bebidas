import { Fragment } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import { CategoriasProvider } from "./Context/CategoriaContext";

const App = () => {
  return (
    <CategoriasProvider>
      <Header/>
      <div className="container mt-5">
        <div className="">
            <Formulario/>
        </div>
      </div>
    </CategoriasProvider>
  );
}

export default App;
