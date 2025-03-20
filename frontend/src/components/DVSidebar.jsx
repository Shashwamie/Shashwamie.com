import React from 'react'
import { Box, Flex, Image, Heading, IconButton, Input, Text, HStack, Stack, Separator } from '@chakra-ui/react'
import logo from '../assets/logo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CiLogout } from "react-icons/ci";

const DVSidebar = () => {
    const [currentPage, setCurrentPage] = useState("Home")
  return (
    <Box minH={'vh'} minW={'1/6'} maxW={'1/6'} as={'aside'}>
            <Stack gap={16} padding={6} bg={'gray.600'}>
                <Image src={logo} htmlHeight={"120px"} htmlWidth={"120px"}/>
                <Stack  justifyContent={'center'} color={'white'} fontSize={20} fontFamily={'Esteban'} gap={4}>
                    <Separator/>
                    <Flex justifyContent={'space-between'}>
                        <Image />
                        <Text>Dashboard</Text>
                    </Flex>
                    <Separator/>
                    <Flex justifyContent={'space-between'}>
                        <Image />
                        <Text>Displays</Text>
                    </Flex>
                    <Separator/>
                    <Flex justifyContent={'space-between'}>
                        <Image />
                        <Text>Playlists</Text>
                    </Flex>
                    <Separator/>
                    <Flex justifyContent={'space-between'}>
                        <Image />
                        <Text>Users</Text>
                    </Flex>
                    <Separator/>
                </Stack>
                <Link>
                    <HStack align={'center'}>
                        <CiLogout color='white' />
                        <Text color={'white'}>
                            Logout
                        </Text>
                    </HStack>
                </Link>
            </Stack>
    </Box>
  )
}

export default DVSidebar