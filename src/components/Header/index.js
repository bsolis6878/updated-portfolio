function Header({ currentlySelected, setCurrentlySelected }) {
    return (
        <header>
            <h1>Bryan Solis</h1>
            <nav>
                <p 
                    onClick={() => setCurrentlySelected('About Me')}
                    className={currentlySelected === 'About Me' && 'active-nav'}
                >About Me</p>
                <p 
                    onClick={() => setCurrentlySelected('Portfolio')}
                    className={currentlySelected === 'Portfolio' && 'active-nav'}
                >Portfolio</p>
                <p 
                    onClick={() => setCurrentlySelected('Contact')}
                    className={currentlySelected === 'Contact' && 'active-nav'}
                >Contact</p>
                <p 
                    onClick={() => setCurrentlySelected('Resume')}
                    className={currentlySelected === 'Resume' && 'active-nav'}>Resume</p>
            </nav>
        </header>
    )
}

export default Header;