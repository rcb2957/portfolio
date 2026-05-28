import { useState } from 'react'
import './App.css'

function Work() {

    return (
        <>
            <h2>Work Experience</h2>

            {/* Innovation Fellows Work Experience HTML */}
            <h3>Innovation Fellows Programe</h3>
            <p>June 2023 - August 2023</p>
            <p>Web Developer</p>
            <p>Rochester, NY</p>
            <ul>
                <li>Collaborated on a team of two other developers to revamp Resonant Technology Group&apos;s website to appeal to their target demographic</li>
                <li>Examined Resonant Technology Group&apos;s website to find aspects of it that can be improved by the team</li>
                <li>Led the development team in using HTML, CSS, JavaScript to rebuild the website from the ground up</li>
                <li>Improved the quality and user experience of the website which would be later used by the company</li>
            </ul>

            {/* Excellus Blue Cross Blue Shield Experience HTML */}
            <h3>Excellus Blue Cross Blue Shield </h3>
            <p>January 2023 - May 2023</p>
            <p>Software Testing Intern</p>
            <p>Rochester, NY</p>
            <ul>
                <li>Collaborated on a small team to develop automated tests for the company portal to test if the insurance claim statuses matched the expected claim statuses</li>
                <li>Utilized Java alongside Selenium and CSS to retrieve elements from the webpage and use them in tests</li>
                <li>Created automated tests for the webpage that would be used by the company</li>
                <li>Trained in Selenium, workflows, JUnit, and Python</li>
            </ul>

            {/* M&T Bank Experience HTML */}
            <h3>M&T Bank</h3>
            <p>June 2022 - August 2022</p>
            <p>Software Developer Intern</p>
            <p>Buffalo, NY</p>
            <ul>
                <li>Collaborated on a small Agile team to develop software for the environment dashboard meant to test the main application the team works on.</li>
                <li>Utilized Angular and created methods to make SOAP and REST API calls to get data from the backend server.</li>
                <li>Improved UI of the dashboard to facilitate usability using Bootstrap and TypeScript</li>
                <li>Saved the company approximately $200,000 to $400,000</li>
                <li>Trained in Cloud Computing, Communication, Python Bootcamp, Fraud Prevention, Cybersecurity</li>
            </ul>
        </>
    );
}

export default Work