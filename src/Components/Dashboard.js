import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Dashboard() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        
    }, [movies])

    return (
        <div>
            <h1>Chaks Movie Catalog</h1>
            <div>
                Peliculas
            </div>
            <div>
                Registrar Pelicula
            </div>
        </div>
    )
}
