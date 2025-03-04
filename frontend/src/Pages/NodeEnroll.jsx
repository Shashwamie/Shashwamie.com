import React from 'react'
import {Center, Box, Float, Heading, Button, Text, HStack, IconButton, Flex} from '@chakra-ui/react'
import { MdClose } from "react-icons/md";

const NodeEnroll = () => {
  return (
    <Box alignContent={'center'} justifyContent={'center'} h={'100vh'}>
        <Center>
            <Box minW={"3/5"} maxW="3/5" style={{backgroundColor: "#011936"}} pos={'relative'} rounded={'2xl'} p={8}>
                <HStack minW={'full'} pos={'relative'} p={2}>
                    <Heading as={"h1"} fontSize={"5xl"} pos={'relative'} margin={'auto'}>
                        Enroll This Screen
                    </Heading>
                    <Flex minW={'full'} pos={'absolute'} justify={'flex-end'}>
                        <IconButton bg={'transparent'} color={'red.400'} size={'xl'}>
                            <MdClose style={{width: "100%", height: "100%"}}/>
                        </IconButton>
                    </Flex>
                </HStack>
                <Box minW={'full'}>
                    <Center>
                        <Heading as={'h2'} fontSize={'8xl'} m={8}>
                            sevjyq
                        </Heading>
                    </Center>
                    <Center>
                        <Text m={12} fontSize={16}>
                            Sign in to the portal and log in to your account. You can then type this code in to enroll this screen. Then you can start displaying your masterpieces!
                        </Text>
                    </Center>
                    <Center>
                        <Button color={'black'} shadow={'lg'} padding={4} bg={'#f9DC5C'} fontSize={32} fontWeight={'bold'} rounded={'2xl'}
                            paddingLeft={8} paddingRight={8}>
                            Display Now
                        </Button>
                    </Center>
                </Box>
            </Box>
        </Center>
    </Box>
  )
}

export default NodeEnroll