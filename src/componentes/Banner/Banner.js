import './Banner.css'

function Banner() {
    return (
        <section className='header'>
            <div className='container'>

                <div className='titulo'>

                    <div className='logo-ipc'>
                        <img src='./imagens/logo_IPC.png' alt='Logo do IPC' />
                    </div>

                    <div className='links'>
                        <ul>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
                    </div>

                </div>

                <div className='informacoes-textuais'>
                    <h1>Cadastro de Livros</h1>
                    <p>Sistema criado para o cadastro de livros da biblioteca do IPC.</p>
                </div>

                <div className='imagens'>
                    <img src='./imagens/livros.jpg' alt='Banner da Página' />
                </div>

            </div>
        </section>
    )
}

export default Banner;