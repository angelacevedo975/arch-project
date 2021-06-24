import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const LinkItem = styled.a`
	transition:.3s all ease-out;
	&:hover{
		transform:scale(1.2,1.2);
	}
`

const Footer = () => {
	return (
		<footer className="bg-dark text-center text-white">
			<div className="container p-4">
				<section className="">
					{/* Github */}
					<LinkItem href="https://github.com/angelacevedo975" target="_blank" className="btn btn-outline-light btn-floating m-1 mx-2"><i className="fab fa-github" /> Powered By Angel Acevedo</LinkItem>
				</section>
			</div>
		</footer>
	)
}

export default Footer