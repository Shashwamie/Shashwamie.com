import React from 'react'
import { Container, Flex, HStack, Button, Image, Heading } from '@chakra-ui/react'
import { useColorMode } from './ui/color-mode.jsx'
import { Link } from 'react-router-dom'
import { CiSquarePlus } from 'react-icons/ci'
import { IoMoon } from 'react-icons/io5'
import { LuSun } from 'react-icons/lu'

const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode()
    let colorDecision = colorMode === 'light' ? 'light' : 'dark'
    let dark = colorDecision != 'light' ? 'gray.700' : 'gray.100'
    let iconColor = colorDecision != 'light' ? '#9333ea' : '#c084fc'

  return (
    <Container maxW="full" p={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} flexDir={{ base: 'column', sm: 'row' }} 
        marginLeft={10} marginRight={10} m={4}>
            <Flex align={'center'} gap={4}>
                <Image src='./src/assets/ShashwamieLogo.png' alt='Logo' h={"6rem"}/>
                <Link to="/">
                    <Heading fontSize={'4xl'} fontWeight={'bold'} textAlign={'center'} color={"teal.400"} >
                        Shashwamie Games
                    </Heading>
                </Link>
            </Flex>
            <HStack spacing={8} alignItems={'center'}>
                <Link to="/createFavorite">
                    <Button _hover={{bg: dark }} shadow={"md"}>
                        <CiSquarePlus size={40} style={{color: iconColor}} />
                    </Button>
                </Link>
                <Button _hover={{ bg: dark }} shadow={"md"} onClick={toggleColorMode}>
                    {colorMode === 'light' ? <IoMoon style={{color: iconColor}} /> : <LuSun style={{color: iconColor}} />}
                </Button>
            </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar