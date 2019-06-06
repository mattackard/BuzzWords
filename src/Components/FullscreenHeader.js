import React, { Component } from "react";
import styled from "styled-components";
import TypeIt from "typeit";

const Wrapper = styled.div`
	height: 100vh;
	overflow: hidden;
	margin: 0;
	padding: 0;
	background-color: rgba(0, 0, 0, 0.6);
`;

const BackgroundVideo = styled.video`
	position: absolute;
	top: 0;
	width: 100vw;
	z-index: -1;
`;

const LogoBold = styled.h1`
	display: inline-block;
	font-family: "megrim", sans serif;
	font-size: 12rem;
	color: white;
	margin: 10% 0 0 10%;
`;

const LogoThin = styled.h1`
	display: inline-block;
	font-family: "megrim", sans serif;
	font-size: 12rem;
	color: white;
	font-weight: 200;
`;

const TradeMark = styled.p`
	display: inline-block;
	font-size: 1rem;
	color: white;
`;

const Subtitle = styled.h1`
	color: white;
	font-size: 3rem;
	margin: 0 0 0 50%;
`;

const Typed = styled.p`
	color: white;
	font-size: 2rem;
	margin: 0 0 0 50%;
`;

class FullscreenHeader extends Component {
	componentDidMount() {
		new TypeIt("#type-me", {
			lifeLike: true,
			loop: true,
		})
			.type("that solve real-world problems")
			.pause(700)
			.delete()
			.type("that maximize efficiency")
			.pause(700)
			.delete()
			.type("that enable the future")
			.pause(700)
			.delete()
			.type("that promote wellbeing")
			.pause(700)
			.delete()
			.type("that change the world")
			.pause(700)
			.go();
	}
	render() {
		return (
			<Wrapper>
				<BackgroundVideo
					src="./media/traffic.mp4"
					autoPlay
					muted
					loop
				/>
				<LogoBold>Buzz</LogoBold>
				<LogoThin>Co</LogoThin>
				<TradeMark>tm</TradeMark>
				<Subtitle>Engineering solutions</Subtitle>
				<Typed id="type-me" />
			</Wrapper>
		);
	}
}

export default FullscreenHeader;
