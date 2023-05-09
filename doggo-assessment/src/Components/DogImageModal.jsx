import React from 'react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Image } from '@chakra-ui/react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
const DogImageModal = ({ isOpen, onClose, image }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={{base:"sm",md:"lg"}}>
    <ModalOverlay />
    <ModalOverlay />
    
   
    <ModalContent>
      <ModalHeader>Double tap or pinch to zoom</ModalHeader>
      <ModalCloseButton />
      <ModalBody cursor="zoom-in">
          
      <TransformWrapper
       initialScale={1}
       
      >
    <TransformComponent>
      <Image src={image} alt="zoomable dog" />
    </TransformComponent>
  </TransformWrapper>
       
      </ModalBody>
    </ModalContent>
  </Modal>
  )
}

export default DogImageModal