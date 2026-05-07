import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Riley Brotz</h1>
            <h2>Summary</h2>
            <p> I&apos;m interested in turning ideas into working systems, learning through real projects, and collaborating with others to solve practical problems.</p>
            <h2>Achievements</h2>
            <h3>Pathfinding Algorithm</h3>
            <p> Achieved first place in a competition aimed at developing a pathfinding algorithm that calculates the shortest path 
                between all of the listed destinations in the Buffalo area.</p>
            <h2>Links</h2>
            <a href="https://www.github.com/rcb2957">Personal GitHub</a>
            <a href="https://www.linkedin.com/in/riley-brotz">LinkedIn</a>
        </>
    )
}