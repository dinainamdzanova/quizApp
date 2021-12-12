import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Space, Text } from "../components/quizStyle";
import { getQuiz } from "../store/quizSlice";

const Capital = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [ index, setIndex ] = useState(0);
  const [ randomAnswer, setRandomAnswer] = useState(['tekst', 'tekst', 'tekst', 'tekst'])
  const [ getAnswer, setGetAnswer ] = useState("")
  const [ correctAnswer, setCorrectAnswer ] = useState("")

  useEffect(() => {
    dispatch(getQuiz());
  }, [dispatch]);

  function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  useEffect(() => {
    setIndex(index + randomInteger(0, 250))
  }, [])

  // useEffect(() => {
  //   const ans = state.quizzes[randomInteger(0, 250)]?.capital[0]
  //   setGetAnswer(ans) 
  //   console.log(getAnswer)
  // }, [])

  useEffect(() => {
    // const ans = state.quizzes[randomInteger(0, 250)].capital[0]
    setGetAnswer(state.quizzes[randomInteger(0, 250)].capital[0]) 
    console.log(getAnswer)
    setCorrectAnswer(state.quizzes[index].capital[0])

    setRandomAnswer(randomAnswer.splice(randomInteger(0, 3), 0, getAnswer, correctAnswer))
    console.log(randomAnswer)
  }, [])

  return (
    <>
    
      {state.status === "fulfilled" ? (
        <>
        
          <Text weight="bold" size="24" color="#2F527B">
            {state.quizzes[index].name?.common} is the capital of
          </Text>
          <Space y="30" />
          <>
            <Button>
              A <Space x="20" />{console.log(state.quizzes) }
            </Button>
            <Space y="15" />
            <Button>
              B <Space x="20" /> {randomAnswer[randomInteger(0, 6)]}
            </Button>
            <Space y="15" />
            <Button>
              C <Space x="20" /> {state.quizzes[randomInteger(0, 250)].capital[0]}
            </Button>
            <Space y="15" />
            <Button>
              D <Space x="20" /> {randomAnswer}
            </Button>
          </>

        </>
      ) : null}
    </>
  );
};

export default Capital;

// state.quizzes[index].capital[0]