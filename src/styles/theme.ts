import { extendTheme } from '@chakra-ui/react';


export const theme = extendTheme({
    colors: {
        white: {
            "background": "#F5F8FA",
            "text": "#F5F8FA",
        },
        gray: {
            "dark": "#47585B",
            "light": "#999999",
            "lighter": "#DADADA"
        },
        yellow: {
            highlights: "#FFBA08"
        },
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
    styles: {
        global: {
            body: {
                bg: 'white.background',
                color: 'gray.dark'
            }
        }
    }
})