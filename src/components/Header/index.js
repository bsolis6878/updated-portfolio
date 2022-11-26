function Header({ setCurrentlySelected }) {
    return (
        <header>
            <h1>Bryan Solis</h1>
            <nav>
                <p onClick={() => setCurrentlySelected('About Me')}>About Me</p>
                <p onClick={() => setCurrentlySelected('Portfolio')}>Portfolio</p>
                <p onClick={() => setCurrentlySelected('Contact')}>Contact</p>
                <p onClick={() => setCurrentlySelected('Resume')}>Resume</p>
            </nav>
        </header>
    )
}

export default Header;