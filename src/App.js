import React, { useState, useEffect, Fragment } from "react"
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"

import GlobalStyle from "./theme/GlobalStyle"
import workoutService from "./services/workouts"
import styled from "styled-components"
import TopNavigation from "./components/TopNavigation/TopNavigation"
import TabMenu from "./components/TabMenu/TabMenu"
import Workout from "./components/Workout/Workout"

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
  const [workouts, setWorkouts] = useState([])
  // const [newNote, setNewNote] = useState("")
  // const [showAll, setShowAll] = useState(true)
  // const [errorMessage, setErrorMessage] = useState(null)

  const [shoulderPress, setShoulderPress] = useState("")
  const [deadlift, setDeadlift] = useState("")
  const [benchPress, setBenchPress] = useState("")
  const [squat, setSquat] = useState("")

  useEffect(() => {
    workoutService.getAll().then(initialWorkouts => {
      setWorkouts(initialWorkouts)
    })
  }, [])

  console.log(workouts)

  return (
    <Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <TopNavigation />
        <TabMenu />
        <MainContainer>
          <Switch>
            <Route path="/overview">
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
            </Route>
            <Route path="/workout">
              <Workout workouts={workouts} />
            </Route>
            <Route path="/settings">ok settings</Route>
          </Switch>
        </MainContainer>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
