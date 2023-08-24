import "./App.css";
import Home from "../features/Home/Home";
import VideoEmbed from "../features/Home/components/VideoEmbed/VideoEmbed";

function App() {
    const HandleNavButton = (button) => {
        let elementId;

        if (button === "content") {
            elementId = "content-title";
        } else if (button === "projects") {
            elementId = "playlist-title";
        }
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div id="container">
            <div className="bg-img">
                <nav id="nav-bar">
                    <ul className="nav-buttons">
                        <li>home</li>
                        <li onClick={() => HandleNavButton("content")}>
                            Conteúdo
                        </li>
                        <li onClick={() => HandleNavButton("projects")}>
                            Projetos
                        </li>
                    </ul>
                </nav>
                <Home />
            </div>
            <div className="bg-img2">
                <main id="main-content">
                    <div>
                        <p id="content-title">Conteúdo:</p>
                        <div className="video-responsive">
                            <VideoEmbed embedId="ZOkOWn14Vhw" />
                            <VideoEmbed embedId="OKfpmqNwEhI" />
                        </div>
                    </div>
                    {/* <Projects /> */}
                </main>
            </div>

            {/* <footer>
                <ul>
                    <p>Contato:</p>
                    <li>
                        <a
                            href="mailto:allanbickelmiranda02120@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            allanbickelmiranda02120@gmail.com
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com/allanbickel/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            @allanbickel
                        </a>
                    </li>
                    <li>+55 31 99152-5737</li>
                </ul>
            </footer> */}
        </div>
    );
}

export default App;
