import "./Home.css";
import VideoEmbed from "./components/VideoEmbed/VideoEmbed";

function Home() {
	return (
		<>
			<div className="main-text">
				<h1>ALLAN BICKEL</h1>
				<h2 style={{ marginBottom: "0" }}>
					Produtor musical, técnico de gravação e mixagem, compositor,
					multi-instrumentista, editor de som
				</h2>
				<h2 style={{ marginTop: "0" }}>apaixonado.</h2>
				<p>Conteúdo:</p>
			</div>
			<div>
				<VideoEmbed embedId="ZOkOWn14Vhw" />
				<VideoEmbed embedId="OKfpmqNwEhI" />
			</div>
		</>
	);
}

export default Home;
