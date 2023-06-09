import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
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
       <Link to="/"><Button
          pb="2px"
          w="80px"
          h="30px"
          backgroundColor="#808080"
          color="white"
          _focus={{
            boxShadow:
            '0 0 1px 3px rgba(0, 0, 0, .75), 0 1px 1px rgba(0, 0, 0, .15)',
          }}
          variant="unstyled"
          rounded="xl"
    
        >
          Doggo
        </Button></Link> 
      </Box>
      <Box
        display="flex"
        gap={{ base:"1.8rem",md:"3rem"}}
        justifyContent="center"
        alignItems="center"
      >
      <Link to="/list">  <Button
          pb="2px"
          w="80px"
          h="30px"
          backgroundColor="#808080"
          color="white"
          variant="unstyled"
          rounded="xl"
          _focus={{
            boxShadow:
            '0 0 1px 3px rgba(0, 0, 0, .75), 0 1px 1px rgba(0, 0, 0, .15)',
          }}
        
        >
          List
        </Button></Link>
       <Link to="/track"> <Button
          pb="2px"
          w="80px"
          h="30px"
          backgroundColor="#808080"
          color="white"
          variant="unstyled"
          rounded="xl"
          _focus={{
            boxShadow:
            '0 0 1px 3px rgba(0, 0, 0, .75), 0 1px 1px rgba(0, 0, 0, .15)',
          }}
         
        >
          Track
        </Button></Link>
      </Box>
    </Box>
  );
};

export default Navbar;
