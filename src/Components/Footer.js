import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
	background-color: black;
	color: white;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

const Footer = props => {
	return (
		<StyledFooter>
			<p>&copy BuzzCo 2019</p>
			<p>a bunch of links here</p>
		</StyledFooter>
	);
};

export default Footer;
