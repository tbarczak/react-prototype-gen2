import { useAuth0 } from '@auth0/auth0-react';
import { Container, Title, Text, Paper, Group, Stack, Code, Center, Loader } from '@mantine/core';

export function Account() {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <Center style={{ height: 400 }}>
        <Loader />
      </Center>
    );
  }

  return (
    <Container size="md" py="xl">
      <Title order={1} mb="xl">Account Information</Title>
      
      <Paper p="md" withBorder mb="xl">
        <Stack gap="md">
          <Group justify="space-between">
            <Text fw={500}>Name:</Text>
            <Text>{user?.name}</Text>
          </Group>
          
          <Group justify="space-between">
            <Text fw={500}>Email:</Text>
            <Text>{user?.email}</Text>
          </Group>
          
          <Group justify="space-between">
            <Text fw={500}>Email Verified:</Text>
            <Text>{user?.email_verified ? 'Yes' : 'No'}</Text>
          </Group>
        </Stack>
      </Paper>
      
      <Title order={2} mb="md">Auth0 Token Data</Title>
      <Paper p="md" withBorder>
        <Code block>{JSON.stringify(user, null, 2)}</Code>
      </Paper>
    </Container>
  );
}