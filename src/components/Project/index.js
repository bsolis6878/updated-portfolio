function Project({ currentlySelected }) {
    if (currentlySelected === 'About Me') {
        return (
            <section>
                <div className='intro-container'>
                    <div className='profile-picture'>
                        <img src={require('../../assets/profile.JPG')} alt='Image of developer Bryan Solis' />
                    </div>
                    <div className='about-me'>
                        <h3>Welcome to my portfolio!</h3>
                        <p>
                            As a full stack web developer, I have hands on experience with many web development technologies including
                            HTML, CSS, front-end and back-end Javascript, the MERN stack (MongoDB, Express.js, React, and Node.js),
                            MySQL using Sequelize, Git Bash and GitHub, RESTful, third-party, and server-side APIs, Apollo Client,
                            GraphQL, Handlebars.js, Bootstrap, and the Model-View-Controller (MVC) structure. I believe my ability
                            to grasp new concepts and apply them effectively would be a great asset to any project, 
                            so thank you in advance for your consideration!
                        </p>
                    </div>
                </div>
            </section>
        )
    } else if (currentlySelected === 'Project') {
        return (
            <>
                <h3 className='center'>A few of the projects I've worked on, click on the link to visit the repository or click the image to visit the deployed application!</h3>
                <section>
                    <div className='project'>
                        <a href='https://github.com/bsolis6878/job-rater' target='_blank'>Job Rater</a>
                        <p>
                            Job Rater uses the Client Server file structure with a React SPA
                            front-end and GraphQL/MongoDB back-end to create a site for leaving work
                            related reviews and blog posts.
                        </p>
                        <a href='https://blooming-stream-37548.herokuapp.com/' target='_blank'>
                            <img src={require('../../assets/job-rater.png')} alt='Image of the Job Rater website' />
                        </a>
                    </div>
                    <div className='project'>
                        <a href='https://github.com/bsolis6878/tech-blog' target='_blank'>Tech Blog</a>
                        <p>
                            Tech Blog uses the Model View Controller structure with a Handlebars.js
                            front-end, RESTful API structure, and a Sequelize/MySQL back-end to create
                            a forum site for making tech related posts.
                        </p>
                        <a href='https://aqueous-falls-42297.herokuapp.com/' target='_blank'>
                            <img src={require('../../assets/tech-blog.jpg')} alt='Image of the Tech Blog website' />
                        </a>
                    </div>
                    <div className='project'>
                        <a href='https://github.com/bsolis6878/Weather-Check' target='_blank'>Weather Check</a>
                        <p>
                            Weather Check uses Javascript to dynamically render the HTML elements
                            and a 3rd party API to query the weather of any city.
                        </p>
                        <a href='https://bsolis6878.github.io/Weather-Check/' target='_blank'>
                            <img src={require('../../assets/weather-check.jpg')} alt='Image of the Weather Check website' />
                        </a>
                    </div>
                    <div className='project'>
                        <a href='https://github.com/bsolis6878/taskinator' target='_blank'>Taskinator</a>
                        <p>
                            Taskinator uses pure Javascript to dynamically render HTML elements
                            and store data in local storage in order to create an application
                            that helps manage the progress of various tasks.
                        </p>
                        <a href='https://bsolis6878.github.io/taskinator/' target='_blank'>
                            <img src={require('../../assets/taskinator.jpg')} alt='Image of the Taskinator website' />
                        </a>
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
