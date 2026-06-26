import './App.css'

function About() {

    return (  
        <div className="grid" id="about">

            <div className="section">

                {/* About Me Description */}
                <h2>About Me</h2>
                <p>
                    I'm a software developer with experience building applications in Java, Python, TypeScript, and C#.
                    Through multiple full-stack projects, I have worked extensively with SQL databases, building queries,
                    and integrating data-based functionality into full-stack web applications. My experience developing
                    these applications have also taught me how to utilize REST APIs and React to design better applications.  
                    I enjoy building reliable software that solves problems and growing my skills as a software engineer.
                </p>

                {/* Education Section */}
                <h2>Education</h2>
                <h3>Rochester Institute of Technology</h3>
                <p>January 2021 - May 2024</p>
                <ul>
                    <li>Bachelor of Science</li>
                    <li>Major in Software Engineering</li>
                    <li>Minor in Web Development</li>
                    <li>Graduated Cum Laude</li>
                </ul>

                {/* Certifications Section */}
                <h2>Certifications</h2>
                <div className ="subsection">
                    <img src="/aws-certified-cloud-practitioner.png" alt="AWS Cert"></img>
                    <p>AWS Certified Cloud Practitioner (May 2026)</p>
                </div>

            </div>

            <div className = "section" id="skillset">
                <div className = "subsection">
                
                    {/* Programming Languages HTML */}
                    <h2>Languages I Work With</h2>
                    <ul>
                        <li>Java</li>
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                        <li>Python</li>
                        <li>C#</li>
                        <li>TypeScript</li>
                        <li>JavaScript</li>
                        <li>JSON</li>
                        <li>XML</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>PHP</li>
                        <li>C</li>
                    </ul>

                    {/* Libraries HTML */}
                    <h2>Libraries</h2>
                    <ul>
                        <li>React</li>
                        <li>jQuery</li>
                    </ul>

                    {/* Frameworks HTML */}
                    <h2>Frameworks</h2>
                    <ul>
                        <li>Bootstrap</li>
                        <li>Angular</li>
                        <li>JUnit</li>
                        <li>pytest</li>
                        <li>Spring</li>
                        <li>Selenium</li>
                    </ul>

                </div>
                <div className = "subsection">

                {/* Development Tools HTML */}
                <h2>Development Tools</h2>
                <ul>
                    <li>GitHub</li>
                    <li>Figma</li>
                    <li>Amazon Web Services</li>
                    <li>Powershell</li>
                    <li>Git Bash</li>
                    <li>Visual Studio Code</li>
                    <li>IntelliJ IDEA</li>
                    <li>Docker</li>
                    <li>Jira</li>
                    <li>Postman</li>
                </ul>

                {/* Other Skills HTML */}
                <h2>Skills</h2>
                <ul>
                    <li>RESTful APIs</li>
                    <li>Object Oriented Programming</li>
                    <li>Software Development Lifecycle</li>
                    <li>Software Testing</li>
                    <li>Web Development</li>
                    <li>Unit Testing</li>
                    <li>Scrum</li>
                    <li>Agile Development</li>
                </ul>
                </div>
            </div>
        </div>
    );
}

export default About
