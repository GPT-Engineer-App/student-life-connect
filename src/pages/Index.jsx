import React, { useState } from "react";
import { Container, VStack, HStack, Text, Button, Input, Box, Table, Thead, Tbody, Tr, Th, Td, IconButton } from "@chakra-ui/react";
import { FaSignOutAlt, FaUserCog, FaList, FaBed, FaUsers, FaCogs } from "react-icons/fa";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Dummy login logic
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      {!isLoggedIn ? (
        <VStack spacing={4}>
          <Text fontSize="2xl">Dormitory Login</Text>
          <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button onClick={handleLogin}>Login</Button>
        </VStack>
      ) : (
        <VStack spacing={4} width="100%">
          <HStack justifyContent="space-between" width="100%">
            <Text fontSize="2xl">Dormitory Management</Text>
            <IconButton aria-label="Logout" icon={<FaSignOutAlt />} onClick={handleLogout} />
          </HStack>
          <HStack spacing={4} width="100%">
            <Button leftIcon={<FaUsers />} width="100%">
              Student List
            </Button>
            <Button leftIcon={<FaUserCog />} width="100%">
              Accounts
            </Button>
            <Button leftIcon={<FaList />} width="100%">
              Dorm List
            </Button>
            <Button leftIcon={<FaBed />} width="100%">
              Room List
            </Button>
            <Button leftIcon={<FaUsers />} width="100%">
              User List
            </Button>
            <Button leftIcon={<FaCogs />} width="100%">
              Settings
            </Button>
          </HStack>
          <Box width="100%">
            <Text fontSize="xl" mb={4}>
              Student List
            </Text>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Age</Th>
                  <Th>Room</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>John Doe</Td>
                  <Td>20</Td>
                  <Td>101</Td>
                </Tr>
                <Tr>
                  <Td>Jane Smith</Td>
                  <Td>22</Td>
                  <Td>102</Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </VStack>
      )}
    </Container>
  );
};

export default Index;
