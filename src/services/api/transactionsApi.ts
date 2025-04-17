import { Transaction } from '../../types/transactions';
import { PaginatedResponse } from '../../types';

interface TransactionFilters {
  first_name?: string;
  last_name?: string;
  email?: string;
  sku?: string;
  created_date_from?: string;
  created_date_to?: string;
  min_price?: number;
  max_price?: number;
}

/**
 * Transactions API Service
 * Handles all API interactions related to transaction data
 */
export class TransactionsApiService {
  /**
   * Fetch transactions with optional filtering, sorting, and pagination
   */
  public async getTransactions(
    _filters?: TransactionFilters,
    sortField: keyof Transaction = 'created_date',
    sortDirection: 'asc' | 'desc' = 'desc',
    page: number = 1,
    pageSize: number = 20
  ): Promise<PaginatedResponse<Transaction>> {
    try {
      // Mock implementation (temporary)
      const { getSortedTransactions } = await import('../../mocks/transactionData');
      const allTransactions = getSortedTransactions(sortField, sortDirection);
      
      // Apply mock pagination
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const paginatedItems = allTransactions.slice(startIndex, endIndex);
      
      // Simulate API response format
      return {
        items: paginatedItems,
        total: allTransactions.length,
        page,
        pageSize,
        totalPages: Math.ceil(allTransactions.length / pageSize)
      };
    } catch (error) {
      // Structured error handling
      throw new Error('Error fetching transactions');
    }
  }

  /**
   * Get transaction by ID
   */
  public async getTransactionById(id: string): Promise<Transaction> {
    try {
      const { MOCK_TRANSACTIONS } = await import('../../mocks/transactionData');
      const transaction = MOCK_TRANSACTIONS.find(t => t.id === id);
      
      if (!transaction) {
        throw new Error(`Transaction with ID ${id} not found`);
      }
      
      return transaction;
    } catch (error) {
      throw new Error(`Transaction with ID ${id} could not be retrieved`);
    }
  }
}

// Export singleton instance
export const transactionsApi = new TransactionsApiService();