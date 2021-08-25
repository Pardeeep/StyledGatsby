import React from "react"
import styled from "styled-components"

import "@fontsource/roboto"

const Container = styled.div`
  padding: 1.5rem 3rem;
  color: #212841;
  max-width: 800px;
  margin: 0 auto;
`

export default function Layout({ children }) {
  return <Container>{children}</Container>
}
