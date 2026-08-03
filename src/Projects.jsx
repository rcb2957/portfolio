import './App.css'

function Projects() {

    return (
        <>
            <h2>Projects</h2>

            {/* Personal Website Project HTML */}
            <h3>Personal Website</h3>
            <p>December 2025 - July 2026</p>
            <ul>
                <li>Designed and developed a personal website to showcase my portfolio and projects</li>
                <li>Utilized HTML and CSS for structure and styling</li>
                <li>Implemented responsive design principles to ensure compatibility across devices</li>
                <li>Deployed the site on AWS by uploading the files to an S3 bucket accessed by CloudFront</li>
            </ul>

            {/* Career Readiness Dashboard Project HTML */}
            <h3>Career Readiness Dashboard</h3>
            <p>August 2023 - May 2024</p>
            <ul>
                <li>Met regularly with sponsors at SUNY Oswego to gather requirements for the product</li>
                <li>Led the team in developing an effective code review process as the code review lead</li>
                <li>Developed a webpage using TypeScript, Java, Spring, and Angular that allows users to view their profile</li>
                <li>Presented the solution to stakeholders with a tech demo included</li>
            </ul>

            {/* Advent of Code Project HTML */}
            <h3>Advent of Code Challenges 2024</h3>
            <p>March 2025 - May 2025</p>
            <ul>
                <li>Completed a series of coding challenges released during the 2024 Advent calendar</li>
                <li>Utilized programming languages such as Java, Python, Kotlin, and C#</li>
            </ul>

            {/* M&T Bank Coding Challenge */}
            <h3>Basic-Crypto-Challenge-2022 (M&T Bank)</h3>    
            <p>July 2022 - August 2022</p>
            <ul>
                <li>Developed methods for encryption and decryption of messages using caesar and vigenere cyphers.</li>
                <li>Practiced bruteforcing messages encrypted through these cyphers to test the efficiency of these encryption methods.</li>
            </ul> 

        </>
    );
}

export default Projects