import { Flex, Grid, Heading, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";


export function ContinentContent() {
    return (
        <Grid templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]} gap={[5, 10, 16, 20]} my={["8", "20"]} mx={["8", "20"]}>
            < Text
                fontSize={["lg", "xl", "xl", "2xl"]}
                color="gray.dark"
                textAlign="justify"
            >
                A Europa é, por convenção, um dos seis continentes do mundo.Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
            </ Text>
            <Flex alignItems="center" justifyContent="space-between">
                <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
                    <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
                        50
                    </Heading>
                    <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
                        países
                    </Text>
                </Flex>

                <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
                    <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
                        60
                    </Heading>
                    <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
                        línguas
                    </Text>
                </Flex>

                <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
                    <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
                        27
                    </Heading>
                    <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
                        cidades +100

                        <Popover>
                            <PopoverTrigger>
                                <span>
                                    <Icon cursor="pointer" as={RiInformationLine} ml="1" color="gray.400" w={["10px", "16px"]} h={["10px", "16px"]} />
                                </span>
                            </PopoverTrigger>
                            <PopoverContent bg="gray.700" color="yellow.400">
                                <PopoverArrow bg="gray.700" />
                                <PopoverCloseButton />
                                <PopoverBody fontWeight="400" fontSize="lg">Londres, Paris, Roma, Praga entre outros..</PopoverBody>
                            </PopoverContent>
                        </Popover>

                    </Text>
                </Flex>
            </Flex>
        </Grid>
    )
}