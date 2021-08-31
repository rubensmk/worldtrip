import { Grid, Heading } from "@chakra-ui/react";
import { cities } from "./cities";
import City from "./City";




export function ContinentCities() {
    return (
        <>
            <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10" px={["30px", "40px"]}>Cidades +100</Heading>
            <Grid mb={10} templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={['20px', '45px']} alignItems="center" justifyContent="center" px={["30px", "40px"]} >
                {cities.map(city => (
                    <City
                        key={city.name}
                        name={city.name}
                        country={city.country}
                        flag={city.flag}
                        image={city.image}
                    />
                ))}
            </Grid>
        </>
    )
}