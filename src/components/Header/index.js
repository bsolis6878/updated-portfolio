function Header({ currentlySelected, setCurrentlySelected }) {
    return (
        <header>
            <h1>Bryan Solis</h1>
            <nav>
                <p 
                    onClick={() => setCurrentlySelected('About Me')}
                    className={currentlySelected === 'About Me' && 'active'}
                >About Me</p>
                <p 
                    onClick={() => setCurrentlySelected('Portfolio')}
                    className={currentlySelected === 'Portfolio' && 'active'}
                >Portfolio</p>
                <p 
                    onClick={() => setCurrentlySelected('Contact')}
                    className={currentlySelected === 'Contact' && 'active'}
                >Contact</p>
                <p 
                    onClick={() => setCurrentlySelected('Resume')}
                    className={currentlySelected === 'Resume' && 'active'}>Resume</p>
            </nav>
        </header>
    )
}

export default Header;