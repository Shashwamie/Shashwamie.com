import React from 'react'
import { Box, Text, Heading, Center, Flex, Image, Input, HStack, Button, Stack} from '@chakra-ui/react'
import { InputGroup } from '@/components/ui/input-group'
import { PasswordInput } from '@/components/ui/password-input'
import { Checkbox } from '@/components/ui/checkbox'
import { Link } from 'react-router-dom'
import { MdOutlineMail } from 'react-icons/md'
import { MdOutlineLock } from 'react-icons/md'


const Login = () => {
  return (
    <Box bg={"gray.100"} minH={"100vh"} p={6} w={"full"} alignContent={"center"}>
        <Center>
            <HStack maxW={"3/6"} minW={"3/6"} maxH={"3/5"} style={{backgroundColor: "#011936"}}
             rounded={"4xl"} gap={0} p={0} shadow={"xl"}>
                <Box style={{backgroundColor: "#011936"}} minW={"3/5"} rounded={"4xl"}>
                    <Stack gap={8}  paddingLeft={8} paddingRight={16} w={'full'} paddingTop={8} paddingBottom={4}>
                            <Heading as={"h1"} margin={'auto'} fontSize={"4xl"} fontFamily={'Esteban'}>
                                Login
                            </Heading>
                            <InputGroup startElement={<MdOutlineMail />} w={'full'}>
                                <Input placeholder={"Email or Username"} bg={"gray.100"} rounded={"xl"} 
                                p={4} color={"black"} fontSize={20} w={'full'}>
                                    
                                </Input>
                            </InputGroup>
                            <InputGroup startElement={<MdOutlineLock />} w={'full'}>
                                <PasswordInput placeholder={"Password"} bg={"gray.100"} rounded={"xl"}
                                p={4} color={"black"} fontSize={20} w={'full'}>
                                    
                                </PasswordInput>
                            </InputGroup>
                            <Box w={"full"} alignContent={"flex-start"}>
                            <Checkbox bg={"gray.100"} rounded={"lg"}></Checkbox>
                                <Text color={"white"} as={'span'} paddingLeft={4}>
                                        Remember Me
                                </Text>
                            </Box>
                            <Button rounded={"xl"} style={{ backgroundColor: "#f9DC5C"}} fontFamily={"Esteban"} fontSize={"2xl"}
                            paddingLeft={10} paddingRight={10} w={'3/5'} margin={'auto'}>
                                Submit
                            </Button>
                            <div style={{backgroundColor: '#465362', height: '2px'}}></div>
                            <HStack w={'full'}>
                                <Link>
                                    <Text _hover={{color: '#f9DC5C'}}>
                                        &#8592;Back
                                    </Text>
                                </Link>
                                <Flex marginLeft={'auto'}>
                                <Text as={'span'}>
                                    Create Account{'\n'}
                                <Link>
                                    <Text as={'sapn'} style={{ color: "#f9DC5C"}} _hover={{textDecoration: 'underline'}} >
                                        here
                                    </Text>
                                </Link>
                                </Text>
                                </Flex>
                            </HStack>
                    </Stack>
                </Box>
                <Box style={{backgroundColor: "#B1BFFF"}} rounded={"4xl"} h={"calc(100vh*.65)"} alignContent={"center"} fontFamily={'Esteban'}>
                    <Image src="./src/assets/logo.png"/>
                </Box>
            </HStack>
        </Center>
    </Box>
  )
}

export default Login