import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import "./App.css"
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from "./components/Navbar";
import Unity1 from "./components/Unity/unity1"
import Unity2 from "./components/Unity/unity2"
import Unity3 from "./components/Unity/unity3"
import Unity4 from "./components/Unity/unity4"
import Zoom from "react-reveal/Zoom"
import Fade from "react-reveal/Fade"
import React, { useEffect } from "react"

function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}


function App() {

	return (
		<Router>
			<ScrollToTop></ScrollToTop>
			<Navbar></Navbar>
			<Switch>
				<Route exact path="/">
					<Fade>
						<Home></Home>
					</Fade>
				</Route>
				<Route path="/unity1">
					<Zoom>
						<Unity1></Unity1>
					</Zoom>
				</Route>
				<Route path="/unity2">
					<Zoom>
						<Unity2></Unity2>
					</Zoom>
				</Route>
				<Route path="/unity3">
					<Zoom>
						<Unity3></Unity3>
					</Zoom>
				</Route>
				<Route path="/unity4">
					<Zoom>
						<Unity4></Unity4>
					</Zoom>
				</Route>
			</Switch>
			<Footer></Footer>
		</Router>
	);
}

export default App;
