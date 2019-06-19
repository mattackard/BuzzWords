import React, { Component } from "react";
import styled from "styled-components";

//component imports
import FullscreenHeader from "./Components/FullscreenHeader";
import StickyNav from "./Components/StickyNav";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";

const AppContainer = styled.div`
	width: 100%;
	padding: 0;
	margin: 0;
	box-sizing: border-box;
`;

class App extends Component {
	state = {
		headerInNav: false,
	};

	//smooth scrolls to a given element
	scrollToElement = elementID => {
		console.log(elementID);
		let element = document.getElementById(elementID);
		if (element !== null)
			element.scrollIntoView({ behavior: "smooth", block: "center" });
	};

	render() {
		return (
			<AppContainer>
				<StickyNav
					scrollToElement={this.scrollToElement}
					headerInNav={this.state.headerInNav}
				/>
				<FullscreenHeader />
				<MainContent />
				{/* <Footer /> */}
			</AppContainer>
		);
	}
}

export default App;
