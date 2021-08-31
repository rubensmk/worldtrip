import { Flex, Grid, Icon, Image } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { RiArrowLeftSLine } from 'react-icons/ri'

export function Header() {
    const { asPath } = useRouter();
    const isHomePage = asPath === '/';


    return (
        <Flex bg="white" w="100%" as="header" mx="auto" px="1rem" h={["50px", "100px"]} align="center" justify="center">
            <Grid
                h="100%"
                mx="auto"
                w="100%"
                maxW="1160px"
                alignItems="center"
                templateColumns="repeat(3, 1fr)"
                justifyContent="center"
                alignSelf="start"
            >
                {!isHomePage && (
                    <Link href="/">
                        <a>
                            <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} />
                        </a>
                    </Link>
                )}
                <Image
                    w={["81px", "184px"]}
                    src="/images/logo.png"
                    alt="Um avição voando sobre o nome da marca world trip"
                    justifySelf="center"
                    gridColumn="2"
                />
            </Grid>
        </Flex>

    );
}