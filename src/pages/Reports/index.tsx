import { useState, useMemo } from 'react';
import { Container, Title, Table, Text, Group, UnstyledButton, Center, Loader } from '@mantine/core';
import { useMockTransactions } from '../../hooks/useMockTransactions';
import { Transaction } from '../../types/transactions';

type SortDirection = 'asc' | 'desc';

export function Reports() {
  const { transactions, isLoading } = useMockTransactions();
  const [sortBy, setSortBy] = useState<keyof Transaction>('created_date');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  const handleSort = (field: keyof Transaction) => {
    if (field === 'first_name' || field === 'last_name') {
      setSortDirection(sortBy === field && sortDirection === 'asc' ? 'desc' : 'asc');
      setSortBy(field);
    }
  };

  const sortedTransactions = useMemo(() => {
    if (!transactions.length) return [];
    
    return [...transactions].sort((a, b) => {
      if (sortBy === 'first_name' || sortBy === 'last_name') {
        const aValue = a[sortBy].toLowerCase();
        const bValue = b[sortBy].toLowerCase();
        
        if (sortDirection === 'asc') {
          return aValue.localeCompare(bValue);
        } else {
          return bValue.localeCompare(aValue);
        }
      } else if (sortBy === 'created_date') {
        const aDate = new Date(a.created_date).getTime();
        const bDate = new Date(b.created_date).getTime();
        
        if (sortDirection === 'asc') {
          return aDate - bDate;
        } else {
          return bDate - aDate;
        }
      }
      
      return 0;
    });
  }, [transactions, sortBy, sortDirection]);

  const getSortIndicator = (field: keyof Transaction) => {
    if (sortBy !== field) return null;
    return sortDirection === 'asc' ? ' ↑' : ' ↓';
  };

  if (isLoading) {
    return (
      <Center h={400}>
        <Loader />
      </Center>
    );
  }

  return (
    <Container size="xl" py="xl">
      <Title order={1} mb="xl">Transactions Report</Title>
      
      <Table striped highlightOnHover withTableBorder>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>
              <UnstyledButton onClick={() => handleSort('first_name')}>
                <Group justify="space-between">
                  <Text>First Name{getSortIndicator('first_name')}</Text>
                </Group>
              </UnstyledButton>
            </Table.Th>
            <Table.Th>
              <UnstyledButton onClick={() => handleSort('last_name')}>
                <Group justify="space-between">
                  <Text>Last Name{getSortIndicator('last_name')}</Text>
                </Group>
              </UnstyledButton>
            </Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>SKU</Table.Th>
            <Table.Th>Created Date</Table.Th>
            <Table.Th>Quantity</Table.Th>
            <Table.Th>Price</Table.Th>
            <Table.Th>Total</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {sortedTransactions.map((transaction) => (
            <Table.Tr key={transaction.id}>
              <Table.Td>{transaction.first_name}</Table.Td>
              <Table.Td>{transaction.last_name}</Table.Td>
              <Table.Td>{transaction.email}</Table.Td>
              <Table.Td>{transaction.sku}</Table.Td>
              <Table.Td>{new Date(transaction.created_date).toLocaleDateString()}</Table.Td>
              <Table.Td>{transaction.quantity}</Table.Td>
              <Table.Td>${transaction.price.toFixed(2)}</Table.Td>
              <Table.Td>${transaction.total.toFixed(2)}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Container>
  );
}