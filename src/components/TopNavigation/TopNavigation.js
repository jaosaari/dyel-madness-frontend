import React from "react"
import styled from "styled-components"
import Hamburger from "./Hamburger"

const Navbar = styled.nav`
  display: flex;
  background-color: black;
  width: 100%;
  ${"" /* height: 2rem; */}
`

const TopNavigation = () => {
  return (
    <Navbar>
      <Hamburger />
      Navbar
    </Navbar>
  )
}

export default TopNavigation
