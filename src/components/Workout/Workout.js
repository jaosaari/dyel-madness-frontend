import React, { useState, useEffect, Fragment } from "react"
import styled from "styled-components"

const List = styled.ul``
const ListTitle = styled.h2``
const ListSubtitle = styled.p``
const ListItem = styled.li`
  display: flex;
  border-top: 2px solid grey;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem;
`

const Section = styled.div`
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: lightslategray;
  display: flex;
  flex-direction: column;
`
const Button = styled.button`
  background-color: #9191b1;
  width: 8rem;
  height: 6rem;
  cursor: pointer;
  align-self: center;
`
const Checkbox = styled.input`
  height: 2rem;
  width: 2rem;
`
const Input = styled.input``

const Workout = ({ workouts }) => {
  // const [currentWeek, setCurrentWeek] = useState(1)
  const [week, setWeek] = useState([])
  const [workoutOfTheDay, setWorkoutOfTheDay] = useState(["empty"])
  const [started, setStarted] = useState(false)

  const cycle = [
    {
      week: 1,
      reps: "5",
      firstSet: { name: "first set", percentage: 0.65, reps: 5 },
      secondSet: { name: "second set", percentage: 0.75, reps: 5 },
      thirdSet: { name: "third set", percentage: 0.85, reps: 5 },
    },
    {
      week: 2,
      reps: "3",
      firstSet: { name: "first set", percentage: 0.7, reps: 3 },
      secondSet: { name: "second set", percentage: 0.8, reps: 3 },
      thirdSet: { name: "third set", percentage: 0.9, reps: 3 },
    },
    {
      week: 3,
      reps: "5/3/1",
      firstSet: { name: "first set", percentage: 0.75, reps: 5 },
      secondSet: { name: "second set", percentage: 0.85, reps: 3 },
      thirdSet: { name: "third set", percentage: 0.95, reps: 1 },
    },
    {
      week: 4,
      reps: "5",
      firstSet: { name: "first set", percentage: 0.4, reps: 5 },
      secondSet: { name: "second set", percentage: 0.5, reps: 5 },
      thirdSet: { name: "third set", percentage: 0.6, reps: 5 },
    },
  ]

  useEffect(() => {
    setWeek(cycle.find(({ week }) => week === workoutOfTheDay.week))
  }, [workoutOfTheDay])

  console.log("week updated: ", week)

  console.log("workoutOfTheDay updated: ", workoutOfTheDay)
  const handleStart = () => {
    console.log("Button clicked & HandleStart initiated")
    setWorkoutOfTheDay(workouts.find(({ next }) => next === true))
    setStarted(true)
    // setCurrentWeek(workoutOfTheDay.week)
    // createAddArrays()
  }
  // const thisWeek = cycle.find(({ week }) => week === currentWeek)
  // console.log(thisWeek)
  // const createAddArrays = () => {
  //   const data = new Array(5).fill().map((value, index) => ({
  //     id: index,
  //     title: "faker.lorem.words(5)",
  //     body: "faker.lorem.sentences(4)",
  //   }))
  //   return data
  // }

  const AssistOneData = new Array(5).fill().map((value, index) => ({
    id: index + 1,
    ...workoutOfTheDay.assLiftOne,
  }))

  const AssistTwoData = new Array(5).fill().map((value, index) => ({
    id: index + 1,
    ...workoutOfTheDay.assLiftTwo,
  }))

  console.log(AssistOneData)
  return (
    <>
      {started ? (
        <>
          <Section>
            <h1>WORKOUT</h1>
            <p>Week {workoutOfTheDay.week}</p>
            <p>{new Date().toLocaleDateString("fi-FI").split("")}</p>
          </Section>
          {week ? (
            <>
              <Section>
                <List>
                  <ListTitle>{workoutOfTheDay.lift}</ListTitle>
                  <ListSubtitle>Main lift</ListSubtitle>
                  <ListItem>
                    <p>{week.firstSet.name}</p>
                    <p>
                      {week.firstSet.percentage * (workoutOfTheDay.max * 0.9)}
                    </p>
                    <Checkbox type="checkbox" />
                  </ListItem>
                  <ListItem>
                    <p>{week.secondSet.name}</p>
                    <p>
                      {week.secondSet.percentage * (workoutOfTheDay.max * 0.9)}
                    </p>
                    <Checkbox type="checkbox" />
                  </ListItem>
                  <ListItem>
                    <p>{week.thirdSet.name}</p>
                    <p>
                      {week.thirdSet.percentage * (workoutOfTheDay.max * 0.9)}
                    </p>
                    <Checkbox type="checkbox" />
                  </ListItem>
                </List>
              </Section>
              <Section>
                <List>
                  <ListTitle>{workoutOfTheDay.assLiftOne.name}</ListTitle>
                  <ListSubtitle>Assistant lift 1</ListSubtitle>
                  {AssistOneData.map((item, index) => (
                    <ListItem key={index}>
                      <p>Set {item.id}</p>
                      <Input />
                      <Checkbox type="checkbox" />
                    </ListItem>
                  ))}
                </List>
              </Section>
              <Section>
                <List>
                  <ListTitle>{workoutOfTheDay.assLiftTwo.name}</ListTitle>
                  <ListSubtitle>Assistant lift 2</ListSubtitle>
                  {AssistTwoData.map((item, index) => (
                    <ListItem key={index}>
                      <p>Set {item.id}</p>
                      <Input />
                      <Checkbox type="checkbox" />
                    </ListItem>
                  ))}
                </List>
              </Section>
            </>
          ) : (
            <p>bummer</p>
          )}
        </>
      ) : (
        <Section>
          <Button onClick={() => handleStart()}>Start training</Button>
        </Section>
      )}
    </>
  )
}

export default Workout
