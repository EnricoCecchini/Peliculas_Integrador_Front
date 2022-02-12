const Pelicula = ({peli}) => {
    return (
        <div className='pelicula'>
            <h3>{peli.titulo}</h3>
            <p>{peli.anio}</p>
            <p>{peli.director}</p>
            <p>{peli.categoria}</p>
        </div>
    )
}

export default Pelicula