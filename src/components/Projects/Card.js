import React from "react"
import styled from "styled-components"
import scalingUp from "../../images/projects/scalingup.png"

const StyledCard = styled.div`
	transition:.3s all ease-out;
	cursor: pointer;
	&:hover{
		transform:scale(1.12,1.12);
	}
`

const Card = ({ title, description, image }) => {
	return (
		<StyledCard className="card" style={{ width: '18rem' }}>
			<img src={image} className="card-img-top" alt="..." />
			<div className="card-body">
				<h4 className="card-title text-center">{title}</h4>
				<p className="card-text text-center">{description}</p>
			</div>
		</StyledCard>
	)
}

export default Card