import React, { useState } from 'react';
import { Auth } from '../Context/AuthProvider';
import { Navigate } from 'react-router-dom';
import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Link,
    Stack,
    Text,
    ButtonGroup,
    VisuallyHidden
} from '@chakra-ui/react'
import { GitHubIcon, GoogleIcon, TwitterIcon } from '../styles/Icons'

export const Ragister = () => {
    const { login, isAuthenticated } = Auth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, password);
    };

    if (isAuthenticated()) {
        return <Navigate to="/homepage" />;
    }

    const providers = [
        { name: 'Google', icon: <GoogleIcon /> },
        { name: 'Twitter', icon: <TwitterIcon /> },
        { name: 'GitHub', icon: <GitHubIcon /> },
      ]
      
    return (
        <div>
            <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
                <Stack spacing="8">
                    <Stack spacing="6">
                        {/* <Logo /> */}
                        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                            <Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
                            <Text color="fg.muted">
                                Don't have an account? <Link href="#">Sign up</Link>
                            </Text>
                        </Stack>
                    </Stack>
                    <Box
                        py={{ base: '0', sm: '8' }}
                        px={{ base: '4', sm: '10' }}
                        bg={{ base: 'transparent', sm: 'bg.surface' }}
                        boxShadow={{ base: 'none', sm: 'md' }}
                        borderRadius={{ base: 'none', sm: 'xl' }}
                    >
                        
                        <Stack spacing="6">
                        <form onSubmit={handleSubmit}>
                            <Stack spacing="5">
                                
                                <FormControl>
                                    <FormLabel >Username</FormLabel>
                                    <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                                </FormControl>
                                <FormControl id="password" mt={4}>
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </FormControl>
                            </Stack>
                            <HStack justify="space-between">
                                <Checkbox defaultChecked>Remember me</Checkbox>
                                <Button variant="text" size="sm">
                                    Forgot password?
                                </Button>
                            </HStack>
                            <Stack spacing="6">
                                <Button type='submit'>Sign in</Button>
                                <HStack>
                                    <Divider />
                                    <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                                        or continue with
                                    </Text>
                                    <Divider />
                                </HStack>
                                <ButtonGroup variant="secondary" spacing="4">
                                    {providers.map(({ name, icon }) => (
                                        <Button key={name} flexGrow={1}>
                                            <VisuallyHidden>Sign in with {name}</VisuallyHidden>
                                            {icon}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </Stack>
                            </form>
                        </Stack>
                        
                    </Box>
                </Stack>
            </Container>

        </div>
    );
};
