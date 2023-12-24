import "./Section.css";
import "./image/night.jpg";
export default function Section(){
    return(
        <div className="section"> 
            <section id="home" className="blue"><h4>Start<a className="point">/&gt;</a></h4><h3 className="h1">Hey there<a className="point">!</a>👋</h3><h1 className="name">I'm <a className="fam">Pradheep</a> <a className="point">,</a></h1><p> a computer science <a className="fam">enthusiast</a> on a journey of continuous learning and exploration<a className="point">.</a></p></section>
            <section id="about"className="red">
            <h1 className="h1">About Me</h1>
            <p>Hello! I'm Pradheep, a dedicated computer science student with a passion for crafting innovative solutions and exploring the endless possibilities of technology. Currently pursuing my degree in Computer Science at Dr N.G.Pasc, I thrive on the challenges and creativity that coding brings to the table.</p>
            <h2>What Sets Me Apart</h2>
            <p><ul>
                <li>Versatile Programming Skills: Proficient in languages like C, C++, Java, Python, and JavaScript, I've honed my skills through hands-on projects and coursework. I enjoy the process of solving problems and building efficient, scalable solutions.</li>
                <li>Enthusiastic Learner: Always eager to stay at the forefront of technology, I'm currently diving into the realms of React.js and machine learning. The prospect of creating dynamic, user-centric web experiences and delving into the intricacies of ML algorithms excites me.</li>
                </ul>
            </p>
            <h2>My Coding Journey</h2>
            <p>My coding journey is still in its early stages, but every project and line of code I write is a step toward becoming a proficient developer. I've worked on a variety of small-scale projects, where I've implemented algorithms and solved problems using C, C++, Java, Python, and JavaScript.</p>
            <p>While my project portfolio may be modest, each endeavor has been a valuable learning experience. I've gained insights into the importance of clean and maintainable code, and I'm continually seeking opportunities to expand my skills. The challenges I've encountered have fueled my enthusiasm for problem-solving and have motivated me to explore more complex and ambitious projects in the future.</p>
            <p>I'm currently excited about delving into React.js and machine learning, recognizing that these technologies will open new avenues for creativity and innovation in my coding journey. As I progress, I'm committed to building a diverse set of projects that showcase my growth as a developer.</p>    
            <h2>Learning and Growing</h2>
            <p>Despite having limited experience, I approach coding with curiosity and a determination to learn. I'm actively participating in online coding communities, taking courses, and engaging in hands-on exercises to enhance my understanding of software development principles.</p>
            <p>I believe that every line of code written, no matter how small, contributes to my growth as a developer. I'm passionate about building a strong foundation in programming and excited about the endless possibilities that lie ahead in my coding journey.</p>
            <h2>Beyond the Screen</h2>
            <p>While I'm at home in the world of coding, I'm also passionate about networking. Whether it's contributing to open-source projects, participating in coding competitions, or exploring the latest tech trends, I'm always seeking new ways to broaden my knowledge and skills.</p>
            
            </section>
            <section id="portfolio"className="dark"><h1 className="h1">Portfolio</h1><p>SOON!!!!</p></section>
            <section id="contact"className="pink"><h1 className="h1">Contact Me</h1><p>I'm always open to new opportunities, collaborations, or just a friendly chat about all things tech. Feel free to reach out to me through any of the following channels:</p>
            <ul>
                <li>Email: pradheepg2004@gmail.com</li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/pradheep-g">Connect with me</a></li>
                <li>GitHub: <a href="https://github.com/pradheepg">Check out my code</a></li>
            </ul></section>
        </div>
    );
}