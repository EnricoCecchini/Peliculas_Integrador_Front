import './styles.css'

export default function Header() {

    return (
        <div>
            <header className='header'>
                <h1 style={{marginLeft: '35%'}}>Chaks Movie Catalog</h1>
                <form>
                    <input type="text" name='Search' placeholder='Search'/>
                    <input type="submit" value="Search" />
                </form>
            </header>
        </div>
    )
}
