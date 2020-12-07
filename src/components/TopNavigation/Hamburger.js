import React from "react"
import styled from "styled-components"

const HamburgerWrapper = styled.div`
  width: 60px;
  height: 45px;
  margin: 1rem;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
`

const Bar = styled.span`
  display: block;
  position: absolute;
  height: 9px;
  width: 100%;
  background: #d3531a;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
  &:nth-child(1) {
    top: 0px;
  }
  &:nth-child(2),
  :nth-child(3) {
    top: 18px;
  }
  &:nth-child(4) {
    top: 36px;
  }
`
// Animation not implemented, found here:
// https://codepen.io/designcouch/pen/Atyop

const Hamburger = () => {
  return (
    <HamburgerWrapper>
      <Bar />
      <Bar />
      <Bar />
      <Bar />
    </HamburgerWrapper>
  )
}

export default Hamburger
