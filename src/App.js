import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario/Formulario";

function App() {

  const temasLivros = [
    {
      nome: "Psicologia",
      corPrimaria: '#D9F7E9',
      corSecundaria: '#57C278'
    },

    {
      nome: "Religião",
      corPrimaria: '#E8F8FF',
      corSecundaria: '#82CFFA'
    },

    {
      nome: "Filosofia",
      corPrimaria: '#F0F8E2',
      corSecundaria: '#A6D157'
    },

    {
      nome: "Parapsicologia",
      corPrimaria: '#FDE7E8',
      corSecundaria: '#E06B69'
    }
  ]

  return (
    <div>
      <Banner />
      <Formulario temasLivros={temasLivros.map(temas=>temas.nome)} />
    </div>
  );
}

export default App;
