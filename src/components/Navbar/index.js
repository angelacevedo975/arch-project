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
		name: "Unidad 1",
		path: "/unity1",
	},
	{
		name: "Unidad 2",
		path: "/unity2",
	},
	{
		name: "Unidad 3",
		path: "/unity3",
	},
	{
		name: "Unidad 4",
		path: "/unity4",
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
				<a className="navbar-brand" href="/">
					Arquitectura De Computadoras
				</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						{
							routes.map((route, index) => (
								<Link key={index}
									className={`nav-link ${""/*route.path === currentWindow && "active"*/}`}
									aria-current="page"
									to={route.path}
									onClick={() => setCurrentWindow(route.path)}
									style={{marginRight:"15px"}}
								>{route.name}</Link>
							))
						}
						<a className="btn btn-secondary" href="https://github.com/angelacevedo975/arch-project" rel="noreferrer" target="_BLANK">Ver Código</a>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar