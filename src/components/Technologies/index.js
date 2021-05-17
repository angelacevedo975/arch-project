import React from "react"
import styled from "styled-components"
import HeroImage from "../../images/svg-1.svg"
import technologies from "./data"

const Image = styled.img`
	height:60px;
	border-radius:3px;
	margin-right:30px;
	margin-bottom:20px;
	transition:.3s all ease-out;
	&:hover{
		transform:scale(1.2,1.2);
	}
`

const ImagesContainer=styled.div`
	display:flex;
	flex-direction:row;
	justify-content:center;
	align-self:center;
	flex-wrap:wrap;
`

const Technologies = () => {
	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col col-12 mb-3">
					<h2 className="text-center">My Known Technologies</h2>
					<p className="text-center">I have experience and knowledge working with all this technologies</p>
				</div>
				<div className="col col-12 mt-4">
					<ImagesContainer>
						{
							technologies.map((item, index)=>(
								<Image src={item.logo} alt={item.name} key={index}></Image>
							))
						}
					</ImagesContainer>
				</div>
			</div>
		</div>
	)
}

export default Technologies