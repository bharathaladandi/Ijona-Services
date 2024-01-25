import React, { useContext, useState } from 'react';
import { Auth } from '../Context/AuthProvider';

import {
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  FormControl,
  Heading
} from '@chakra-ui/react';

export const HomaPage = () => {

  const { user, logout, isAuthenticated } = Auth();

  const [data, setData] = useState([
    { id: 1, name: 'Item 1', description: 'Description 1' },
    { id: 2, name: 'Item 2', description: 'Description 2' },
  ]);

  const [dataItems, setDataitems] = useState({ name: '', description: '' });
  const [edit, setEdit] = useState(false);
  const [editItemId, setEditItemId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit) {
      setData((prevData) =>
        prevData.map((item) => (item.id === editItemId ? { ...item, ...dataItems } : item))
      );
      setEdit(false);
      setEditItemId(null);
    } else {
      const maxId = Math.max(...data.map((item) => item.id), 0);
      setData((prevData) => [...prevData, { id: maxId + 1, ...dataItems }]);
    }

    setDataitems({ name: '', description: '' });
    closeAddModal();
  };

  const handleEdit = (id) => {
    const selectedItem = data.find((item) => item.id === id);
    setDataitems(selectedItem);
    setEdit(true);
    setEditItemId(id);
    openAddModal();
  };

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const openAddModal = () => {
    setIsModalOpen(true);
  };

  const closeAddModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box p={4}>
      <Heading>Welcome, {user && user.username}!</Heading>
      <br />
      <Button onClick={logout} colorScheme="teal">Logout</Button>
      <Button onClick={openAddModal} colorScheme="green" ml={4}>
        Add
      </Button>
      <Table mt={4} variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr key={item.id}>
              <Td>{item.id}</Td>
              <Td>{item.name}</Td>
              <Td>{item.description}</Td>
              <Td>
                <Button onClick={() => handleEdit(item.id)} colorScheme="teal">Edit</Button>
                <Button onClick={() => handleDelete(item.id)} colorScheme="red">Delete</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Modal isOpen={isModalOpen} onClose={closeAddModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{edit ? 'Edit Item' : 'Add Item'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Input
                type="text"
                placeholder="Name"
                value={dataItems.name}
                onChange={(e) => setDataitems({ ...dataItems, name: e.target.value })}
              />
            </FormControl>
            <FormControl mt={4}>
              <Input
                type="text"
                placeholder="Description"
                value={dataItems.description}
                onChange={(e) => setDataitems({ ...dataItems, description: e.target.value })}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              {edit ? 'Update' : 'Add'}
            </Button>
            <Button onClick={closeAddModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}
