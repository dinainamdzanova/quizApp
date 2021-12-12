import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Button, Img, Space, Text } from '../components/quizStyle';
import { getQuiz } from '../store/quizSlice';

const Flag = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getQuiz())
    }, [dispatch])
    console.log(state.quizzes)

    return (
        <>
        {state.status === "fulfilled" ? (
            <>
                <Img src={state.quizzes.flags.png} alt=""/>
            </>
        ) : null}
        <Img src="https://picsum.photos/150" alt=""/>
        <Space y="12" />
        <Text weight="bold" size="24" color="#2F527B">Which country does this flag belong to?</Text>
        <Space y="30"/>
        <>
        <Button>
              A <Space x="20" />{" "}
              question1
            </Button>
            <Space y="15" />
            <Button >B <Space x="20" /> question2</Button>
            <Space y="15"/>
            <Button>C <Space x="20" /> question3</Button>
            <Space y="15"/>
            <Button>D <Space x="20" /> question4</Button>
        </>
        </>
    )
}

export default Flag;