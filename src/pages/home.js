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
                    <Link to="/actionButton">Action Button</Link>
                </li>
                <li>
                    <Link to="/navbar">Navbar</Link>
                </li>
                <li>
                    <Link to="/collections">Collection</Link>
                </li>
                <li>
                    <Link to="/grid">Grid</Link>
                </li>
                <li>
                    <Link to="/card">Cart</Link>
                </li>
                <li>
                    <Link to="/footer">Footer</Link>
                </li>
                <li>
                    <Link to="/formsAndInput">Forms And Input</Link>
                </li>
                <li>
                    <Link to="/fancyFormAndInput">Fancy Form And Input</Link>
                </li>
                <li>
                    <Link to="/chipsPagination">Chips And Pagination</Link>
                </li>
                <li>
                    <Link to="/carousel">Carousel</Link>
                </li>
            </ul>
        </div>
    )
}
