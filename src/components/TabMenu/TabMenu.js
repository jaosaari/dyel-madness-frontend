import React from "react"
import styled from "styled-components"
import Tab from "./Tab"

const MenuWrapper = styled.div`
  width: 100%;
  height: 6rem;
  background-color: beige;
  ${"" /* border: 1px solid red; */}
  display: flex;
  ${"" /* align-items: center; */}
  justify-content: center;
`

const TabMenu = () => {
  return (
    <MenuWrapper>
      <Tab>Overview</Tab>
      <Tab>Workout</Tab>
      <Tab>Settings</Tab>
    </MenuWrapper>
  )
}

export default TabMenu
