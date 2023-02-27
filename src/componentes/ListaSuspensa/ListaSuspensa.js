import './ListaSuspensa.css';

function ListaSuspensa({label,temas}){
    return(
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select>
                {temas.map(tema => <option key={tema}>{tema}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;