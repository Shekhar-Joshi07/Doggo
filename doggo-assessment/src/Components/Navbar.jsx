import React from "react";
import { Box, Button } from "@chakra-ui/react";
const Navbar = () => {
  return (
    <Box
      w="95%"
      m="auto"
      mt="1rem"
      h="max-content"
      display="flex"
      justifyContent={{ base:"space-evenly",md:"space-between"}}
      alignItems="center"
      px={{md:"40px"}}
    >
      <Box>
        <Button
          pb="2px"
          w="80px"
          h="30px"
          backgroundColor="#808080"
          color="white"
          variant="unstyled"
          rounded="xl"
        >
          Doggo
        </Button>
      </Box>
      <Box
        display="flex"
        gap={{ base:"1.8rem",md:"3rem"}}
        justifyContent="center"
        alignItems="center"
      >
        <Button
          pb="2px"
          w="80px"
          h="30px"
          backgroundColor="#808080"
          color="white"
          variant="unstyled"
          rounded="xl"
        >
          List
        </Button>
        <Button
          pb="2px"
          w="80px"
          h="30px"
          backgroundColor="#808080"
          color="white"
          variant="unstyled"
          rounded="xl"
        >
          Track
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;