import React from "react"
import styled from "styled-components"
import HeroImage from "../../images/svg-1.svg"

const Image = styled.img`
	width:100%;
	height:90%;
	object-fit:cover;
`

const QuienesSomos = () => {
	return (
		<div className="container my-5 py-3">
			<div className="row">
				<div className="col col-12 col-lg-6">
					<Image src={HeroImage}></Image>
				</div>
				<div className="col col-12 col-lg-6" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
					<h2 className="text-center mb-2">Who I am?</h2>
					<p>As you saw before, my name is Angel Acevedo and I have more than a year of experience working in web development 
						and almost 4 years coding and programming by myself. Actually I'm studing computer systems engineering 
						and working for an international IT company both in frontend and backend technologies. 
					</p>
				</div>
			</div>
		</div>
	)
}

export default QuienesSomos