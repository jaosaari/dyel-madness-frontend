import React from "react"
import styled from "styled-components"
import Tab from "./Tab"
import { Link } from "react-router-dom"

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
      <Tab>
        <Link to="/overview">Overview</Link>
      </Tab>
      <Tab>
        <Link to="/workout">Workout</Link>
      </Tab>
      <Tab>
        <Link to="/settings">Settings</Link>
      </Tab>
    </MenuWrapper>
  )
}

export default TabMenu
