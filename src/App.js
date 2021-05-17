import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css"
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from "./components/Navbar";


function App() {
	return (
		<Router>
			<Navbar></Navbar>
			<Switch>
				<Route exact path="/">
					<Home></Home>
				</Route>
				<Route path="/about">
					<h1>About Page</h1>
				</Route>
				<Route path="/contact">
					<h1>Contact Page</h1>
				</Route>
				<Route path="/products">
					<h1>Products Page</h1>
				</Route>
			</Switch>
			<Footer></Footer>
		</Router>
	);
}

export default App;
