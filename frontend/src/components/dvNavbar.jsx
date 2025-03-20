import React from 'react'
import { Box, Flex, Image, Heading, IconButton, Input, HStack, Menu, Portal } from '@chakra-ui/react'
import logo from '../assets/logo.png'
import { InputGroup } from '@/components/ui/input-group'
import { useState } from 'react'
import { FaCircleUser } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";



const dvNavbar = () => {
    const [currentPage, setCurrentPage] = useState("Home");
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    }


  return (
    <Box as={'nav'} minW={'5/6'}>
        <Flex justifyContent={'space-between'} p={6} bg={'gray.600'} align={'center'} color={'white'}>
            <Heading fontSize={'5xl'} fontFamily={'Esteban'} paddingLeft={32}>
                {currentPage}
            </Heading>
            <HStack gap={8}>
                <InputGroup startElement={<IoMdSearch style={{width: "80%", height: "80%"}} />} >
                   <Input placeholder={"Search"} bg={"gray.100"} rounded={"xl"} 
                    p={4} color={"black"} fontSize={20} w={'full'} ps={12}></Input>
                </InputGroup>
                <Menu.Root  positioning={{ placement: "bottom" }}>
                    <Menu.Trigger asChild>
                        <IconButton rounded={'xl'} bg={'transparent'} size={'md'} >
                            <FaCircleUser style={{width: "100%", height: "100%"}} />
                        </IconButton>
                    </Menu.Trigger>
                    <Portal>
                        <Menu.Positioner>
                            <Menu.Content>
                                <Menu.Item value="account">Account</Menu.Item>
                                <Menu.Item value="settings">Settings</Menu.Item>
                                <Menu.Item value="children">Managed Accounts</Menu.Item>
                                <Menu.Item value="logout">Logout</Menu.Item>
                            </Menu.Content>
                        </Menu.Positioner>
                    </Portal>
                </Menu.Root>
            </HStack>
        </Flex>
    </Box>
  )
}

export default dvNavbar