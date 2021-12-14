import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button, Img, Space, Text } from "../components/quizStyle";
import { getQuiz } from "../store/quizSlice";

const Flag = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [ index, setIndex ] = useState(0);
  const [ randomAnswer, setRandomAnswer ] = useState([]);

  useEffect(() => {
    dispatch(getQuiz());
  }, [dispatch]);
  console.log(state.quizzes);

  function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  useEffect(() => {
      setIndex(index + randomInteger(0, 250))
  }, [])

  useEffect(() => {
    setIndex(index + randomInteger(0, 250));
  }, []);

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
      setRandomAnswer(array);
    }
  }, [state.status]);

//   function check() {
//       if(reactDom.render(document.getElementById('button').clicked) === true) {
//           if (document.getElementById('button') === state.quizzes[index]?.capital[0]) {
//               console.log(true) 
//           }
//           else {
//               console.log(false)
//           }
//       }
//   }
//   console.log(check())

  return (
    <>
      {state.status === "fulfilled" ? (
        <>
          <Img src={state.quizzes[index]?.flags?.png} alt="" />
          <Space y="12" />
          <Text weight="bold" size="24" color="#2F527B">
            Which country does this flag belong to?
          </Text>
          <Space y="30" />
          <>
            <Button id="button">
              A <Space x="20" /> {randomAnswer[0]}
            </Button>
            <Space y="15" />
            <Button id="button">
              B <Space x="20" /> {randomAnswer[1]}
            </Button>
            <Space y="15" />
            <Button id="button">
              C <Space x="20" /> {randomAnswer[2]}
            </Button>
            <Space y="15" />
            <Button id="button">
              D <Space x="20" /> {randomAnswer[3]}
            </Button>
          </>
        </>
      ) : null}

      
    </>
  );
};

export default Flag;
