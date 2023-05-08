import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Image } from '@chakra-ui/react';

const DogModal = ({ isOpen, onClose, image }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={{base:"sm",md:"lg"}}>
      <ModalOverlay />
     
      <ModalContent>
        <ModalHeader>Zoomable Dog Image</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src={image} objectFit="contain" height="100%" width="100%" />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DogModal;