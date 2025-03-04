import React from 'react'
import { Box, Separator, Flex, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Box>
        <Separator />
        <Flex>
            <Box>
                <Link>
                    <Text>
                        Link 1
                    </Text>
                </Link>
            </Box>
            <Image src='./src/assets/ShashwamieLogo.png'/>
        </Flex>
    </Box>
  )
}

export default Footer