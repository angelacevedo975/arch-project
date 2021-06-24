import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css"
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from "./components/Navbar";
import Unity1 from "./components/Unity/unity1"
import Unity2 from "./components/Unity/unity2"

function App() {
	return (
		<Router>
			<Navbar></Navbar>
			<Switch>
				<Route exact path="/">
					<Home></Home>
				</Route>
				<Route path="/unity1">
					<Unity1></Unity1>
				</Route>
				<Route path="/unity2">
					<Unity2></Unity2>
				</Route>
				<Route path="/unity3">
					<h1>Unity 3</h1>
				</Route>
				<Route path="/unity4">
					<h1>Unity 4</h1>
				</Route>
			</Switch>
			<Footer></Footer>
		</Router>
	);
}

export default App;
