import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Photo from "./image/photo.jpg";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  margin-left: 10%;
  font-size: 20px;
  color: #282828;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 100px;
  margin-bottom: 100px;
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
  margin-bottom: 80px;

  @media only screen and (min-width : 768px) {

  }
`;
const Section = styled.div`
  font-size: 17px;
  width: 27%;
  color: #707070;
`;
const SubContent = styled.div`
  width: 73%;
`;
const SubContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const ContentName = styled.div`
  font-size: 20px;
  font-weight: 600;
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

`;
const Duration = styled.div`
  font-size: 14px;
`;
const Description = styled.ul`
  font-size: 17px;
`;


function App() {
  return (
    <Container>
      <Header>
        <div>
          <Image src={Photo}/>
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
      <Content>
        <Section>About</Section>
        <SubContent>
          I'm a motivated full-stack engineer who has experience building and scaling web applications and services in various domains.

          I'm also passionate about open source contributions, working in high impact environments with frequent deployments, and helping growing development teams build great products.
        </SubContent>
      </Content>
      <Content>
        <Section>Experience</Section>
        <SubContent>
          <SubContentHeader>
            <Link href="https://www.google.com/"><ContentName>HKMA</ContentName></Link>
            <Duration>JUNE 2019 - JAN 2020</Duration>
          </SubContentHeader>
          <Role>Analyst programmer</Role>
          <Description>
            <li>
            Assisted in business intelligence system enhancement to cope with regulatory requirements for prudential banking 
            supervision and explored the opportunity for enterprise systems integrations between the HKMA and banks
            </li>
          </Description>
        </SubContent>
      </Content>
      <Content>
        <Section>Projects</Section>
        <SubContent>
          <SubContentHeader>
            <Link href="https://www.google.com/"><ContentName>HKMA</ContentName></Link>
            <Duration>JUNE 2019 - JAN 2020</Duration>
          </SubContentHeader>
          <Role>Analyst programmer</Role>
          <Description>
            <li>
              Assisted in business intelligence system enhancement to cope with regulatory requirements for prudential banking 
              supervision and explored the opportunity for enterprise systems integrations between the HKMA and banks
            </li>
          </Description>
        </SubContent>
      </Content>
      <Content>
        <Section>Skills</Section>
        <SubContent>
          <SubContentHeader>
            <ContentName>Language</ContentName>
          </SubContentHeader>
          <Role>
            Korean (Native), English (Fluent), Mandarin (Fluent)
          </Role>
        </SubContent>
      </Content>
    </Container>
  );
}

export default App;
