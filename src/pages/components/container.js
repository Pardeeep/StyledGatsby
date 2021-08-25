import React from "react"
import styled from "styled-components"

const Section = styled.section`
  margin: 5rem auto;
  max-width: 600px;
  font-size: 1.3rem;
`

export default function Container({ children }) {
  return <Section className={`container`}>{children}</Section>
}
