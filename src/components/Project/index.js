function Project({ currentlySelected }) {
    if (currentlySelected === 'About Me') {
        return (
            <section>
                <div>

                </div>
                <div>
                    
                </div>
            </section>
        )
    } else if (currentlySelected === 'Portfolio') {
        return (
            <h1>Portfolio</h1>
        )
    }
}

export default Project;
