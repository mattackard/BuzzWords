import React, { Component } from "react";
import styled from "styled-components";
import { device } from "../Breakpoints";

const backgroundColor = "rgb(210,210,210)";

const Wrapper = styled.div`
	background-color: rgb(50, 50, 60);
	text-align: center;
`;

const Title = styled.h1`
	font-size: 2.5rem;
	text-align: center;
	margin: 0;
	padding: 2rem 0 0.5rem;
	color: white;

	@media ${device.laptopL} {
		font-size: 4rem;
		padding: 2rem 0;
	}
`;

const SubText = styled.aside`
	color: white;
	text-align: center;
`;

const SubjectField = styled.input`
	display: block;
	width: 75%;
	margin: 2rem auto;
	height: 1rem;
	border-radius: 1em;
	padding: 1rem;
	font-size: 1rem;
	border: 3px solid ${backgroundColor};

	@media ${device.laptopL} {
		width: 60%;
		margin: 2rem auto;
		height: 2rem;
		font-size: 1.2rem;
	}
`;

const MessageField = styled.textarea`
	display: block;
	border-radius: 1em;
	padding: 1rem;
	width: 75%;
	margin: 2rem auto;
	font-size: 1rem;
	min-height: 20vh;
	overflow: auto;
	border: 3px solid ${backgroundColor};

	@media ${device.laptopL} {
		width: 60%;
		margin: 2rem auto;
		font-size: 1.2rem;
		min-height: 20vh;
	}
`;

const SubmitButton = styled.button`
	font-size: 1rem;
	text-align: center;
	padding: 1rem 3rem;
	margin: 0 0 2rem;
	border-radius: 1em;
	background-color: white;
	border: 3px solid ${backgroundColor};

	@media ${device.laptopL} {
		font-size: 1.4rem;
		padding: 1rem 3rem;
		margin: 0 0 4rem;
	}
`;

class ContactForm extends Component {
	submitContact = event => {
		event.preventDefault();
	};

	render() {
		return (
			<Wrapper>
				<Title>Contact Us</Title>
				<SubText>We'd love to hear from you!</SubText>
				<form
					action="mailto:mattackard@gmail.com"
					method="post"
					enctype="text/plain">
					<SubjectField type="text" placeholder="Subject" />
					<MessageField
						id="contact-us"
						placeholder="Type your message here"
					/>
					<SubmitButton
						type="submit"
						onClick={e => this.submitContact(e)}>
						Send
					</SubmitButton>
				</form>
			</Wrapper>
		);
	}
}

export default ContactForm;
