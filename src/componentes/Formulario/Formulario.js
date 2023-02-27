import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import './Formulario.css'

function Formulario({temasLivros}) {
    
    return (
        <section className='formulario'>
            <form>
                <CampoTexto label="Nome do Livro: " placeholder="Informe o nome do Livro" />
                <CampoTexto label="Autor: " placeholder="Informe o nome do autor do livro" />
                <ListaSuspensa label="Tema do Livro:" temas={temasLivros}/>
            </form>
        </section>
    )
}

export default Formulario;