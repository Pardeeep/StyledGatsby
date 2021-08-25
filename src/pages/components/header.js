import React from "react"
import styled from "styled-components"

import medal from "./images/medal2.jpg"
import color from "./images/color.jpg"

const Main = styled.div`
  margin-top: 1rem;
`

const Tags = styled.p`
  color: #a1a1a1;
  font-size: 0.75rem;
  font-weight: bold;
`

const Designer = styled.h1`
  font-size: 4.5rem;
  margin: 0;
  padding-bottom: 5px;
`

const Orange = styled.span`
  color: #ff511a;
`

const Flex = styled.div`
  display: flex;
  align-items: center;
`

const Contact = styled.button`
  padding: 10px;
  background-color: #43b97f;
  color: white;
  border: none;
  border-radius: 3px;
  margin: 0 20px 0 0px;
`

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  width: 10rem;
`

const Medal = styled.img`
  background-image: url("./images/medal2.jpg");
  height: 35px;
  width: 35px;
  margin-right: 10px;
  padding: 5px;
  border-radius: 50%;
`

const Cards = styled.div`
  margin-top: 1em;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const Card1 = styled.div`
  width: 15em;
  padding: 1.5rem;
  background-color: #ffffff;
  border-radius: 10px;
`

const Card2 = styled.div`
  width: 20em;
  padding: 1.5rem;
  background-color: #ffffff;
  margin-left: 2rem;
  border-radius: 10px;
  @media (max-width: 768px) {
    margin: 15px 0 0 0;
    width: 15em;
  }
`

const Color = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: white;
`

const Title = styled.h1`
  font-size: 1.5rem;
`

const Subtitle = styled.p`
  font-weight: bold;
`
const Describe = styled.p`
  font-size: 0.7rem;
  color: #aaaaaa;
`

const Lists = styled.ul`
  list-style-type: none;
  height: 40%;
  margin: 0 0 0 -2.5rem;
  font-weight: bold;
`
const Li = styled.li`
  margin-bottom: 0.6rem;
`
const Description = styled.p`
color: #a5a5a5;
@media (max-width: 768px) {
  text-align: center;
  width: 15em;
}
`

const Div = styled.div`
@media (max-width: 768px) {
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
}
`

const header = () => {
  return (
    <Main>
      <Div>
        <Tags> Strategy.Design.Development</Tags>
        <Designer>
          Design<Orange>er</Orange>
        </Designer>
        <Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </Description>
        <Flex>
          <Contact>Contact. Mr</Contact>
          <Card>
            <Medal src={medal} alt="Medal" /> Best Design Awardr
          </Card>
        </Flex>
      </Div>
      <Cards>
        <Card1>
          <Color src={color} alt="color" />
          <Title>MRstudio</Title>
          <Subtitle>Design is a part of the</Subtitle>
          <Describe>
            communication arts, design is something you plan to create,
          </Describe>
          <Contact>Read Now</Contact>
        </Card1>
        <Card2>
          <Color src={color} alt="color" />
          <Title>My awesome services</Title>

          <Lists>
            <Li>😊 Design</Li>
            <Li>🥰 Development</Li>
            <Li>🤔 UI/Ux Research</Li>
          </Lists>
          <Contact>Continue</Contact>
        </Card2>
      </Cards>
    </Main>
  )
}

export default header
