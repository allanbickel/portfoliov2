import "./Home.css";
import VideoEmbed from "./components/VideoEmbed/VideoEmbed";

function Home() {
    return (
        <>
            <div className="main-text">
                <h1
                    style={{
                        margin: "0px",
                        color: "#d3d3d3",
                        fontSize: "180px",
                    }}
                >
                    ALLAN BICKEL
                </h1>
                <h2 style={{ marginBottom: "0", paddingTop: "100px" }}>
                    Produtor musical, técnico de gravação e mixagem, cantor,
                    compositor, multi-instrumentista, editor de som
                </h2>
                <h2 style={{ marginTop: "0", paddingBottom: "20px" }}>
                    apaixonado.
                </h2>
            </div>
        </>
    );
}

export default Home;
