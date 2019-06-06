import React from "react";
import styled from "styled-components";

//component imports
import FullscreenHeader from "./Components/FullscreenHeader";
import StickyNav from "./Components/StickyNav";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";

const AppContainer = styled.div`
	width: 100vw;
	padding: 0;
	margin: 0;
	box-sizing: border-box;
`;

const App = () => {
	return (
		<AppContainer>
			<StickyNav />
			<FullscreenHeader />
			<MainContent />
			<Footer />
		</AppContainer>
	);
};

export default App;
