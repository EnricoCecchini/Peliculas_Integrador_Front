import React, { useState } from 'react'
import './styles.css'

export default function Header({title}) {

    const [param, setParam] = useState('')

    return (
        <div>
            <header className='header'>
                <h1 style={{marginLeft: '35%'}}>Chaks Movie Catalog</h1>
                <form>
                    <input type="text" name='Search' placeholder='Search'/>
                    <input type="submit" value="name" />
                </form>
            </header>
            <div className='subHeader'>
                <div style={{fontSize: 30}}>
                    {title}
                </div>
                <button className='registerButton'>Registrar Pelicula</button>
            </div>
            <div className='horizontalLine'/>
        </div>
    )
}
