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
                    onClick={() => setCurrentlySelected('Project')}
                    className={currentlySelected === 'Project' && 'active-nav'}
                >Projects</p>
                <p 
                    onClick={() => setCurrentlySelected('Contact')}
                    className={currentlySelected === 'Contact' && 'active-nav'}
                >Contact</p>
            </nav>
        </header>
    )
}

export default Header;