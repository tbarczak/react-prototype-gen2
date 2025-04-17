import { useAuth0 } from '@auth0/auth0-react';
import { Container, Title, Box, Button } from '@mantine/core';
import { Link } from 'react-router-dom';

export function Home() {
  const { user } = useAuth0();

  return (
    <Container size="lg" py="xl">
      <Title order={1} mb="md">Welcome {user?.name}</Title>
      
      <Box style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <img 
          src="/assets/gift-coupon.jpg" 
          width={640} 
          height={473} 
          alt="Gift Coupon" 
          style={{ maxWidth: '100%' }}
        />
      </Box>
      
      <Box style={{ display: 'flex', justifyContent: 'center' }}>
        <Button component={Link} to="/reports" color="primary">
          View Reports
        </Button>
      </Box>
    </Container>
  );
}