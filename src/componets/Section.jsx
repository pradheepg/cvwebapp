import "./Section.css";
import "./image/night.jpg";
export default function Section(){
    return(
        <div className="section"> 
            <section id="home" className="blue"><h1 className="h1">Hey there!👋 I'm Pradheep,</h1><p> a computer science enthusiast on a journey of continuous learning and exploration.</p></section>
            <section id="about"className="red"><h1 className="h1">About</h1><p>VS Code supports multiple cursors for fast simultaneous edits. You can add secondary cursors (rendered thinner) with Alt+Click. Each cursor operates independently based on the context it sits in. A common way to add more cursors is with Shift+Alt+Down or Shift+Alt+Up that insert cursors below or above.</p></section>
            <section id="portfolio"className="dark"><h1 className="h1">Portfolio</h1><p>VS Code supports multiple cursors for fast simultaneous edits. You can add secondary cursors (rendered thinner) with Alt+Click. Each cursor operates independently based on the context it sits in. A common way to add more cursors is with Shift+Alt+Down or Shift+Alt+Up that insert cursors below or above.</p></section>
            <section id="contact"className="pink"><h1 className="h1">Contact</h1><p>VS Code supports multiple cursors for fast simultaneous edits. You can add secondary cursors (rendered thinner) with Alt+Click. Each cursor operates independently based on the context it sits in. A common way to add more cursors is with Shift+Alt+Down or Shift+Alt+Up that insert cursors below or above.</p></section>
        </div>
    );
}