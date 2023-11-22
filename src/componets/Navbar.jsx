import "./Navbar.css";
export default function Navbar(){
    return(
        <nav className="nav">
            <a href="/ " className="site-title">The_Pradheep</a>
            <ul>
                <li className="active">
                    <a href="/about">About me</a>
                </li>
                <li>
                <a href="#section4">Mywork</a>
                </li>
                <li>
                <a href="/contactme">ContactMe</a>
                </li>
            </ul>

        </nav>

    );
}