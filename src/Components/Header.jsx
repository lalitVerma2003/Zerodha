import { Button, HStack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { ArrowUpIcon } from "@chakra-ui/icons";
import Pagination from './Pagination';

const Header = ({setLeft}) => {
  // Width state for display pagination type component with header or at bottom
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleSize = () => {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    }
  }, []);

  return (
    <>
      <HStack
        w={"100%"}
        minH={"10vh"}
        backgroundColor={"#fbfdff"}
        top={"0px"}
        position={"sticky"}
        zIndex={100}
        overflow={"hidden"}
        px={5}
      >
        <VStack
          alignItems={"flex-start"}
        >
          <Text>NIFTY 50</Text>
          <Text display={"flex"} >22683.85<ArrowUpIcon boxSize={6} color={"green"} /><Text color={"green"} >(+0.35%)</Text></Text>
        </VStack>
        {(width > 700) && <HStack
          backgroundColor={"white"}
          margin={"auto"}
        >
          <Pagination setLeft={setLeft} />
        </HStack>}
      </HStack>
      {(width<=700)&&<HStack
        position={"fixed"}
        bottom={0}
        w={"100%"}
        zIndex={4}
        backgroundColor={"white"}
        justifyContent={"center"}
      >
        <Pagination setLeft={setLeft} />
      </HStack>}
    </>
  )
}

export default Header
