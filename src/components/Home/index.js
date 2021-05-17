import React from "react"
import styled from "styled-components"
import QuienesSomos from "../QuienesSomos"
import Projects from "../Projects"
import Technologies from "../Technologies"

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
	background: #8E2DE2;
	background: -webkit-linear-gradient(to right, #4A00E0, #8E2DE2);
	background: linear-gradient(to right, #4A00E0, #8E2DE2); 
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
						<HeroTitle>Welcome to my Portfolio</HeroTitle>
						<HeroText>My name is Angel Acevedo and I am web developer, ¿Do you wanna know more about me?</HeroText>
						<button className="btn btn-secondary btn-lg">Contact Me</button>
					</HeroContent>
					<div className="d-none d-md-block">
						<img alt="mainImage" style={{ width: "100%", height: "100%" }} src="/logo512.png"></img>
					</div>
				</HeroContainer>
			</HeroWrapper>
			<QuienesSomos></QuienesSomos>
			<Technologies></Technologies>
			<Projects></Projects>
			
		</>
	)
}

export default Home