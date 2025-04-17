import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { Container, Title, Text, Button, Box, Center } from '@mantine/core';

export function Login() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <Container size="sm">
      <Box style={{ paddingTop: 50, paddingBottom: 50 }}>
        <Title order={1} ta="center" mb="lg">Reports Portal</Title>
        <Text ta="center" style={{ marginBottom: 30 }}>
          Please sign in to access your reports
        </Text>
        <Center>
          <Button
            size="lg"
            onClick={() => loginWithRedirect()}
            color="primary"
          >
            Sign In
          </Button>
        </Center>
      </Box>
    </Container>
  );
}