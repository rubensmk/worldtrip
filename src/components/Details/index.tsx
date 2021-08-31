import { Flex, Grid, GridItem } from "@chakra-ui/layout";
import Item from './Item';

export default function Details() {
    return (
        <Grid
            templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
            w="100%"
            justify="space-between"
            align="center"
            mt={["10", "32"]}
            mx="auto"
            maxW="1160px"
            flexWrap="wrap"
            gap={[1, 5]}
        >

            <GridItem>
                <Item icon="cocktail" text="vida noturna" />
            </GridItem>
            <GridItem>
                <Item icon="surf" text="praia" />
            </GridItem>
            <GridItem>
                <Item icon="building" text="moderno" />
            </GridItem>
            <GridItem>
                <Item icon="museum" text="clássico" />
            </GridItem>
            <GridItem colSpan={[2, 2, 2, 1]}>
                <Item icon="earth" text="e mais..." />
            </GridItem>
        </Grid>
    )
}