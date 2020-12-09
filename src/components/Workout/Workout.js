import React, { useState, useEffect, Fragment } from "react"
import styled from "styled-components"

const List = styled.ul``
const ListTitle = styled.h2``
const ListSubtitle = styled.p``
const ListItem = styled.li`
  border-top: 2px solid grey;
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

const Workout = ({ workouts }) => {
  const [max, setMax] = useState(75)
  const [liftName, setLiftName] = useState("Shoulder Press")
  const [currentWeek, setCurrentWeek] = useState(1)
  const [workoutOfTheDay, setWorkoutOfTheDay] = useState(["empty"])
  const [started, setStarted] = useState(false)

  // const workouts = [
  //   {
  //     lift: "shoulder press",
  //     max: 75,
  //     next: true,
  //     week: 1,
  //     queue: 1,
  //     assLiftOne: { name: "Dip", sets: 5, reps: 15 },
  //     assLiftTwo: { name: "Chin-Up", sets: 5, reps: 10 },
  //   },
  //   {
  //     lift: "deadlift",
  //     max: 150,
  //     next: false,
  //     week: 1,
  //     queue: 2,
  //     assLiftOne: { name: "Good Morning", sets: 5, reps: 12 },
  //     assLiftTwo: { name: "Hanging Leg Raise", sets: 5, reps: 15 },
  //   },
  //   {
  //     lift: "bench press",
  //     max: 100,
  //     next: false,
  //     week: 1,
  //     queue: 3,
  //     assLiftOne: { name: "Dumbbell Chest Press", sets: 5, reps: 15 },
  //     assLiftTwo: { name: "Dumbbell Row", sets: 5, reps: 10 },
  //   },
  //   {
  //     lift: "squat",
  //     max: 120,
  //     next: false,
  //     week: 1,
  //     queue: 4,
  //     assLiftOne: { name: "Leg Press", sets: 5, reps: 15 },
  //     assLiftTwo: { name: "Leg Curl", sets: 5, reps: 10 },
  //   },
  // ]

  console.log("workouts state in Workout.js Component: ", workouts)
  // const workoutOfTheDay = workouts.find(({ next }) => next === true)

  // console.log("hehe", workoutOfTheDay)

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

  const thisWeek = cycle.find(({ week }) => week === currentWeek)

  //   Week 1 = 65, 75, 85%, Sets 3, Reps 5
  //   Week 2 = 70, 80, 90%, Sets 3, Reps 3
  //   Week 3 = 75, 85, 95%, Sets 3, Reps 5/3/1
  //   Week 4 = 40, 50, 60%, Sets 3, Reps 5

  const handleStart = () => {
    console.log("Button clicked & HandleStart initiated")
    setWorkoutOfTheDay(workouts.find(({ next }) => next === true))
    setStarted(true)
  }
  console.log("wod: ", workoutOfTheDay)

  const data = new Array(5).fill().map((value, index) => ({
    id: index,
    title: "faker.lorem.words(5)",
    body: "faker.lorem.sentences(4)",
  }))

  return (
    <>
      {started ? (
        <>
          <Section>
            <h1>WORKOUT</h1>
            <p>Week {workoutOfTheDay.week}</p>
            <p>{new Date().toLocaleDateString("fi-FI").split("")}</p>
          </Section>
          <Section>
            <List>
              <ListTitle>{workoutOfTheDay.lift}</ListTitle>
              <ListSubtitle>Main lift</ListSubtitle>
              <ListItem>
                <p>{thisWeek.firstSet.name}</p>
                <p>{thisWeek.firstSet.percentage * (max * 0.9)}</p>
              </ListItem>
              <ListItem>
                <p>{thisWeek.secondSet.name}</p>
                <p>{thisWeek.secondSet.percentage * (max * 0.9)}</p>
              </ListItem>
              <ListItem>
                <p>{thisWeek.thirdSet.name}</p>
                <p>{thisWeek.thirdSet.percentage * (max * 0.9)}</p>
              </ListItem>
            </List>
          </Section>
          <Section>
            <List>
              <ListTitle>Dip</ListTitle>
              <ListSubtitle>Assistant lift 1</ListSubtitle>
              {data.map(item => (
                <ListItem>
                  <h3>
                    {item.title} - {item.id}
                  </h3>
                  <p>{item.body}</p>
                </ListItem>
              ))}
            </List>
          </Section>
          <Section>
            <List>
              <ListTitle>Chin-Up</ListTitle>
              <ListSubtitle>Assistant lift 2</ListSubtitle>
            </List>
          </Section>
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
