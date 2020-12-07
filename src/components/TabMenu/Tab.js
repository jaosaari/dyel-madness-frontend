import { checkPropTypes } from "prop-types"
import React from "react"
import styled from "styled-components"

const TabWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  border: 1px solid red;
  border-radius: 4px 4px 0 0;
  padding: 1rem;
  ${"" /* margin-top: 1rem; */}
  margin: 1rem 1rem 0;
  ${"" /* &:first-child {
    margin-right: 1rem;
  } */}
`

const Tab = props => {
  return <TabWrapper>{props.children}</TabWrapper>
}

export default Tab
