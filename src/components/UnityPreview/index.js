import React from "react"
import HeroImage from "../../images/teclogo.jpeg"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Image = styled.img`
	width:50%;
	object-fit:cover;
`

const UnityPreview = ({ inverse = false, unity }) => {
	return (
		<div className="container my-5 py-3">
			<div className="row" style={{ flexDirection: `row${inverse ? "-reverse" : ""}` }}>
				<div className="col col-12 col-lg-6" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
					<Image src={HeroImage}></Image>
				</div>
				<div className="col col-12 col-lg-6" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
					<h2 className="text-center mb-2">{unity.title}</h2>
					<h4 className="text-center mb-2">{unity.subtitle}</h4>
					<p className="text-center">{
						unity.preview
					}
					</p>
					<Link className="btn btn-primary" style={{width:"200px", justifySelf:"center", alignSelf:"center"}} to={unity.linkURL}>{unity.linkText}</Link>
				</div>
			</div>
		</div>
	)
}

export default UnityPreview