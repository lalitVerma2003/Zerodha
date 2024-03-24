import React from 'react'
import { Box,Button,HStack } from '@chakra-ui/react';
import { useState } from 'react';

const Pagination = ({setLeft}) => {

    const [index, setIndex] = useState(6);

    const styles = {
        color: "white",
        backgroundColor: "blue",
        margin: "1",
        width: "20%",
    }

    const buttonStyles = {
        backgroundColor: "white",
        color: "grey",
        margin: "1"
    }

    const handleChange=(idx)=>{
        setIndex(idx);
        const left=Math.floor(Math.random()*100)+1;
        setLeft(`${left}%`);
    }

    return (
        <>
            <Button variant={"unstyled"} cursor={"pointer"} onClick={() => handleChange(1)} sx={index === 1 ? styles : buttonStyles}  >5min</Button>
            <Button variant={"unstyled"} cursor={"pointer"} sx={index === 2 ? styles : buttonStyles} onClick={() => handleChange(2)}  >10min</Button>
            <Button variant={"unstyled"} cursor={"pointer"} sx={index === 3 ? styles : buttonStyles} onClick={() => handleChange(3)}  >15min</Button>
            <Button variant={"unstyled"} cursor={"pointer"} sx={index === 4 ? styles : buttonStyles} onClick={() => handleChange(4)}  >30min</Button>
            <Button variant={"unstyled"} cursor={"pointer"} sx={index === 5 ? styles : buttonStyles} onClick={() => handleChange(5)}  >1hour</Button>
            <Button variant={"unstyled"} cursor={"pointer"} sx={index === 6 ? styles : buttonStyles} onClick={() => handleChange(6)}  >1day</Button>
        </>
    )
}

export default Pagination
