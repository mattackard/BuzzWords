import React from "react";
import styled from "styled-components";

import ContactForm from "./ContactForm";

const backgroundColor = "rgb(240,240,240)";

const Wrapper = styled.div`
	width: 100%;
	margin: auto;
`;

const Section = styled.div`
	border-top: 2em solid ${backgroundColor};
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	color: black;
	padding: 4rem 0;
`;

const Content = styled.div`
	width: 60%;
	margin: 0 auto;
	opacity: 1;
	padding: 4rem;
	background-color: rgba(255, 255, 255, 0.9);
	border: 6px solid ${backgroundColor};
`;

const SubHeading = styled.h2`
	font-size: 3rem;
	font-weight: bold;
	margin: 0 0 4rem;
`;

const SectionText = styled.p`
	font-size: 1.5rem;
	line-height: 1.3;
`;

const TeamImageContainer = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin: 0 0 5em -5em;
	padding: 0;
`;

const TeamImage = styled.img`
	width: 20rem;
	height: 20rem;
	border-radius: 50%;
	object-fit: cover;
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-right: -5em;
	box-shadow: 1px 1px 15px black;
	&:hover {
		opacity: 0.9;
	}
`;

const MainContent = props => {
	return (
		<Wrapper>
			<Section
				style={{
					backgroundImage: 'url("media/serverSwitch.png")',
				}}>
				<Content>
					<SubHeading>Our Story</SubHeading>
					<SectionText id="our-story">
						Buzz Co was born out of a 1 car garage in Palo Alto,
						California. We envision a cloud connected future
						enabling 10x efficiency on prem to quantify AI IoT SaaS
						infastructure throughout 5G smart cities. We're building
						new internet infrastructure to democratize access to
						data and algorithms in the age of artificial
						intelligence and machine learning. We're building the
						most advanced web-based environment for creating,
						sharing, deploying, digitizing, and discussing ad-hoc
						analysis using a variety of modern technologies. We
						believe that the way business gets done today is broken.
						That’s why we’re dedicated to simplifying work for
						everyone - from small startups to large enterprise
						companies. Buzz is a data-driven resolution platform,
						solving dire problems for both sides of the
						relationship. We sell software to the most innovative
						companies in the world. Our customers have reported more
						than $5B worth of net impact to their organizations.
						We’re the #1 player in the market and have plans to grow
						dramatically over the next few years. Each of our
						products can function as a powerful stand-alone tool or
						utilized as part of a tightly-integrated system. Our
						suite provides the most mature solution available to
						support the entire end-to-end innovation process.
					</SectionText>
				</Content>
			</Section>
			<Section
				style={{
					backgroundImage: 'url("media/wiringDiagram.png")',
				}}>
				<Content>
					<SubHeading>What We Do</SubHeading>
					<SectionText id="what-we-do">
						Buzz Co specializes in leveraging emerging technologies
						like analytics, security, cloud, mobile, and machine
						learning. It uses this technology to create “sticky” new
						customer experiences, to achieve surprising cost
						efficiencies, and to quickly deliver innovative
						solutions as one of the fastest growing digital
						transformation leaders in the industry! By creating a
						master data set, we can automate key work streams
						(reporting, budgeting, modeling, etc), and create an
						amazing user experience that provides tremendous value
						for the org.
					</SectionText>
				</Content>
			</Section>
			<Section
				style={{
					backgroundImage: 'url("media/officeMeeting.png")',
				}}>
				<Content>
					<SubHeading>Why Buzz</SubHeading>
					<SectionText id="why-buzz">
						With offices in San Francisco, London, and Bangalore,
						together we've served over 400 million consumers
						worldwide across 7 billion interactions, 38 countries,
						and 55 languages. The Buzz Co platform integrates with
						leading Marketing and sales applications to further
						streamline best-in-class go-to-market execution for
						companies of all sizes. We are a well-financed,
						fast-growing startup backed by top investors, located in
						downtown Palo Alto just minutes from Caltrain.
					</SectionText>
				</Content>
			</Section>
			<Section>
				<Content style={{ boxShadow: "0px 5px 10px gray" }}>
					<SubHeading>Our Team</SubHeading>
					<TeamImageContainer>
						<li>
							<TeamImage
								src=".\media\team1.png"
								alt="team member 1"
							/>
						</li>
						<li>
							<TeamImage
								src=".\media\team2.png"
								alt="team member 2"
								style={{ marginTop: "10em" }}
							/>
						</li>
						<li>
							<TeamImage
								src=".\media\team3.png"
								alt="team member 3"
							/>
						</li>
						<li>
							<TeamImage
								src=".\media\team4.png"
								alt="team member 4"
								style={{ marginTop: "10em" }}
							/>
						</li>
						<li>
							<TeamImage
								src=".\media\team5.png"
								alt="team member 5"
							/>
						</li>
					</TeamImageContainer>
					<SectionText id="our-team">
						Our passionate team of designers and engineers have come
						together to build a collaborative and interactive
						platform that creates meaningful activities. We are
						betting on bold people, investing in invention,
						executing scalability. If you like fast-paced,
						innovative, and fun teams who are using cutting edge
						technology to disrupt large industries, join us. Working
						with us means you’ll be challenged, surrounded by high
						quality teammates, and learn something new every day. We
						work hard for our coworkers sitting next to us and for
						our customers around the world. This starts internally:
						together we're creating a culture that embraces
						diversity and learning, humility and gratitude.
					</SectionText>
				</Content>
			</Section>
			<ContactForm />
		</Wrapper>
	);
};

export default MainContent;
