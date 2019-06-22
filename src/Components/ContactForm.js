import React, { Component } from "react";
import styled from "styled-components";
import { device } from "../Breakpoints";
import * as emailjs from "emailjs-com";

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
	state = {
		subject: "",
		content: "",
	};

	updateState = (param, value) => {
		this.setState({
			[param]: value,
		});
	};

	sendEmail = (templateId, subject, messageContent, userID) => {
		emailjs
			.send(
				"default_service",
				templateId,
				{
					subject,
					messageContent,
				},
				userID
			)
			.then(res => {
				this.setState({
					subject: "",
					content: "",
				});
				alert("email sent", res.status);
			})
			// Handle errors on sending email
			.catch(err => console.error("Failed to send email. Error: ", err));
	};

	submitContact = event => {
		event.preventDefault();

		this.sendEmail(
			process.env.REACT_APP_EMAILJS_TEMPLATEID,
			this.state.subject,
			this.state.content,
			process.env.REACT_APP_EMAILJS_USERID
		);
	};

	render() {
		return (
			<Wrapper>
				<Title>Contact Us</Title>
				<SubText>We'd love to hear from you!</SubText>
				<form
					action="mailto:mattackard@gmail.com"
					method="post"
					encType="text/plain"
					onSubmit={this.submitContact}>
					<SubjectField
						type="text"
						placeholder="Subject"
						onChange={e =>
							this.updateState("subject", e.target.value)
						}
						value={this.state.subject}
					/>
					<MessageField
						id="contact-us"
						placeholder="Type your message here"
						onChange={e =>
							this.updateState("content", e.target.value)
						}
						value={this.state.content}
					/>
					<SubmitButton type="submit">Send</SubmitButton>
				</form>
			</Wrapper>
		);
	}
}

export default ContactForm;
