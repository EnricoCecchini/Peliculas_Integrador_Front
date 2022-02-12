const Pelicula = ({peli}) => {
    return (
        <div className='pelicula'>
            <h3>{peli.titulo}</h3>
            <p>Ano: {peli.anio}</p>
            <p>Director: {peli.director}</p>
            <p>Categoria: {peli.categoria}</p>
        </div>
    )
}

export default Pelicula