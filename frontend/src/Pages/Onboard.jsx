import React from 'react'
import { Flex, Text, Button, Box, Image, VStack } from '@chakra-ui/react'

const Onboard = () => {
  return (
    <Box bg={"gray.100"} minH={"full"} p={6}>
        <Flex w="full" justifyContent={"space-between"} alignItems={"center"} flexDir={{xl: "row", mdDown: "column"}}>
            <Flex align={"center"} gap={"6"} flexDir={{xl: "row", mdDown: "column"}}>
                <Image src="./src/assets/outlined-placeholder-blank.svg" h={20}/>
                <Text fontFamily={"Esteban"} fontSize={40}  color={"black"}>
                    Display Vantage
                </Text>
            </Flex>
            <Flex  gap="4">
                <Button size={24} p={2} bg={"gray.100"}>
                    Learn More
                </Button>
                <Button size={24} p={2} bg={"gray.100"} style={{borderColor: "#B1BFFF", color: "#B1BFFF"}} borderWidth={3}>
                    Explore Options
                </Button>
                <Button size={24} p={2} style={{backgroundColor: "#011936", color: "white"}}>
                    Login
                </Button>
            </Flex>
        </Flex>
        <Flex paddingLeft={20} paddingRight={10} paddingTop={{xl: "12", lg: "10", smDown: "8"}} gap={{xl: "16", lg: "12", smDown: "8"}} 
         align={"center"} justifyContent={"space-around"} flexDir={{xl: "row", mdDown: "column"}}>
            <VStack gap={{xl: "20", md: "20", smDown: "8"}}>
                <Box>
                    <Text textStyle={{xl: "5xl", lg: "2xl", md: "xl", smDown: "3xl"}} color={"black"} fontWeight={"bold"} maxW={"20rem"} style={{lineHeight: "4rem"}}>
                        Digital Signage made easy and accessible for{"\n"}
                    <Text as={"span"} style={{color: "#ED254E"}}>
                        Everyone
                    </Text>
                    </Text>
                </Box>
                <Text textStyle={{xl: "2xl", lg: "xl", smDown: "xl"}} style={{color: "#465362"}} maxW={"36rem"} >
                    Create and display digital signs to all your businesses screens with an easy to use web appliction to edit, manage and display your content.
                </Text>
            </VStack>
            <Box>
                <Image src="./src/assets/DVImage.svg" htmlWidth={"480rem"} />
            </Box>
        </Flex>
        <Flex justifyContent={"end"} paddingRight={{xl: "52", lg: "32", smDown: "12"}} paddingTop={{xl: "14", lg: "8", smDown: "6"}}>
            <Button textStyle={{xl: "5xl", lg: "2xl", sm: "xl"}} style={{ backgroundColor: "#f9DC5C"}} p={{xl: "10", lg: "8", smDown: "4"}} rounded={"xl"} marginBottom={{xl: "10", lg: "8", smDown: "4"}}>
                Register This Screen
            </Button>
        </Flex>
    </Box>
  )
}

export default Onboard