import React, { Component } from "react";
import styled from "styled-components";
import TypeIt from "typeit";
import { device } from "../Breakpoints";

const Wrapper = styled.div`
	height: 92vh; //something weird with the space taken by the sticky nav that leaves extra space below the video at 100vh
	margin: 0;
	padding: 0;
	background-color: rgba(0, 0, 0, 0.6);
	text-align: center;

	@media ${device.laptopL} {
		text-align: left;
		height: 94vh; //something weird with the space taken by the sticky nav that leaves extra space below the video at 100vh
	}
`;

const BackgroundVideo = styled.video`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	object-fit: cover;
`;

const LogoBold = styled.h1`
	display: inline-block;
	font-family: "megrim", sans serif;
	font-size: 5rem;
	color: white;
	margin-top: 50%;

	@media ${device.laptopL} {
		display: inline-block;
		color: white;
		font-size: 12rem;
		margin: 10% 0 0 15%;
	}
`;

const LogoThin = styled.h1`
	display: inline-block;
	font-family: "megrim", sans serif;
	font-size: 5rem;
	color: white;
	font-weight: 200;
	@media ${device.laptopL} {
		font-size: 12rem;
	}
`;

const TradeMark = styled.p`
	display: inline-block;
	font-size: 0.7rem;
	color: white;

	@media ${device.laptopL} {
		font-size: 1rem;
	}
`;

const Subtitle = styled.h1`
	color: white;
	font-size: 2rem;
	margin: auto;

	@media ${device.laptopL} {
		font-size: 3rem;
		margin: 0 0 0 55%;
	}
`;

const Typed = styled.p`
	color: white;
	font-size: 1.5rem;
	margin: auto;

	@media ${device.laptopL} {
		font-size: 2rem;
		margin: 0 0 0 55%;
	}
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

	isInView = () => {
		console.log(this);
		console.log(this.getBoundingClientRect().top);
	};

	render() {
		return (
			<Wrapper>
				<BackgroundVideo
					src="./media/traffic.mp4"
					autoPlay
					muted
					loop
				/>
				<LogoBold id="header" onscroll={() => this.isInView}>
					Buzz
				</LogoBold>
				<LogoThin>Co</LogoThin>
				<TradeMark>tm</TradeMark>
				<Subtitle>Engineering solutions</Subtitle>
				<Typed id="type-me" />
			</Wrapper>
		);
	}
}

export default FullscreenHeader;
