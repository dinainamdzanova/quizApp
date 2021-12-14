import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Space, Text } from "../components/quizStyle";
import { getQuiz } from "../store/quizSlice";

const Capital = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const [randomAnswer, setRandomAnswer] = useState([]);

  useEffect(() => {
    dispatch(getQuiz());
  }, [dispatch]);

  function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  useEffect(() => {
    setIndex(index + randomInteger(0, 250));
  }, []);

  useEffect(() => {
    if (state.status === "fulfilled") {
      let array = [];
      array.splice(
        randomInteger(0, 3),
        0,
        state.quizzes[randomInteger(0, 250)]?.capital[0]
      );
      array.splice(
        randomInteger(0, 3),
        0,
        state.quizzes[randomInteger(0, 250)]?.capital[0]
      );
      array.splice(
        randomInteger(0, 3),
        0,
        state.quizzes[randomInteger(0, 250)]?.capital[0]
      );
      array.splice(randomInteger(0, 3), 0, state.quizzes[index]?.capital[0]);
      setRandomAnswer(array);
    }
  }, [state.status]);

  return (
    <>
      {state.status === "fulfilled" ? (
        <>
          <Text weight="bold" size="24" color="#2F527B">
            The capital of {state.quizzes[index]?.name?.common} is...
          </Text>
          <Space y="30" />
          <>
            <Button>
              A <Space x="20" /> {randomAnswer[0]}
            </Button>
            <Space y="15" />
            <Button>
              B <Space x="20" /> {randomAnswer[1]}
            </Button>
            <Space y="15" />
            <Button>
              C <Space x="20" /> {randomAnswer[2]}
            </Button>
            <Space y="15" />
            <Button>
              D <Space x="20" /> {randomAnswer[3]}
            </Button>
          </>
        </>
      ) : null}
    </>
  );
};

export default Capital;
