import { Container, Title, Text, Button, Box, Center } from '@mantine/core';
import { Link } from 'react-router-dom';

export function LoggedOut() {
  return (
    <Container size="sm">
      <Box style={{ paddingTop: 50, paddingBottom: 50 }}>
        <Title order={1} ta="center" mb="lg">Successfully Logged Out</Title>
        <Text ta="center" style={{ marginBottom: 30 }}>
          You have been successfully logged out of the Reports Portal.
        </Text>
        <Center>
          <Button
            component={Link}
            to="/login"
            size="md"
            color="primary"
          >
            Return to Login
          </Button>
        </Center>
      </Box>
    </Container>
  );
}