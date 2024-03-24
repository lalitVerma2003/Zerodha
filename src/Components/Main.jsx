import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import Header from './Header'
import Indicator from './Indicator'

const Main = () => {
  // For giving margin to pointer dynamically
  const [left,setLeft]=useState(0);

  return (
    <Box
      w={{ sm: "100%", md: "90%", lg: "70%" }}
      margin={"auto"}
    >
      <Header setLeft={setLeft} />
      <Box
        w={"100%"}
        backgroundColor={"#fafcff"}
        display={"flex"}
        flexDir={{ base: "column", sm: "column", md: "column", lg: "row" }}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* First card */}
        <Box
          w={{base:"80%",sm:"60%",md:"60%",lg:"45%"}}
          backgroundColor={"#ffffff"}
          borderRadius={5}
          m={3}
        >
          <Text fontSize={"1rem"} fontWeight={"bold"} m={3} >Summary</Text>
          <Box
            w={{base:"80%",sm:"70%",md:"65%",lg:"60%"}}
            margin={"auto"}
            position={"relative"}
            mt={5}
          >
            <Image src="/CardImg.svg" margin={"auto"} p={3} />
            <Image src='/Pointer.svg' w={"5%"} position={"absolute"} top={"40%"} left={left} zIndex={2} />
          </Box>
          <HStack
            w={{base:"75%",sm:"70%",md:"70%",lg:"60%"}}
            margin={"auto"}
            justifyContent={"space-between"}
            p={2}
            mb={5}
          >
            <VStack alignItems={"center"} >
              <Text>3</Text>
              <Indicator body={"Bearish"} textColor={"red"} />
            </VStack>
            <VStack alignItems={"center"} >
              <Text>10</Text>
              <Indicator body={"Neutral"} textColor={"blue"} />
            </VStack>
            <VStack alignItems={"center"} >
              <Text>14</Text>
              <Indicator body={"Bullish"} textColor={"green"} />
            </VStack>
          </HStack>
          <Box
            w={"80%"}
            margin={"auto"}
            my={4}
          >
            <HStack
              justifyContent={"space-between"}
              px={3}
            >
              <Box>
                <Text fontSize={"1rem"} >22076.49</Text>
                <Text fontSize={"0.8rem"} fontWeight={"light"} >EMA (20)</Text>
              </Box>
              <Box >
                <Text fontSize={"1rem"} >22159.61</Text>
                <Text fontSize={"0.8rem"} fontWeight={"light"} >SMA(20)</Text>
              </Box>
              <Box >
                <Text fontSize={"1rem"} >51.48</Text>
                <Text fontSize={"0.8rem"} fontWeight={"light"} >RSI(14)</Text>
              </Box>
            </HStack>
            <HStack
              justifyContent={"space-between"}
              px={3}
            >
              <Box>
                <Text fontSize={"1rem"} >-96.92</Text>
                <Text fontSize={"0.8rem"} fontWeight={"light"} >Awesome Osc.</Text>
              </Box>
              <Box>
                <Text fontSize={"1rem"} >14.42</Text>
                <Text fontSize={"0.8rem"} fontWeight={"light"} >Macd (12, 26, 9)</Text>
              </Box>
              <Box>
                <Text fontSize={"1rem"} >-43.90</Text>
                <Text fontSize={"0.8rem"} fontWeight={"light"} >CCI (20)</Text>
              </Box>
            </HStack>
          </Box>
        </Box>
        {/* Second card */}
        <Box
          m={3}
          w={{base:"80%",sm:"60%",md:"60%",lg:"45%"}}
          backgroundColor={"#ffffff"}
          borderRadius={5}
        >
          <Text fontSize={"1rem"} fontWeight={"bold"} m={3} >Support & Resistance</Text>
          <Box
            w={{base:"80%",sm:"70%",md:"65%",lg:"60%"}}
            margin={"auto"}
            position={"relative"}
            mt={5}
          >
            <Image src="/CardImgSecond.svg" margin={"auto"} p={3} />
            <Image src='/PointerSecond.svg' w={"5%"} position={"absolute"} top={"40%"} left={left} zIndex={2} />
          </Box>
          <HStack
            w={"60%"}
            margin={"auto"}
            justifyContent={"space-between"}
            p={2}
            mb={5}
          >
            <VStack alignItems={"center"} >
              <Text>3</Text>
              <Indicator body={"Bearish"} textColor={"red"} />
            </VStack>
            <VStack alignItems={"center"} >
              <Text>10</Text>
              <Indicator body={"Neutral"} textColor={"blue"} />
            </VStack>
            <VStack alignItems={"center"} >
              <Text>14</Text>
              <Indicator body={"Bullish"} textColor={"green"} />
            </VStack>
          </HStack>
          <Box
            w={"80%"}
            margin={"auto"}
            my={4}
          >
            <HStack
              justifyContent={"space-between"}
              px={3}
            >
              <Box>
                <Text fontSize={"1rem"} >21943.62</Text>
                <Text fontSize={"0.8rem"} fontWeight={"light"} >S1</Text>
              </Box>
              <Box >
                <Text fontSize={"1rem"} >21872.63</Text>
                <Text fontSize={"0.8rem"} fontWeight={"light"} >S2</Text>
              </Box>
              <Box >
                <Text fontSize={"1rem"} >21732.98</Text>
                <Text fontSize={"0.8rem"} fontWeight={"light"} >S3</Text>
              </Box>
            </HStack>
            <HStack
              justifyContent={"space-between"}
              px={3}
            >
              <Box>
                <Text fontSize={"1rem"} >22083.27</Text>
                <Text fontSize={"0.8rem"} fontWeight={"light"} >R1</Text>
              </Box>
              <Box>
                <Text fontSize={"1rem"} >22151.93</Text>
                <Text fontSize={"0.8rem"} fontWeight={"light"} >R2</Text>
              </Box>
              <Box>
                <Text fontSize={"1rem"} >22291.58</Text>
                <Text fontSize={"0.8rem"} fontWeight={"light"} >R3</Text>
              </Box>
            </HStack>
          </Box>
        </Box>
        {/* Third card */}
        <Box
          m={3}
          w={{base:"80%",sm:"60%",md:"60%",lg:"45%"}}
          backgroundColor={"#ffffff"}
          borderRadius={5}
        >
          <Text fontSize={"1rem"} fontWeight={"bold"} m={3} >Moving averages</Text>
          <Box
           w={{base:"80%",sm:"70%",md:"65%",lg:"60%"}}
            margin={"auto"}
            position={"relative"}
            mt={5}
          >
            <Image src="/CardImg.svg" margin={"auto"} p={3} />
            <Image src='/Pointer.svg' w={"5%"} position={"absolute"} top={"40%"} left={left} zIndex={2} />
          </Box>
          <HStack
            w={"60%"}
            margin={"auto"}
            justifyContent={"space-between"}
            p={2}
            mb={5}
          >
            <VStack alignItems={"center"} >
              <Text>3</Text>
              <Indicator body={"Bearish"} textColor={"red"} />
            </VStack>
            <VStack alignItems={"center"} >
              <Text>10</Text>
              <Indicator body={"Neutral"} textColor={"blue"} />
            </VStack>
            <VStack alignItems={"center"} >
              <Text>14</Text>
              <Indicator body={"Bullish"} textColor={"green"} />
            </VStack>
          </HStack>
          <Box
            w={"80%"}
            margin={"auto"}
            my={4}
          >
            <HStack
              justifyContent={"space-between"}
              px={3}
            >
              <Box>
                <Text fontSize={"1rem"} >EMA (5)</Text>
                <Text fontSize={"0.8rem"} fontWeight={"light"} >22091.28</Text>
              </Box>
              <Box >
                <Text fontSize={"1rem"} >SMA (5)</Text>
                <Text fontSize={"0.8rem"} fontWeight={"light"} >22087.02</Text>
              </Box> 
            </HStack>
          </Box>
        </Box>
        {/* Fourth card */}
        <Box
          m={3}
          w={{base:"80%",sm:"60%",md:"60%",lg:"45%"}}
          backgroundColor={"#ffffff"}
          borderRadius={5}
        >
          <Text fontSize={"1rem"} fontWeight={"bold"} m={3} >Oscillators</Text>
          <Box
            w={{base:"80%",sm:"70%",md:"65%",lg:"60%"}}
            margin={"auto"}
            position={"relative"}
            mt={5}
          >
            <Image src="/CardImg.svg" margin={"auto"} p={3} />
            <Image src='/Pointer.svg' w={"5%"} position={"absolute"} top={"40%"} left={left} zIndex={2} />
          </Box>
          <HStack
            w={"60%"}
            margin={"auto"}
            justifyContent={"space-between"}
            p={2}
            mb={5}
          >
            <VStack alignItems={"center"} >
              <Text>4</Text>
              <Indicator body={"Bearish"} textColor={"red"} />
            </VStack>
            <VStack alignItems={"center"} >
              <Text>6</Text>
              <Indicator body={"Neutral"} textColor={"blue"} />
            </VStack>
            <VStack alignItems={"center"} >
              <Text>0</Text>
              <Indicator body={"Bullish"} textColor={"green"} />
            </VStack>
          </HStack>
          <Box
            w={"80%"}
            margin={"auto"}
            my={4}
          >
            <HStack
              justifyContent={"space-between"}
              px={3}
            >
              <Box>
                <Text fontSize={"1rem"} >RSI (14)</Text>
                <Text fontSize={"0.8rem"} fontWeight={"light"} >40.38</Text>
              </Box>
              <Box >
                <Text fontSize={"1rem"} >Stoch.%K (14, 3, 3)</Text>
                <Text fontSize={"0.8rem"} fontWeight={"light"} >14.54</Text>
              </Box>
            </HStack>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Main
