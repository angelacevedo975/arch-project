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
					{/* Facebook */}
					<LinkItem href="https://www.facebook.com/angeleduardo.dominguezacevedo" target="_blank" className="btn btn-outline-light btn-floating m-1 mx-2"><i className="fab fa-facebook-f" /></LinkItem>
					{/* Linkedin */}
					<LinkItem href="https://www.linkedin.com/in/angel-acevedo-839846151" target="_blank" className="btn btn-outline-light btn-floating m-1 mx-2"><i className="fab fa-linkedin-in" /></LinkItem>
					{/* Github */}
					<LinkItem href="https://github.com/angelacevedo975" target="_blank" className="btn btn-outline-light btn-floating m-1 mx-2"><i className="fab fa-github" /></LinkItem>
				</section>
			</div>
		</footer>
	)
}

export default Footer