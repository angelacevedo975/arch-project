/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from "react"
import { Link } from "react-router-dom"

const routes = [
	{
		name: "Home",
		path: "/",
	},
	{
		name: "About",
		path: "/about",
	},
	{
		name: "Contact",
		path: "/contact",
	},
	{
		name: "Products",
		path: "/products",
	},
]

const Navbar = () => {

	const [currentWindow, setCurrentWindow] = React.useState("")

	React.useEffect(() => {
		const path = window.location.pathname
		setCurrentWindow(path)
	}, [currentWindow])

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" style={{zIndex:10,}}>
			<div className="container">
				<a className="navbar-brand" href="#">
					<img height="60" src="/random.svg" alt="logo-page"></img>
				</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						{
							routes.map((route, index) => (
								<Link key={index}
									className={`nav-link ${route.path === currentWindow && "active"}`}
									aria-current="page"
									to={route.path}
									onClick={() => setCurrentWindow(route.path)}
									style={{marginRight:"15px"}}
								>{route.name}</Link>
							))
						}
						<Link to="/contact" className="btn btn-secondary">Contact</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar