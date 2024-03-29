import React from "react";
import styled from "styled-components";
import { device } from "../Breakpoints";

const Wrapper = styled.div`
	position: sticky;
	top: 0;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.7);
`;

const NavList = styled.ul`
	display: flex;
	flex-direction: row;
	list-style: none;
	justify-content: center;
	padding: 0;
	margin: 0;

	@media ${device.laptopL} {
		flex-direction: row;
	}
`;

const NavLogo = styled.div`
	font-family: "megrim", sans-serif;
	color: white;
	font-size: 2rem;
	&:hover {
		color: white;
	}
`;

const NavItem = styled.li`
	padding: 0.5rem;
	font-size: 1rem;
	font-weight: 200;
	color: rgb(200, 200, 200);
	&:hover {
		color: white;
	}

	@media ${device.laptopL} {
		font-size: 1.4rem;
		padding: 1rem 3rem;
		font-size: 1.4rem;
	}
`;

const StickyNav = props => {
	return (
		<Wrapper>
			<NavList>
				<NavLogo onClick={() => props.scrollToElement("header")}>
					<p
						style={{
							display: props.headerInNav ? "inline" : "none",
							fontWeight: "bold",
						}}>
						Buzz
					</p>
					<p
						style={{
							display: props.headerInNav ? "inline" : "none",
							fontWeight: 200,
						}}>
						Co
					</p>
				</NavLogo>
				<NavItem onClick={() => props.scrollToElement("our-story")}>
					Our Story
				</NavItem>
				<NavItem onClick={() => props.scrollToElement("what-we-do")}>
					What We Do
				</NavItem>
				<NavItem onClick={() => props.scrollToElement("why-buzz")}>
					Why Buzz
				</NavItem>
				<NavItem onClick={() => props.scrollToElement("our-team")}>
					Our Team
				</NavItem>
				<NavItem onClick={() => props.scrollToElement("contact-us")}>
					Contact Us
				</NavItem>
			</NavList>
		</Wrapper>
	);
};

export default StickyNav;
