import React from "react";
import { useState, useEffect } from "react";
import {
  Image,
  Flex,
  Box,
  Text,
  Grid,

} from "@chakra-ui/react";
import axios from "axios";
// import DogModal from "./Dogmodal";
import DogImageModal from "./DogImageModal";
import dogImage from "../assets/dogArt.png";
const Home = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  //Fetching list of breeds
  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then((response) => setBreeds(Object.keys(response.data.message)))
      .catch((error) => console.log(error));
  }, []);

  // Fetching a list of random dog images on first render
  // useEffect(() => {
  //   axios
  //     .get("https://dog.ceo/api/breeds/image/random/30")
  //     .then((response) => setImages(response.data.message))
  //     .catch((error) => console.log(error));
  // }, []);

  // Fetching breed images when breed is selected else random images will be display

  useEffect(() => {
    if (selectedBreed) {
      axios
        .get(`https://dog.ceo/api/breed/${selectedBreed}/images`)
        .then((response) => setImages(response.data.message))
        .catch((error) => console.log(error));
    } else {
      axios
        .get("https://dog.ceo/api/breeds/image/random/30")
        .then((response) => setImages(response.data.message))
        .catch((error) => console.log(error));
    }
  }, [selectedBreed]);

  // Function to handle breed selection
  const handleBreedSelect = (breed) => {
    setSelectedBreed(breed);
  };

  // Handle image selection
  const handleImageSelect = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setSelectedImage(null);
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
              {breed}
            </Text>
          </Box>
        ))}
      </Flex>
      {selectedBreed ? (
        <Text
          rounded="2xl"
          textAlign="center"
          fontSize={{ base: "xs", md: "md" }}
          backgroundColor="pink"
          w={{ base: "90%", md: "50%", lg: "26%" }}
          m="auto"
          mb="1rem"
          fontWeight="semibold"
        >
          {selectedBreed} Images: Click any one to view full image
        </Text>
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

      <Grid
        w="95%"
        m="auto"
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap="20px"
      >
        {images.map((image, index) => (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            border=" 3px solid #808080"
            w="100%"
            h="auto"
            borderRadius="2xl"
            p="20px"
            onClick={() => handleImageSelect(image)}
          >
            <Image
              w="95%"
              m="auto"
              key={index}
              src={image}
              alt="dog"
              objectFit="cover"
            />{" "}
          </Box>
        ))}
      </Grid>
      {selectedImage && (
        <DogImageModal
          isOpen={showModal}
          onClose={handleCloseModal}
          image={selectedImage}
        />
      )}
    </>
  );
};

export default Home;
