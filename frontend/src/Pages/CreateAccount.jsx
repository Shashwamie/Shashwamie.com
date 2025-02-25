import React from 'react'
import { Box, Text, Heading, Center, VStack, Image, Input, HStack, Button} from '@chakra-ui/react'
import { PasswordInput } from '@/components/ui/password-input'
import { Link } from 'react-router-dom'


const CreateAccount = () => {

  return (
    <Box bg={"gray.100"} minH={"100vh"} p={6} w={"full"} alignContent={"center"}>
        <Center>
            <HStack maxW={"3/6"} minW={"3/6"} maxH={"4/5"} minH={"4/5"} style={{backgroundColor: "#011936"}}
             rounded={"4xl"} gap={0} p={0} shadow={"xl"}>
                <Box style={{backgroundColor: "#011936"}} minW={"3/5"} rounded={"4xl"} paddingBottom={4}>
                    <Heading as={"h1"} align={"center"} fontSize={28} p={8} fontFamily={"Esteban"}>
                        Create Account
                    </Heading>
                    <VStack gap={8}  paddingLeft={8} align={"flex-start"} paddingRight={16}>
                            <Input placeholder={"Username"} bg={"gray.100"} rounded={"xl"} 
                            p={4} color={"black"} fontSize={20}>   
                                 
                            </Input>
                            <Input placeholder={"Email"} bg={"gray.100"} rounded={"xl"} 
                            p={4} color={"black"} fontSize={20}>
                                
                            </Input>
                            <PasswordInput placeholder={"Password"} bg={"gray.100"} rounded={"xl"}
                            p={4} color={"black"} fontSize={20}>
                                
                            </PasswordInput>
                            <PasswordInput placeholder={"Re-Enter Password"} bg={"gray.100"} rounded={"xl"} 
                            p={4} color={"black"} fontSize={20}>
                                
                            </PasswordInput>
                            <Button rounded={"xl"} style={{ backgroundColor: "#f9DC5C"}} fontFamily={"Esteban"} fontSize={20}>
                                Create Account
                            </Button>
                            <Link>
                                <Text _hover={{color: "#f9DC5C"}}>
                                &#8592;Back
                                </Text>
                            </Link>
                    </VStack>
                </Box>
                <Box style={{backgroundColor: "#B1BFFF"}} rounded={"4xl"} h={"calc(100vh*.8)"} alignContent={"center"}>
                    <Image src="./src/assets/logo.png"/>
                </Box>
            </HStack>
        </Center>
    </Box>
  )
}

export default CreateAccount