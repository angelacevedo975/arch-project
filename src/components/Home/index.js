import React from "react"
import styled from "styled-components"
import UnityPreview from "../UnityPreview"
import Projects from "../Projects"
import Technologies from "../Technologies"
import unityData from "./unityData"

const HeroWrapper = styled.div`
	height:480px;
	width:100%;
	top:0;
	left:0;
	z-index:1;
	max-height:670px;
	display:flex;
	flex-direction:row;
	justify-content:center;
	align-items:center;
	/*background: #8E2DE2;
	background: -webkit-linear-gradient(to right, #4A00E0, #8E2DE2);
	background: linear-gradient(to right, #4A00E0, #8E2DE2); */
	background-color: #262626;
`

const HeroContainer = styled.div`
	display:flex;
	flex-direction:row;
	justify-content:space-around;
	align-items:center;
`

const HeroContent = styled.div`
	display:flex;
	flex-direction:column;
	flex-wrap:wrap;
	justify-content:center;
	align-items:flex-start;
	padding: 10px 30px;
	@media (max-width: 767px) {
		justify-content:center;
		align-items:center;
		h1{
			font-size:45px;
			text-align:center;
		}
		p{
			font-size: 22px;
			text-align:center;
		}
  	}
`

const HeroTitle = styled.h1`
	font-size:56px;
	text-align:left;
	font-weight:700;
	line-height:1.2em;
	color:#fff;
`

const HeroText = styled.p`
	font-size: 24px;
	text-align:left;
	font-weight: 400;
	color:#fff;
`

const Home = () => {
	return (
		<>
			<HeroWrapper className="">
				<HeroContainer className="container">
					<HeroContent className="">
						<HeroTitle>Proyecto Final Arquitectura De Computadoras</HeroTitle>
						<HeroText>Hola!, mi nombre es Angel Dominguez Acevedo y este es mi proyecto de investigacion de arquitectura de computadoras.</HeroText>
						<a className="btn btn-secondary btn-lg" href="https://github.com/angelacevedo975/arch-project" rel="noreferrer" target="_BLANK">Ver Código</a>
					</HeroContent>
					<div className="d-none ">
						<img alt="mainImage" style={{ width: "100%", height: "100%" }} src="/logo512.png"></img>
					</div>
				</HeroContainer>
			</HeroWrapper>
			{
				unityData().map((unity, index) => (
					<UnityPreview
						key={index}
						unity={unity}
						inverse={index % 2 === 0 ? true : false}></UnityPreview>
				))
			}

		</>
	)
}

export default Home