import './App.css'

function About() {

    return (  
        <div className="grid" id="about">

            <div className="section">

                {/* About Me Description */}
                <h2>About Me</h2>
                <p>
                    I'm a software developer who enjoys building full-stack web applications and continuously learning new technologies.
                    I've developed applications using Java, Python, TypeScript, and C#, and have experience building software for 
                    projects in the finance, healthcare, agricultural technology, and higher education industries.  My experience 
                    includes developing responsive React front ends, building REST APIs, and working with SQL databases to create 
                    data-driven applications. Through these projects, I've learned how to build software that is maintainable, reliable, 
                    and focused on solving real-world problems.  As an early-career software engineer, I'm excited to continue growing my 
                    technical skills, collaborating with other developers, and contributing to meaningful software projects.
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
                <div className ="cert_div">
                    <img className="cert" src="/aws-certified-cloud-practitioner.png" alt="AWS Cert"></img>
                    <a href="https://www.credly.com/badges/1a9485ab-cc9b-4a97-a000-0da103309c05">AWS Certified Cloud Practitioner (May 2026)</a>
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
