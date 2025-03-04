import React from 'react'
import { Box, Heading, Separator } from '@chakra-ui/react'

const HomePage = () => {
  return (
    <Box>
      <Box minW={'full'} minH={'100vh'} bgOrigin="border-box" bgImage={'url(./src/assets/gerald.png)'}
      bgPos={'right'} bgSize={'contain'} bgRepeat="no-repeat">
        <Heading fontSize={'5xl'} maxW={'4/6'} p={24} lineHeight={1.5} fontFamily={'Esteban'}>
          This is Shahwamies custom site to view what he has played and plans on playing.
        </Heading>
      </Box>
    </Box>
  )
}

export default HomePage