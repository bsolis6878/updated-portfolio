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
    } else if (currentlySelected === 'Project') {
        return (
            <>
                <h3 className='center'>A few of the projects I've worked on, click on the link to visit the repository or click the image to visit the deployed application!</h3>
                <section>
                    <div className='project-container'>
                        <div className='project'>
                            <a href='https://github.com/bsolis6878/time-2-work' target='_blank'>Time 2 Work</a>
                            <a href='https://protected-taiga-76694.herokuapp.com/' target='_blank'>
                                <img src={require('../../assets/time-2-work.jpeg')} alt='Image of the Time 2 Work website' />
                            </a>
                        </div>
                        <div className='project'>
                            <a href='https://github.com/bsolis6878/Weather-Check' target='_blank'>Weather Check</a>
                            <a href='https://bsolis6878.github.io/Weather-Check/' target='_blank'>
                                <img src={require('../../assets/weather-check.jpg')} alt='Image of the Weather Check website' />
                            </a>
                        </div>
                    </div>
                    <div className='project-container'>
                        <div className='project'>
                            <a href='https://github.com/bsolis6878/job-rater' target='_blank'>Job Rater</a>
                            <a href='https://blooming-stream-37548.herokuapp.com/' target='_blank'>
                                <img src={require('../../assets/job-rater.png')} alt='Image of the Job Rater website' />
                            </a>
                        </div>
                        <div className='project'>
                            <a href='https://github.com/bsolis6878/taskinator' target='_blank'>Taskinator</a>
                            <a href='https://bsolis6878.github.io/taskinator/' target='_blank'>
                                <img src={require('../../assets/taskinator.jpg')} alt='Image of the Taskinator website' />
                            </a>
                        </div>
                    </div>
                    <div className='project-container'>
                        <div className='project'>
                            <a href='https://github.com/bsolis6878/dog-finder' target='_blank'>Dog Finder</a>
                            <a href='https://bsolis6878.github.io/Dog-Finder/' target='_blank'>
                                <img src={require('../../assets/dog-finder.jpg')} alt='Image of the Dog Finder website' />
                            </a>
                        </div>
                        <div className='project'>
                            <a href='https://github.com/bsolis6878/tech-blog' target='_blank'>Tech Blog</a>
                            <a href='https://aqueous-falls-42297.herokuapp.com/' target='_blank'>
                                <img src={require('../../assets/tech-blog.jpg')} alt='Image of the Tech Blog website' />
                            </a>
                        </div>
                    </div>
                </section>
            </>
        )
    } else if (currentlySelected === 'Contact') {
        return (
            <section>
                <h3>I can be reached through the GitHub, Linkedin, and Twitter links below,
                    or you may reach me directly at bsolis6878@gmail.com. Thank you for
                    taking a look at my portfolio!</h3>
            </section>
        )
    }
}

export default Project;
