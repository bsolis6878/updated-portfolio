function Project({ currentlySelected }) {
    if (currentlySelected === 'About Me') {
        return (
            <h1>About Me</h1>
        )
    } else if (currentlySelected === 'Portfolio') {
        return (
            <h1>Portfolio</h1>
        )
    }
}

export default Project;
