function Project({ currentlySelected }) {
    if (currentlySelected === 'About Me') {
        return (
            <section>
                <div className='profile-picture'>
                    <img src={require('../../assets/profile.JPG')} alt='Image of developer Bryan Solis' />
                </div>
                <div className='about-me'>
                    <h3>Welcome to my portfolio!</h3>
                    <p>
                        As an aspiring web developer, I have hands on experience with many web development technologies including
                        HTML, CSS, front-end and back-end Javascript, the MERN stack (MongoDB, Express.js, React, and Node.js),
                        MySQL using Sequelize, Git and GitHub, third-party and server-side APIs, and the Model-View-Controller (MVC)
                        structure. I believe my ability to grasp new concepts and apply them effectively would be a great asset to
                        any project, so thank you in advance for your consideration!
                    </p>
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
