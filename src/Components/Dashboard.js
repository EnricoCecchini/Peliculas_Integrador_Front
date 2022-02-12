import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './Header'
import Pelicula from './Pelicula'

const API_all = 'http://127.0.0.1:5000/dashboard'
const API_cat = 'http://127.0.0.1:5000//dashboard_filtrado?cat='

export default function Dashboard() {
    //const [pelicula, setPelicula] = useState([])
    const [peliculaFiltrada, setPeliculaFiltrada] = useState([])

    const [pelicula, setPelicula] = useState([
    {
        "anio": 2016,
        "director": "Taika Waititi",
        "duracion": "2:9",
        "peliculaID": 2,
        "protagonista": [
          {
            "nombre: ": "Chris Hemsworth",
            "protagID": 1
          }
        ],
        "titulo": "Thor Ragnarok"
      },
      {
        "anio": 2018,
        "director": "Hermanos Russo",
        "duracion": "2:29",
        "peliculaID": 1,
        "protagonista": [
          {
            "nombre: ": "Chris Hemsworth",
            "protagID": 1
          },
          {
            "nombre: ": "Robert Downey JR",
            "protagID": 2
          },
          {
            "nombre: ": "Tom Holland",
            "protagID": 8
          }
        ],
        "titulo": "Avengers Infinity War"
      },
      {
        "anio": 2019,
        "director": "Hermanos Russo",
        "duracion": "2:39",
        "peliculaID": 25,
        "protagonista": [
          {
            "nombre: ": "Chris Hemsworth",
            "protagID": 1
          },
          {
            "nombre: ": "Robert Downey JR",
            "protagID": 2
          },
          {
            "nombre: ": "Tom Holland",
            "protagID": 8
          }
        ],
        "titulo": "Avengers Endgame"
      },
      {
        "anio": 2001,
        "director": "J.K Rowling",
        "duracion": "2:39",
        "peliculaID": 31,
        "protagonista": [
          {
            "nombre: ": "Daniel Radcliffe",
            "protagID": 11
          }
        ],
        "titulo": "Harry Potter"
      },
      {
        "anio": 2011,
        "director": "J.K Rowling",
        "duracion": "2:39",
        "peliculaID": 36,
        "protagonista": [
          {
            "nombre: ": "Robert Downey JR",
            "protagID": 2
          },
          {
            "nombre: ": "Daniel Radcliffe",
            "protagID": 11
          },
          {
            "nombre: ": "Natasha Romanoff",
            "protagID": 14
          }
        ],
        "titulo": "Avengers 2"
      },
      {
        "anio": 2011,
        "director": "Tim Burton",
        "duracion": "2:39",
        "peliculaID": 45,
        "protagonista": [
          {
            "nombre: ": "Daniel Radcliffe",
            "protagID": 11
          },
          {
            "nombre: ": "Jack Sparrow",
            "protagID": 15
          }
        ],
        "titulo": "Esward SCissorhands"
      },
      {
        "anio": 2018,
        "director": "James Gunn",
        "duracion": "1:39",
        "peliculaID": 46,
        "protagonista": [
          {
            "nombre: ": "Robert Downey JR",
            "protagID": 2
          },
          {
            "nombre: ": " Natasha Romanoff",
            "protagID": 13
          },
          {
            "nombre: ": "Chris Evans",
            "protagID": 16
          }
        ],
        "titulo": "Avengers 3"
      }
    ])

    useEffect(() => {

        //getAllMovies()
        console.log('Peliculas', pelicula)
        console.log('Peliculas', pelicula)
    }, [])

    const getAllMovies = async() => {
        await axios.get(API_all)
        .then(async(r) => { 
            const movieList = r.data 
            console.log(movieList)
            //setPelicula(movieList.peliculas)
        }).catch(e => {console.log('Sin peliculas', e)})
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
        <div>
            <Header title={'Peliculas'}/>
            <div className='grid'>
                {pelicula.map((peli) => (
                    <div className='listaPeliculas'>
                        <Pelicula key={peli.peliculaID} peli={peli} />
                    </div>
                ))}
            </div>
        </div>
    )
}
