import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../features/Home/Home";
import Projects from "../features/Projects/Projects";

function App() {
	return (
		<div id="container">
			<Router>
				<nav id="nav-bar">
					<ul className="nav-buttons">
						<li>
							<Link to="/">home</Link>
						</li>
						<li>
							<Link to="/projects">Projetos</Link>
						</li>
					</ul>
				</nav>
				<main id="main-content">
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/projects" element={<Projects />}></Route>
					</Routes>
				</main>
				<footer>
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
