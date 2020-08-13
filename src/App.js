import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Photo from "./images/photo.jpg";
import Background from "./images/background.jpg";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  margin-left: 10%;
  font-size: 20px;
  color: #282828;
  line-height: 1.5;
  background-image: url(${Background});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 100px;
  margin-bottom: 100px;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const Image = styled.img`
  width: 150px;
  border-radius: 100px;
  margin-right: 50px;
  border: 2px solid #b290d4;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
  font-size: 22px;
  color: #707070;
`;
const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 120px;
  font-size: 25px;
  color: #282828;
  margin-top: 25px;
`;
const Name = styled.div`
  font-size: 45px;
  font-weight: 600;
  color: #282828;
  margin-top: 10px;
  margin-bottom: 5px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 77%;
  margin-bottom: 30px;

  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;
const ContentWithMargin = styled(Content)`
  margin-bottom: 80px;
`;
const Section = styled.div`
  font-size: 17px;
  width: 27%;
  color: #707070;
  @media only screen and (max-width: 1024px) {
    margin-bottom: 20px;
    width: 100%;
  }
`;
const SubContent = styled.div`
  width: 73%;
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
const Item = styled.div`
  margin-bottom: 40px;
`;
const ItemWithSmallerMargin = styled.div`
  margin-bottom: 20px;
`;
const SubContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const ContentName = styled.div`
  font-size: 20px;
  font-weight: 600;
  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
const Organization = styled.span`
  font-size: 14px;
  font-weight: normal;
  color: #707070;
`;
const ContentNameWithLink = styled(ContentName)`
  border-bottom: 2px solid #b290d4;
`;
const Link = styled.a`
  text-decoration: none;
  color: #282828;
  :visited {
    color: #282828;
  }
  :hover {
    color: #b290d4;
  }
`;
const IconLink = styled(Link)`
  color: #707070;
  :visited {
    color: #707070;
  }
  :hover {
    color: #b290d4;
  }
`;
const Role = styled.div`
  font-size: 16px;
`;
const Duration = styled.div`
  font-size: 14px;
`;
const Description = styled.ul`
  font-size: 16px;
`;
const Li = styled.li`
  margin-bottom: 10px;
`;

const Experiences = [
  {
    name: "JPMorgan Chase & Co.",
    path: "https://www.jpmorganchase.com/",
    duration: "JULY 2020 ⎯ AUG 2020",
    role: "Summer Analyst",
    description: [
      "Worked on Social Good Project as a frontend developer",
      "Created a web application that meet the needs of a non-profit client, FoodBank Singapore"
    ],
  },
  {
    name: "Hong Kong Monetary Authority (HKMA)",
    path: "https://www.hkma.gov.hk/eng/",
    duration: "JUNE 2019 ⎯ JAN 2020",
    role: "Analyst Programmer, Student Placement",
    description: [
      "Assisted in business intelligence system enhancement to cope with regulatory requirements for prudential banking supervision and explored the opportunity for enterprise systems integrations between the HKMA and banks",
      "Assisted in constructing financial and statistical data analysis with business intelligent tools and SQL developer",
      "Provided technical support for production systems and automated repetitive tasks with SQL and Excel VBA ",
    ],
  },
];

const Projects = [
  {
    name: "Muto Farm (Farming Game Application)",
    path: "https://apps.apple.com/hk/app/muto-farm/id1522153669?l=en",
    duration: "MAY 2020 ⎯ JULY 2020",
    language: "React Native, Google Firebase",
    description: [
      "Developed an IOS application where users can grow crops in their own virtual farm and redeem real products",
      "Implemented some key functionalities including creating a virtual farm, harvesting crops and redeeming rewards",
    ],
  },
  {
    name: "Wassup (Social Networking Website)",
    duration: "MAR 2020 ⎯ PRESENT",
    language: "React JS, Kotlin, Spring Boot",
    description: [
      "Working as a frontend developer, developing an anonymous social networking website where students in Hong Kong can share and interact around content and information anonymously",
      "Implementing some key functionalities including signing up, logging in, writing posts and commenting on posts",
    ],
  },
  {
    name: "Big Two",
    path: "https://github.com/KwanyoungLee/Big-Two",
    duration: "FEB 2019 ⎯ MAY 2019",
    language: "Java",
    description: [
      "Developed a multiplayer networked cross-platform card game",
      "Implemented some key functionalities including connecting to game server, playing game and chatting with up to four other users",
    ],
  },
]

const Skills = [
  {
    name: "Language",
    description: "Korean (Native), English (Fluent), Mandarin (Fluent)",
  },
  {
    name: "Programming Skill",
    description: "C/C++, Java, Python, JavaScript, Excel VBA",
  },
  {
    name: "Web and Database",
    description: "React.js, React Native, Node.js, SQL, MongoDB, Firebase",
  },
]
const Awards = [
  {
    name: "HKU Foundation Entrance Scholarship (Full tuition)",
    org: "HKU Foundation",
    date: "2016 ⎯ 2020",
  },
  {
    name: "Certificate of Academic Excellence",
    org: "UCSI College",
    date: "JUNE 2016",
  },
  {
    name: "Outstanding Learner Award",
    org: "Pearson Edexcel",
    date: "SEPT 2015",
  },
]

function App() {
  return (
    <Container>
      <Header>
        <div>
          <Image src={Photo} />
        </div>
        <Info>
          <Name>Lee Kwanyoung</Name>
          <div>Final year student at the University of Hong Kong</div>
          <Icons>
            <IconLink href="https://github.com/KwanyoungLee">
              <FontAwesomeIcon icon={faGithub} />
            </IconLink>
            <IconLink href="https://www.linkedin.com/in/kwanyoung-lee-08358915a/">
              <FontAwesomeIcon icon={faLinkedin} />
            </IconLink>
            <IconLink href="mailto: u3534739@connect.hku.hk">
              <FontAwesomeIcon icon={faEnvelope} />
            </IconLink>
          </Icons>
        </Info>
      </Header>
      <ContentWithMargin>
        <Section>About Me</Section>
        <SubContent>
          I am a motivated and self-driven student with a demonstrated history of 
          working in the banking industry.<br/><br/>
          I am interested in data analytics and web/app development. 
        </SubContent>
      </ContentWithMargin>
      <Content>
        <Section>Experience</Section>
        <SubContent>
          {Experiences.map((experience, index) => (
            <Item id={index}>
              <SubContentHeader>
                <Link href={experience.path}>
                  <ContentNameWithLink>{experience.name}</ContentNameWithLink>
                </Link>
                <Duration>{experience.duration}</Duration>
              </SubContentHeader>
              <Role>{experience.role}</Role>
              <Description>
                {experience.description.map((desc, index) => {
                  return <Li key={index}>{desc}</Li>;
                })}
              </Description>
            </Item>
          ))}
        </SubContent>
      </Content>
      <Content>
        <Section>Projects</Section>
        <SubContent>
          {Projects.map((project, index) => (
            <Item id={index}>
              <SubContentHeader>
                <Link href={project.path}>
                  <ContentNameWithLink>{project.name}</ContentNameWithLink>
                </Link>
                <Duration>{project.duration}</Duration>
              </SubContentHeader>
              <Role>{project.language}</Role>
              <Description>
                {project.description.map((desc, index) => {
                  return <Li key={index}>{desc}</Li>;
                })}
              </Description>
            </Item>
          ))}
        </SubContent>
      </Content>
      <Content>
        <Section>Skills</Section>
        <SubContent>
        {Skills.map((skill, index) => (
            <Item id={index}>
              <SubContentHeader>
                <ContentName>{skill.name}</ContentName>
              </SubContentHeader>
              <Role>{skill.description}</Role>
            </Item>
          ))}
        </SubContent>
      </Content>
      <ContentWithMargin>
        <Section>Awards</Section>
        <SubContent>
        {Awards.map((award, index) => (
            <ItemWithSmallerMargin id={index}>
              <SubContentHeader>
                <ContentName>
                  {award.name}{" "}
                  <Organization>{award.org}</Organization>
                </ContentName>
                <Duration>{award.date}</Duration>
              </SubContentHeader>
            </ItemWithSmallerMargin>
          ))}
        </SubContent>
      </ContentWithMargin>
    </Container>
  );
}

export default App;
