import "./Section.css";
export default function Section(){
    return(
        <div className="section"> 
            <a href="#section1" >Section11</a>
            <a href="#section2" >Section22</a>
            <a href="#section3" >Section33</a>
            <a href="#section4" >Section44</a>


            <section id="section1" className="blue"><h1 className="h1">Pradheep</h1><p>VS Code supports multiple cursors for fast simultaneous edits. You can add secondary cursors (rendered thinner) with Alt+Click. Each cursor operates independently based on the context it sits in. A common way to add more cursors is with Shift+Alt+Down or Shift+Alt+Up that insert cursors below or above.</p></section>
            <section id="section2"className="red"><h1 className="h1">Hari</h1><p>VS Code supports multiple cursors for fast simultaneous edits. You can add secondary cursors (rendered thinner) with Alt+Click. Each cursor operates independently based on the context it sits in. A common way to add more cursors is with Shift+Alt+Down or Shift+Alt+Up that insert cursors below or above.</p></section>
            <section id="section3"className="dark"><h1 className="h1">Ruba</h1><p>VS Code supports multiple cursors for fast simultaneous edits. You can add secondary cursors (rendered thinner) with Alt+Click. Each cursor operates independently based on the context it sits in. A common way to add more cursors is with Shift+Alt+Down or Shift+Alt+Up that insert cursors below or above.</p></section>
            <section id="section4"className="pink"><h1 className="h1">Kani</h1><p>VS Code supports multiple cursors for fast simultaneous edits. You can add secondary cursors (rendered thinner) with Alt+Click. Each cursor operates independently based on the context it sits in. A common way to add more cursors is with Shift+Alt+Down or Shift+Alt+Up that insert cursors below or above.</p></section>
        </div>
    );
}