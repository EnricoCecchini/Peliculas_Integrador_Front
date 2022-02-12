const Pelicula = ({peli}) => {
    return (
        <div className='pelicula'>
            <h3>{peli.titulo}</h3>
            <p>Ano: {peli.anio}</p>
            <p>Director: {peli.director}</p>
            <p>Categoria: {peli.categoria}</p>
            {/* <div>
                {peli.protagonista.map((protag) => (
                    <p>{protag.nombre}</p>
                ))}
            </div> */}
        </div>
    )
}

export default Pelicula