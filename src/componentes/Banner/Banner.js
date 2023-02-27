import './Banner.css'

function Banner() {
    return (
        <div className='container'>
            <div className='informacoes-textuais'>
                <h1>Cadastro de Livros</h1>
                <p>Sistema criado para o cadastro de livros da biblioteca do IPC.</p>
            </div>

            <div className='imagens'>
                <img src='./imagens/livros.jpg' alt='Banner da Página' />
            </div>

        </div>
    )
}

export default Banner;