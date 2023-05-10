import React from "react";
import { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Image, Flex, Box, Text } from "@chakra-ui/react";
import axios from "axios";
import dogImage from "../assets/dogArt.png";

const apiKey = "AIzaSyCXKaXdTFIiNMvjr1Cn2uRNCqqfP4l0GWY";

const containerStyle = {
  width: "100%",
  height: "calc(100vh - 60px)",
};

const center = { // initial focused area
  lat: 12.9716,
  lng: 77.5946,
};

const Track = (props) => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [markers, setMarkers] = useState([]);

  //Fetching list of breeds

  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then((response) => setBreeds(Object.keys(response.data.message)))
      .catch((error) => console.log(error));
  }, []);

  const handleMarkerClick = (event, index) => {
    console.log("Marker clicked:", index);
  };

  // Function to handle breed selection
  const handleBreedSelect = (breed) => {
    setSelectedBreed(breed);
  };

  // Function to generate a random number between min and max
  const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  // Function to generate a random coordinate within San Francisco area
  const generateRandomCoordinate = () => {
    const lat = getRandomNumber(11.5, 18.5);
    const lng = getRandomNumber(74, 78.5);
    return { lat, lng };
  };

  // Function to generate random coordinates for a given breed
  const generateMarkersForBreed = (breed) => {
    const numberOfMarkers = Math.floor(getRandomNumber(1, 5)); // Generate between 1 to 5 markers
    const newMarkers = [];
    for (let i = 0; i < numberOfMarkers; i++) {
      const coordinate = generateRandomCoordinate();
      newMarkers.push({
        lat: coordinate.lat,
        lng: coordinate.lng,
        breed: breed,
      });
    }
    return newMarkers;
  };

  // Update markers when a new breed is selected
  useEffect(() => {
    if (selectedBreed) {
      const newMarkers = generateMarkersForBreed(selectedBreed);
      setMarkers(newMarkers);
    } else {
      setMarkers([]);
    }
  }, [selectedBreed]);

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
      <Flex justifyContent="center" alignItems="center" mt="2" mb="2">
    <Image src={dogImage} alt="dog-art" w="80px" mr="4" />
    {selectedBreed ? (
      <Text fontSize="xl">
        Showing locations of {selectedBreed.charAt(0).toUpperCase() + selectedBreed.slice(1)} breed
      </Text>
    ) : (
      <Text fontSize="xl">Please select a breed to track</Text>
    )}
  </Flex>
  <Box border="5px solid #808080" w={{base:"90%",md:"50%"}} m="auto" p="20px">
      <LoadScript googleMapsApiKey={apiKey}>
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={6} >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={{ lat: marker.lat, lng: marker.lng }}
          onClick={(event) => handleMarkerClick(event, index)}
        />
      ))}
    </GoogleMap>
  </LoadScript>
  </Box>

  
</>
);
};

export default Track;
      
      

