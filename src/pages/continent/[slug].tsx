import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import React from 'react'
import { ContinentBanner } from '../../components/Continent/ContinentBanner'
import { ContinentCities } from '../../components/Continent/ContinentCities'
import { ContinentContent } from '../../components/Continent/ContinentContent'
import { Header } from '../../components/Header'

const Continent: NextPage = () => {
    return (
        <Flex direction="column">
            <Header />
            <ContinentBanner />
            <ContinentContent />
            <ContinentCities />
        </Flex>

    )
}

export default Continent