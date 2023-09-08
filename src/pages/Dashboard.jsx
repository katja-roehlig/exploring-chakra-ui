import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

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

  const tasks = useLoaderData();
  return (
    <SimpleGrid spacing={10} minChildWidth={300}>
      {tasks &&
        tasks.map((task) => (
          <Card
            key={task.id}
            borderTop="8px"
            borderColor="purple.400"
            bg="white"
          >
            <CardHeader>
              <Flex gap={5}>
                <Avatar src={task.img} bg="purple.100" />
                <Box>
                  <Heading as="h3" size="sm">
                    {task.title}
                  </Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>

            <CardBody>
              <Text color="gray.500">{task.description}</Text>
            </CardBody>
            <Divider borderColor="gray.300" />
            <CardFooter justifyContent="center">
              <HStack>
                <Button variant="ghost" leftIcon={<ViewIcon />}>
                  Watch
                </Button>
                <Button variant="ghost" leftIcon={<EditIcon />}>
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}
export const tasksLoader = async () => {
  const res = await fetch("http://localhost:3000/tasks");
  return res.json();
};

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
