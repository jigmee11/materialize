import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/typography">Typography</Link>
                </li>
                <li>
                    <Link to="/color">Color</Link>
                </li>
                <li>
                    <Link to="/buttonsAndIcons">Buttons and Icons</Link>
                </li>
                <li>
                    <Link to="/actionButton3">Action Button3</Link>
                </li>
                <li>
                    <Link to="/navbar">Navbar</Link>
                </li>
                <li>
                    <Link to="/collections">Collection</Link>
                </li>
            </ul>
        </div>
    )
}
