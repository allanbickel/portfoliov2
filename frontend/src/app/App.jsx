import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../features/Home/Home";
import Projects from "../features/Projects/Projects";
import About from "../features/About/About";

function App() {
	return (
		<div id="container">
			<Router>
				<nav id="nav-bar">
					<ul id="nav-buttons">
						<li>
							<Link to="/">home</Link>
						</li>
						<li>
							<Link to="/projects">Projetos</Link>
						</li>
						<li>
							<Link to="/about">sobre</Link>
						</li>
					</ul>
				</nav>
				<main id="main-content">
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/projects" element={<Projects />}></Route>
						<Route path="/about" element={<About />}></Route>
					</Routes>
				</main>
				<footer className="footer">
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
				</footer>
			</Router>
		</div>
	);
}

export default App;
