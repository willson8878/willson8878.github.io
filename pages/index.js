import { Container,Box, Heading } from "@chakra-ui/react"

const Page = () => {
    return (
      <Container>
        <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
          Hello, I&apos;m a developer based in USA!
        </Box>
        <Box display={{md: 'flex'}}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Will (Wei) Chen
            </Heading>
            <p>Developer(Front Pages/small App)</p>
          </Box>
        </Box>
      </Container>
    )
}

export default Page