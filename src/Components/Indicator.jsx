import React from 'react'
import { Text } from '@chakra-ui/react'

const Indicator = ({body,textColor}) => {
  return (
    <Text
        color={textColor}
        bg="red.500Alpha"
        px={2}
        borderRadius={5}
        fontSize={{base:"0.6rem",sm:"0.7rem",md:"0.8rem",lg:"0.8rem"}}
    >
        {body}
    </Text>
  )
}

export default Indicator
