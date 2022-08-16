import Head from 'next/head'
import {Box,Container} from '@chakra-ui/react'

const Main = ({children}) => {
    return (
        <Box as='mian' pb={8}>
            <Head>
                <meta name='viewpoint' content="width=device-width, initial-scale=1"/>
                <title>Will Chen - Homepage</title>
            </Head>
            <Container maxWidth="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main