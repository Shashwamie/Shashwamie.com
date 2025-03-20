import React from 'react'
import DVNavbar from '../components/dvNavbar.jsx'
import DVSidebar from '../components/DVSidebar.jsx'
import { Box, Flex } from '@chakra-ui/react'

const Landing = () => {
  return (
    <Flex>
      <DVSidebar  />
      <DVNavbar />
    </Flex>
  )
}

export default Landing