import "./Navbar.css";
export default function Navbar(){
    return(
        <nav className="nav">
            <a href="/" className="site-title">The_Pradheep</a>
            <ul>
                <li className="active">
                <a href="#home">Home</a>
                </li>
                <li>
                <a href="/resume">Resume</a>
                </li>
                <li>
                <a href="#about">About</a>
                </li>
                <li>
                <a href="/blog">Blog</a>
                </li>
                <li>
                <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                <a href="#contact">Contact</a>
                </li>
            </ul>

        </nav>

    );
}  