import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Text,
  Flex,
  Image,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import dogImage from "../assets/dogArt.png";
import DogImageModal from "./DogImageModal";
const List = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [breedList, setBreedlist] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedList, setSelectedList] = useState(null);
  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then((response) => setBreeds(Object.keys(response.data.message)))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (selectedBreed) {
      axios
        .get(`https://dog.ceo/api/breed/${selectedBreed}/list`)
        .then((response) => setBreedlist(response.data.message))
        .catch((error) => console.log(error));
    }
  }, [selectedBreed]);

  useEffect(() => {
    if (breedList.length > 0) {
      breedList.map((subBreed) =>
        axios
          .get(
            `https://dog.ceo/api/breed/${selectedBreed}/${subBreed}/images/random`
          )
          .then((response) => {
            setSelectedList(response.data.message);
          })
      );
    }
  }, [breedList, selectedBreed, showModal]);

  // Function to handle breed selection
  const handleBreedSelect = (breed) => {
    setSelectedBreed(breed);
  };

  const handleListSelect = (image) => {
    setSelectedList(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedList(null);
    setShowModal(false);
  };

  return (
    <>
      <Flex
        p="4"
        gap="10px"
        overflowY="hidden"
        overflowX="scroll"
        css={{
          "&::-webkit-scrollbar": {
            width: "0px",
          },
        }}
      >
        {breeds.map((breed, index) => (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            key={index}
            bg="#808080"
            borderRadius="2xl"
            boxShadow="md"
            m="2"
            w="150px"
            cursor="pointer"
            p="20px"
            transition="all .4s ease-in-out"
            _hover={{ transform: "scale(1.09)" }}
            _focus={{
              boxShadow:
                "0 0 1px 5px rgba(0, 0, 0, .75), 0 1px 1px rgba(0, 0, 0, .15)",
              transition: "box-shadow 0.2s ease-out",
            }}
            tabIndex={0}
            onClick={() => handleBreedSelect(breed)}
          >
            <Text
          w="100px"
          h="100px"
          color="white"
          textAlign="center"
          fontFamily="sans-serif"
        >
          <Image m="auto" w="70px" src={dogImage} />
          {breed.charAt(0).toUpperCase() + breed.slice(1)}
        </Text>
          </Box>
        ))}
      </Flex>
      {selectedBreed ? (
        <>
          <Text
            rounded="2xl"
            textAlign="center"
            fontSize={{ base: "xs", md: "md" }}
            backgroundColor="pink"
            w={{ base: "60%", md: "40%", lg: "20%" }}
            m="auto"
            mb="1rem"
            fontWeight="semibold"
          >
            {selectedBreed.charAt(0).toUpperCase() + selectedBreed.slice(1)} Sub-breeds
          </Text>
          <TableContainer si px="20px" w={{ md: "90%" }} m="auto">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th
                    color="black"
                    backgroundColor="#808080"
                    rounded="3xl"
                    fontSize={{ base: "xs", md: "xl" }}
                    m="auto"
                    display="flex"
                    justifyContent="space-between"
                    w={{ base: "90%", md: "97%" }}
                    px="20px"
                  >
                    SUB-BREED
                    <Text>OPEN 1 IMAGE (MODAL)</Text>
                  </Th>
                </Tr>
              </Thead>
              {breedList.length > 0 ? (
                <Tbody>
                  {breedList.map((subBreed, index, image) => (
                    <Tr
                      display="flex"
                      justifyContent="space-between"
                      key={index}
                    >
                      <Td fontSize={{ base: "md", md: "xl" }}>
                        Sub-breed {subBreed.charAt(0).toUpperCase() + subBreed.slice(1)}
                      </Td>
                      <Td
                        w={{ base: "30%", md: "17%" }}
                        cursor="pointer"
                        fontSize={{ base: "md", md: "xl" }}
                        onClick={() => handleListSelect(image)}
                      >
                        Link
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              ) : (
                <Text
                  fontSize={{base:"sm",md:"lg"}}
                  fontWeight="semibold"
                  textAlign="center"
                  m="auto"
                  mt="2rem"
                  w={{ base: "100%", md: "50%" }}
                >
                  ☹️No Sub-breed list available for this breed.<br/>Try for another
                  one.
                </Text>
              )}
            </Table>
          </TableContainer>
          {selectedList && (
            <DogImageModal
              isOpen={showModal}
              onClose={handleCloseModal}
              image={selectedList}
            />
          )}
        </>
      ) : (
        <Text
          rounded="2xl"
          textAlign="center"
          backgroundColor="wheat"
          w={{ base: "70%", md: "30%", lg: "15%" }}
          m="auto"
          mb="1rem"
          fontWeight="semibold"
        >
          Select breed from above
        </Text>
      )}
    </>
  );
};

export default List;
