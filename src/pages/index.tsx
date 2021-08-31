import { Box, Flex, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Banner } from '../components/Banner'
import Details from '../components/Details'
import { Header } from '../components/Header'
import { Slider } from '../components/Slider'

const Home: NextPage = () => {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Details />

      <Box w={["60px", "90px"]} mx="auto" h="2px" bg="gray.dark" my={["9", "20"]} />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg",
          "3xl",
          "4xl"]}
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>

      <Slider />
    </Flex>

  )
}

export default Home
