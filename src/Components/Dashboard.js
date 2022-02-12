import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './Header'
import Pelicula from './Pelicula'

const API_all = 'http://127.0.0.1:5000/dashboard'
const API_filtro = 'http://127.0.0.1:5000//dashboard_filtrado?cat='
const API_cat = 'http://127.0.0.1:5000/get_categorias'

export default function Dashboard() {
    const [pelicula, setPelicula] = useState([])
    const [category, setCategory] = useState([])

    useEffect(() => {
        getAllMovies()
        getCategorias()
    }, [])

    const getAllMovies = async() => {
        await axios.get(API_all)
        .then(async(r) => { 
            const movieList = r.data 
            setPelicula(movieList.peliculas)
        }).catch(e => {console.log('Sin peliculas', e)})
    }

    const getCategorias = async() => {
        await axios.get(API_cat)
        .then(async(r) => { 
            const catList = r.data 
            //console.log(catList)
            setCategory(catList.categorias)
        }).catch(e => {console.log('Sin categorias', e)})
    }

    // useEffect(() => {
    //     getCategoryMovies()
    //     getCategorias()
    // }, [])

    const getCategoryMovies = async() => {
        console.log(category)
        const catAPI = `${API_filtro}${category}`
        console.log(catAPI)
        await axios.get(catAPI)
        .then(async(r) => { 
            const movieList = r.data 
            console.log(movieList)
            setPelicula(movieList.peliculas)
        }).catch(e => {console.log('Sin peliculas', e)})
    }

    const handleChange = (event) => {
        setCategory(event.target.value)
        setCategory(event.target.value)
        console.log(category)
        getCategoryMovies()
    }

    // useEffect(() => {
    //     async function fetchFiltradas() {
    //         const request = await axios.get(`${API_cat}${3}`)
    //         console.log(request)
    //         setGettingFiltradas(true)
    //     }

    //     fetchFiltradas()
    // }, [moviesFiltradas])

    return (
        <div className='background'>
            <Header/>
            <div className='subHeader'>
                <div style={{fontSize: 30}}>
                    Peliculas
                </div>
                <div>
                    <div className='registerButton'>
                        <button>Registrar Pelicula</button>
                    </div>
                    <select name='categorias' id="categorias" onChange={handleChange}
                        label='Categoria'>
                            <option value="" disabled selected>Categoria</option>
                            {category.map((cat) => (
                                <option 
                                key={cat.categoriaID}
                                value={cat.categoriaID}
                                >{cat.descripcion}</option>
                            ))}
                    </select>
                </div>
            </div>
            <hr className='horizontalLine'/>

            <div className='grid'>
                {pelicula.map((peli) => (
                    <button className='peliculaButton'>
                        <div className='listaPeliculas'>
                            <Pelicula key={peli.peliculaID} peli={peli} />
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}
