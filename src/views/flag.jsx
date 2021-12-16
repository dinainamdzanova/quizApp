import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Img, Num, Space, Text } from "../components/quizStyle";
import { getQuiz } from "../store/quizSlice";

const Flag = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const [randomAnswer, setRandomAnswer] = useState([]);
  const [correct, setCorrect] = useState();

  useEffect(() => {
    dispatch(getQuiz());
  }, [dispatch]);

  function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  useEffect(() => {
    setIndex(randomInteger(0, 250));
  }, [correct]);

  useEffect(() => {
    if (state.status === "fulfilled") {
      let array = [];
      array.splice(
        randomInteger(0, 3),
        0,
        state.quizzes[randomInteger(0, 250)]?.name?.common
      );
      array.splice(
        randomInteger(0, 3),
        0,
        state.quizzes[randomInteger(0, 250)]?.name?.common
      );
      array.splice(
        randomInteger(0, 3),
        0,
        state.quizzes[randomInteger(0, 250)]?.name?.common
      );
      array.splice(randomInteger(0, 3), 0, state.quizzes[index]?.name?.common);
      console.log(index);
      setRandomAnswer(array);
    }
  }, [correct, state.status]);

  function check(answer) {
    if (answer === state.quizzes[index]?.name?.common) {
      setCorrect(correct + 1);
    } else {
      return (
        <div>
          <Text weight="bold" size="48" color="#1D355D">
            Results
          </Text>
          <Text>
            You got <Num>{correct}</Num> correct answers
          </Text>
          <Space y="70" />
          <Link className="link" to="/flag">
            Try again
          </Link>
        </div>
      );
    }
  }

  return (
    <>
      {state.status === "fulfilled" ? (
        <>
          {console.log(index)}
          <Img src={state.quizzes[index]?.flags?.png} alt="" />
          <Space y="12" />
          <Text weight="bold" size="24" color="#2F527B">
            Which country does this flag belong to?
          </Text>
          <Space y="30" />
          <>
            <Button onClick={() => check(randomAnswer[0])}>
              A <Space x="20" /> {randomAnswer[0]}
            </Button>
            <Space y="15" />
            <Button onClick={() => check(randomAnswer[1])}>
              B <Space x="20" /> {randomAnswer[1]}
            </Button>
            <Space y="15" />
            <Button onClick={() => check(randomAnswer[2])}>
              C <Space x="20" /> {randomAnswer[2]}
            </Button>
            <Space y="15" />
            <Button onClick={() => check(randomAnswer[3])}>
              D <Space x="20" /> {randomAnswer[3]}
            </Button>
          </>
        </>
      ) : null}
    </>
  );
};

export default Flag;
