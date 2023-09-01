import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";

export default function Dashboard() {
  /* const boxStyles = {
    p: "10px",
    bg: "purple.400",
    color: "white",
    m: "10px",
    textAlign: "center",
    filter: "blur(1px)",
    ":hover": {
      color: "black",
      bg: "blue.100",
    }, 
  };*/
  return (
    <SimpleGrid p="10px" columns={4} spacing={10} minChildWidth={250}>
      <Box bg="white" h="200px" border="1px solid">
        <Text color={{ base: "pink", md: "blue", lg: "green", xl: "orange" }}>
          Hello
        </Text>
      </Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>

      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>

      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
    </SimpleGrid>

    /* <Container as="section" maxWidth="4xl" py="20px">
      <Heading my="30px" p="10px">
        Chakra UI Components
      </Heading>
      <Text marginLeft="30px" pb="10px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ut
        quod suscipit harum nihil vel cupiditate nulla voluptatum tempora error.
      </Text>
      <Text ml="30px" color="blue.400" fontWeight="bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ut
        quod suscipit harum nihil vel cupiditate nulla voluptatum tempora error.
      </Text>

      <Box my="30px" p="20px" bg="orange">
        <Text color="white">This is a box.</Text>
      </Box>

      <Box sx={boxStyles}>Hola, Ninjas!</Box>
    </Container>
  );*/
  );
}
