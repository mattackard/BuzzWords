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

const NavItem = styled.li`
	padding: 1rem 3rem;
	font-size: 1.4rem;
	font-weight: 200;
	color: rgb(200, 200, 200);
`;

const StickyNav = props => {
	return (
		<Wrapper>
			<NavList>
				<NavItem>Our Story</NavItem>
				<NavItem>What we do</NavItem>
				<NavItem>Why Buzz</NavItem>
				<NavItem>Our Team</NavItem>
				<NavItem>Contact Us</NavItem>
			</NavList>
		</Wrapper>
	);
};

export default StickyNav;
