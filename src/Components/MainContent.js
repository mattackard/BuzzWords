import React from "react";
import styled from "styled-components";

import ContactForm from "./ContactForm";

const Wrapper = styled.div`
	width: 100%;
	margin: auto;
`;

const Section = styled.div`
	border: 2px solid black;
`;

const Content = styled.div`
	width: 60%;
	margin: 4rem auto;
`;

const SubHeading = styled.h2`
	font-size: 3rem;
	font-weight: bold;
`;

const SectionText = styled.p`
	font-size: 1.5rem;
`;

const TeamImageContainer = styled.ul`
	list-style: none;
`;

const TeamImage = styled.img`
	width: 20rem;
	height: 20rem;
	border-radius: 50%;
	object-fit: cover;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const MainContent = props => {
	return (
		<Wrapper>
			<Section>
				<Content>
					<SubHeading>Our Story</SubHeading>
					<SectionText id="our-story">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						In in fringilla tellus, non cursus lectus. Cras
						pellentesque, arcu ut ullamcorper aliquet, odio enim
						placerat lorem, nec vehicula turpis magna ac odio.
						Pellentesque hendrerit pellentesque mauris, ac
						scelerisque metus faucibus id. Duis congue vestibulum
						felis eget aliquam. Morbi libero diam, vestibulum vel
						scelerisque a, sagittis sit amet purus. Aliquam mi
						dolor, pharetra vitae elit ut, auctor fermentum urna.
						Suspendisse potenti. Fusce vulputate posuere varius.
						Aenean interdum quam in lorem vehicula auctor. Proin vel
						ex nec sem sollicitudin porta eu at urna. Vestibulum ac
						nisi in nisi posuere feugiat in sit amet nisi.
						Suspendisse ut laoreet est. Donec laoreet est sed
						maximus convallis. In a dictum metus, ut mattis nulla.
						Sed nulla nulla, faucibus vel augue vitae, laoreet
						bibendum leo. Donec ac tempus eros. Vestibulum ante
						ipsum primis in faucibus orci luctus et ultrices posuere
						cubilia Curae; Cras sed volutpat ligula. Duis vitae leo
						sed velit venenatis iaculis. Donec mattis mattis quam eu
						efficitur. Praesent ex augue, fringilla vitae
						consectetur vel, dictum non leo. Nam nulla metus,
						finibus non libero in, tempus suscipit odio. Sed non
						erat a leo ultrices consectetur. Nam non purus id libero
						porta congue. Curabitur orci ante, aliquet in lacus ac,
						pharetra ultricies nisi.
					</SectionText>
				</Content>
			</Section>
			<Section>
				<Content>
					<SubHeading>What We Do</SubHeading>
					<SectionText id="what-we-do">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						In in fringilla tellus, non cursus lectus. Cras
						pellentesque, arcu ut ullamcorper aliquet, odio enim
						placerat lorem, nec vehicula turpis magna ac odio.
						Pellentesque hendrerit pellentesque mauris, ac
						scelerisque metus faucibus id. Duis congue vestibulum
						felis eget aliquam. Morbi libero diam, vestibulum vel
						scelerisque a, sagittis sit amet purus. Aliquam mi
						dolor, pharetra vitae elit ut, auctor fermentum urna.
						Suspendisse potenti. Fusce vulputate posuere varius.
						Aenean interdum quam in lorem vehicula auctor. Proin vel
						ex nec sem sollicitudin porta eu at urna. Vestibulum ac
						nisi in nisi posuere feugiat in sit amet nisi.
						Suspendisse ut laoreet est. Donec laoreet est sed
						maximus convallis. In a dictum metus, ut mattis nulla.
						Sed nulla nulla, faucibus vel augue vitae, laoreet
						bibendum leo. Donec ac tempus eros. Vestibulum ante
						ipsum primis in faucibus orci luctus et ultrices posuere
						cubilia Curae; Cras sed volutpat ligula. Duis vitae leo
						sed velit venenatis iaculis. Donec mattis mattis quam eu
						efficitur. Praesent ex augue, fringilla vitae
						consectetur vel, dictum non leo. Nam nulla metus,
						finibus non libero in, tempus suscipit odio. Sed non
						erat a leo ultrices consectetur. Nam non purus id libero
						porta congue. Curabitur orci ante, aliquet in lacus ac,
						pharetra ultricies nisi.
					</SectionText>
				</Content>
			</Section>
			<Section>
				<Content>
					<SubHeading>Why Buzz</SubHeading>
					<SectionText id="why-buzz">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						In in fringilla tellus, non cursus lectus. Cras
						pellentesque, arcu ut ullamcorper aliquet, odio enim
						placerat lorem, nec vehicula turpis magna ac odio.
						Pellentesque hendrerit pellentesque mauris, ac
						scelerisque metus faucibus id. Duis congue vestibulum
						felis eget aliquam. Morbi libero diam, vestibulum vel
						scelerisque a, sagittis sit amet purus. Aliquam mi
						dolor, pharetra vitae elit ut, auctor fermentum urna.
						Suspendisse potenti. Fusce vulputate posuere varius.
						Aenean interdum quam in lorem vehicula auctor. Proin vel
						ex nec sem sollicitudin porta eu at urna. Vestibulum ac
						nisi in nisi posuere feugiat in sit amet nisi.
						Suspendisse ut laoreet est. Donec laoreet est sed
						maximus convallis. In a dictum metus, ut mattis nulla.
						Sed nulla nulla, faucibus vel augue vitae, laoreet
						bibendum leo. Donec ac tempus eros. Vestibulum ante
						ipsum primis in faucibus orci luctus et ultrices posuere
						cubilia Curae; Cras sed volutpat ligula. Duis vitae leo
						sed velit venenatis iaculis. Donec mattis mattis quam eu
						efficitur. Praesent ex augue, fringilla vitae
						consectetur vel, dictum non leo. Nam nulla metus,
						finibus non libero in, tempus suscipit odio. Sed non
						erat a leo ultrices consectetur. Nam non purus id libero
						porta congue. Curabitur orci ante, aliquet in lacus ac,
						pharetra ultricies nisi.
					</SectionText>
				</Content>
			</Section>
			<Section>
				<Content>
					<SubHeading>Our Team</SubHeading>
					<TeamImageContainer>
						<li>
							<TeamImage
								src=".\media\team1.jpg"
								alt="team member 1"
							/>
						</li>
						<li>
							<TeamImage
								src=".\media\team2.jpg"
								alt="team member 2"
							/>
						</li>
						<li>
							<TeamImage
								src=".\media\team3.jpg"
								alt="team member 3"
							/>
						</li>
						<li>
							<TeamImage
								src=".\media\team4.jpg"
								alt="team member 4"
							/>
						</li>
						<li>
							<TeamImage
								src=".\media\team5.jpg"
								alt="team member 5"
							/>
						</li>
					</TeamImageContainer>
					<SectionText id="our-team">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						In in fringilla tellus, non cursus lectus. Cras
						pellentesque, arcu ut ullamcorper aliquet, odio enim
						placerat lorem, nec vehicula turpis magna ac odio.
						Pellentesque hendrerit pellentesque mauris, ac
						scelerisque metus faucibus id. Duis congue vestibulum
						felis eget aliquam. Morbi libero diam, vestibulum vel
						scelerisque a, sagittis sit amet purus. Aliquam mi
						dolor, pharetra vitae elit ut, auctor fermentum urna.
						Suspendisse potenti. Fusce vulputate posuere varius.
						Aenean interdum quam in lorem vehicula auctor. Proin vel
						ex nec sem sollicitudin porta eu at urna. Vestibulum ac
						nisi in nisi posuere feugiat in sit amet nisi.
						Suspendisse ut laoreet est. Donec laoreet est sed
						maximus convallis. In a dictum metus, ut mattis nulla.
						Sed nulla nulla, faucibus vel augue vitae, laoreet
						bibendum leo. Donec ac tempus eros. Vestibulum ante
						ipsum primis in faucibus orci luctus et ultrices posuere
						cubilia Curae; Cras sed volutpat ligula. Duis vitae leo
						sed velit venenatis iaculis. Donec mattis mattis quam eu
						efficitur. Praesent ex augue, fringilla vitae
						consectetur vel, dictum non leo. Nam nulla metus,
						finibus non libero in, tempus suscipit odio. Sed non
						erat a leo ultrices consectetur. Nam non purus id libero
						porta congue. Curabitur orci ante, aliquet in lacus ac,
						pharetra ultricies nisi.
					</SectionText>
				</Content>
			</Section>
			<ContactForm />
		</Wrapper>
	);
};

export default MainContent;
