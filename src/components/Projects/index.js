import React from "react"
import styled from "styled-components"
import scalingUp from "../../images/projects/scalingup.png"
import Card from "./Card"
import data from "./DataProjects"

const Image = styled.img`
	width:100%;
	height:90%;
	object-fit:cover;
`

const Projects = () => {
	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col col-12 mb-3">
					<h2 className="text-center">Some Of My Projects</h2>
				</div>

				{
					data.map((project, index) => (
						<div key={index} className="col col-12 col-md-6 col-lg-4 col-xl-3 mt-3">
							<Card
								title={project.title}
								description={`${project.description.slice(0,70)}...`}
								image={project.image}
							></Card>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default Projects