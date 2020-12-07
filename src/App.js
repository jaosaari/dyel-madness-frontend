import React, { useState, useEffect, Fragment } from "react"
import GlobalStyle from "./theme/GlobalStyle"
import noteService from "./services/notes"
import styled from "styled-components"
import TopNavigation from "./components/TopNavigation/TopNavigation"
import TabMenu from "./components/TabMenu/TabMenu"

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: grey;
`
const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: lightslategray;
`

const Input = styled.input``
const Label = styled.label``

const App = () => {
  const [notes, setNotes] = useState([])
  // const [newNote, setNewNote] = useState("")
  // const [showAll, setShowAll] = useState(true)
  // const [errorMessage, setErrorMessage] = useState(null)

  const [shoulderPress, setShoulderPress] = useState("")
  const [deadlift, setDeadlift] = useState("")
  const [benchPress, setBenchPress] = useState("")
  const [squat, setSquat] = useState("")

  useEffect(() => {
    noteService.getAll().then(initialNotes => {
      setNotes(initialNotes)
    })
  }, [])
  console.log(notes)

  return (
    <Fragment>
      <GlobalStyle />
      <TopNavigation />
      <TabMenu />
      <MainContainer>
        <InputWrapper>
          <Label>Standing Shoulder Press</Label>
          <Input
            type="number"
            placeholder="click here to add"
            onChange={({ target }) => setShoulderPress(target.value)}
          ></Input>
        </InputWrapper>
        <InputWrapper>
          <Label>Deadlift</Label>
          <Input
            type="number"
            placeholder="click here to add"
            onChange={({ target }) => setDeadlift(target.value)}
          ></Input>
        </InputWrapper>
        <InputWrapper>
          <Label>Bench Press</Label>
          <Input
            type="number"
            placeholder="click here to add"
            onChange={({ target }) => setBenchPress(target.value)}
          ></Input>
        </InputWrapper>
        <InputWrapper>
          <Label>Squat</Label>
          <Input
            type="number"
            placeholder="click here to add"
            onChange={({ target }) => setSquat(target.value)}
          ></Input>
        </InputWrapper>
      </MainContainer>
    </Fragment>
  )
}

export default App
