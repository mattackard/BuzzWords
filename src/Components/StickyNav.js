import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	position: sticky;
	top: 0;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.7);
`;

const NavList = styled.nav`
	display: flex;
	flex-direction: row;
	list-style: none;
	justify-content: center;
`;

const NavLogo = styled.div`
	display: none;
	font-family: "megrim", sans-serif;
	color: white;
	font-size: 2rem;
	&:hover {
		color: white;
	}
`;

const NavItem = styled.li`
	padding: 1rem 3rem;
	font-size: 1.4rem;
	font-weight: 200;
	color: rgb(200, 200, 200);
	&:hover {
		color: white;
	}
`;

const StickyNav = props => {
	return (
		<Wrapper>
			<NavList>
				<NavLogo onClick={() => props.scrollToElement("header")}>
					<p style={{ display: "inline", fontWeight: "bold" }}>
						Buzz
					</p>
					<p style={{ display: "inline", fontWeight: 200 }}>Co</p>
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
