import React from "react"
import styled from "styled-components"

const ModalContainer = styled.div`
	position:absolute;
	left:0;
	top:0;
	width:100%;
	height:100%;
	background-color:rgba(0,0,0,.4);
	z-index:10000;
`

const Modal = () => {
	return (
		<ModalContainer>
hello
		</ModalContainer>
	)
}

export default Modal