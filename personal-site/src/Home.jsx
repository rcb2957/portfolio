import './App.css'

function Home() {

    return (
        <>
            
            <h1>Hello, I'm Riley Brotz</h1>
            <div className="grid">
                {/* Text to the left of portrait */}
                <div className="section">
                    {/* Summary */}
                    <h2>Summary</h2>
                    <p> I enjoy turning ideas into working systems, learning through real-world projects, and collaborating with others to solve practical problems.</p>

                    {/* Certifications Section */}
                    <h2>Certifications</h2>
                    <p>AWS Certified Cloud Practitioner</p>
                    <p>May 2026</p>

                    {/* Achievements Section */}
                    <h2>Achievements</h2>
                    <h3>Pathfinding Algorithm</h3>
                    <p> Achieved first place in a competition aimed at developing a pathfinding algorithm that calculates the shortest path 
                        between all of the listed destinations in the Buffalo area.</p>

                    {/* Links to other accounts */}
                    <h2>Links</h2>
                    <a href="https://www.github.com/rcb2957">Personal GitHub</a>
                    <br/>
                    <a href="https://www.linkedin.com/in/riley-brotz">LinkedIn</a>

                </div>

                {/* Portrait of Riley Brotz */}
                <div className="section">
                    <img id="portrait" src="/portrait.jpg" alt="Riley Brotz" />
                </div>
            </div>
        </>
    );
}

export default Home
