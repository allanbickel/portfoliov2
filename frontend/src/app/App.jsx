import "./App.css";
import VideoEmbed from "../features/Home/components/VideoEmbed/VideoEmbed";
import Playlist from "../features/Projects/components/Playlist";

function App() {
    const scrollTo = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            {/* Home */}
            <header className="bgimg" id="home">
                <nav className="nav-bar">
                    <ul>
                        <li onClick={() => scrollTo("mixagem")}>Mixagem</li>
                        <li onClick={() => scrollTo("bateria")}>Bateria</li>
                        <li
                            onClick={() => scrollTo("home")}
                            style={{ padding: "20px" }}
                        >
                            ALLAN BICKEL
                        </li>
                        <li onClick={() => scrollTo("conteudo-video")}>
                            Conteúdo
                        </li>
                        <li onClick={() => scrollTo("trilha")}>Trilha</li>
                    </ul>
                </nav>
            </header>

            {/* Meu trabalho */}
            <div className="container" id="mixagem">
                <div className="content">
                    <h1>Meu Trabalho</h1>
                    <img
                        id="frame-img"
                        src={require("../assets/13.crop.jpg")}
                        style={{ width: "100%", margin: "32px 0" }}
                    />
                    <h2>
                        Produtor musical, técnico de gravação e mixagem, cantor,
                        compositor, multi-instrumentista, editor de som
                    </h2>
                    <h3>
                        <b>APAIXONADO</b>
                    </h3>
                    <p>
                        <i>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </i>
                    </p>
                    <br />
                </div>
            </div>

            {/* Background photo */}
            <div className="bgimg2" id="bateria">
                <div className="drum-txt">
                    <h1>GRAVAÇÃO DE BATERIA</h1>
                </div>
            </div>

            {/* Video */}
            <div className="content" id="conteudo-video">
                <h1 style={{ marginBottom: "50px" }}>Conteúdo</h1>
                <div className="video-responsive">
                    <VideoEmbed embedId="ZOkOWn14Vhw" />
                    <VideoEmbed embedId="OKfpmqNwEhI" />
                </div>
            </div>

            {/* Trilha Sonora Original */}
            <div className="content" id="trilha">
                <h1 style={{ padding: "1em" }}>TRILHA SONORA ORIGINAL</h1>
                <Playlist />
            </div>

            {/* Quote */}
            <div className="container quote-txt" id="botao">
                <h1>"COMO VOCÊ FAZ QUALQUER COISA É COMO VOCÊ FAZ TUDO!"</h1>

                <p style={{ fontSize: "18px !important" }}>T. Harv Eker</p>
            </div>

            {/* Footer */}
            <footer>
                <ul>
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
            </footer>
        </>
    );
}

export default App;
