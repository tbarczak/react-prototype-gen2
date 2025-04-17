import { useState, useEffect } from 'react';
import { Transaction } from '../types/transactions';
import { fetchTransactions } from '../mocks/transactionData';

export const useMockTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getTransactions = async () => {
      setIsLoading(true);
      try {
        const data = await fetchTransactions();
        setTransactions(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch transactions');
        console.error('Error fetching transactions:', err);
      } finally {
        setIsLoading(false);
      }
    };

    getTransactions();
  }, []);

  return { transactions, isLoading, error };
};