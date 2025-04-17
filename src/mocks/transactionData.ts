import { Transaction } from '../types/transactions';

export const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: '1001',
    first_name: 'John',
    last_name: 'Smith',
    email: 'john.smith@example.com',
    mailing_address: {
      street: '123 Main St',
      city: 'Boston',
      state: 'MA',
      zipCode: '02115',
      country: 'USA'
    },
    billing_address: {
      street: '123 Main St',
      city: 'Boston',
      state: 'MA',
      zipCode: '02115',
      country: 'USA'
    },
    sku: 'WIDGET-001',
    created_date: '2023-11-15T14:23:45Z',
    quantity: 2,
    price: 19.99,
    total: 39.98
  },
  {
    id: '1002',
    first_name: 'Jane',
    last_name: 'Doe',
    email: 'jane.doe@example.com',
    mailing_address: {
      street: '456 Elm St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'USA'
    },
    billing_address: {
      street: '456 Elm St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'USA'
    },
    sku: 'GADGET-002',
    created_date: '2023-10-28T09:12:33Z',
    quantity: 1,
    price: 49.99,
    total: 49.99
  },
  {
    id: '1003',
    first_name: 'Robert',
    last_name: 'Johnson',
    email: 'robert.johnson@example.com',
    mailing_address: {
      street: '789 Oak Ave',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601',
      country: 'USA'
    },
    billing_address: {
      street: '789 Oak Ave',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601',
      country: 'USA'
    },
    sku: 'TOOL-003',
    created_date: '2023-12-01T16:45:10Z',
    quantity: 3,
    price: 29.99,
    total: 89.97
  },
  {
    id: '1004',
    first_name: 'Emily',
    last_name: 'Wilson',
    email: 'emily.wilson@example.com',
    mailing_address: {
      street: '321 Pine Rd',
      city: 'Seattle',
      state: 'WA',
      zipCode: '98101',
      country: 'USA'
    },
    billing_address: {
      street: '321 Pine Rd',
      city: 'Seattle',
      state: 'WA',
      zipCode: '98101',
      country: 'USA'
    },
    sku: 'DEVICE-004',
    created_date: '2023-11-20T11:32:17Z',
    quantity: 1,
    price: 129.99,
    total: 129.99
  },
  {
    id: '1005',
    first_name: 'Michael',
    last_name: 'Brown',
    email: 'michael.brown@example.com',
    mailing_address: {
      street: '555 Maple Dr',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94102',
      country: 'USA'
    },
    billing_address: {
      street: '555 Maple Dr',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94102',
      country: 'USA'
    },
    sku: 'ACCESSORY-005',
    created_date: '2023-12-10T13:21:05Z',
    quantity: 5,
    price: 9.99,
    total: 49.95
  },
  {
    id: '1006',
    first_name: 'Sarah',
    last_name: 'Davis',
    email: 'sarah.davis@example.com',
    mailing_address: {
      street: '777 Cherry Ln',
      city: 'Austin',
      state: 'TX',
      zipCode: '73301',
      country: 'USA'
    },
    billing_address: {
      street: '777 Cherry Ln',
      city: 'Austin',
      state: 'TX',
      zipCode: '73301',
      country: 'USA'
    },
    sku: 'SOFTWARE-006',
    created_date: '2023-10-15T10:05:23Z',
    quantity: 1,
    price: 79.99,
    total: 79.99
  },
  {
    id: '1007',
    first_name: 'David',
    last_name: 'Miller',
    email: 'david.miller@example.com',
    mailing_address: {
      street: '888 Willow Ct',
      city: 'Denver',
      state: 'CO',
      zipCode: '80201',
      country: 'USA'
    },
    billing_address: {
      street: '888 Willow Ct',
      city: 'Denver',
      state: 'CO',
      zipCode: '80201',
      country: 'USA'
    },
    sku: 'HARDWARE-007',
    created_date: '2023-11-05T15:42:36Z',
    quantity: 2,
    price: 45.99,
    total: 91.98
  },
  {
    id: '1008',
    first_name: 'Jennifer',
    last_name: 'Taylor',
    email: 'jennifer.taylor@example.com',
    mailing_address: {
      street: '999 Spruce St',
      city: 'Philadelphia',
      state: 'PA',
      zipCode: '19102',
      country: 'USA'
    },
    billing_address: {
      street: '999 Spruce St',
      city: 'Philadelphia',
      state: 'PA',
      zipCode: '19102',
      country: 'USA'
    },
    sku: 'SUBSCRIPTION-008',
    created_date: '2023-12-15T09:23:11Z',
    quantity: 1,
    price: 199.99,
    total: 199.99
  },
  {
    id: '1009',
    first_name: 'William',
    last_name: 'Anderson',
    email: 'william.anderson@example.com',
    mailing_address: {
      street: '111 Cedar Ave',
      city: 'Miami',
      state: 'FL',
      zipCode: '33101',
      country: 'USA'
    },
    billing_address: {
      street: '111 Cedar Ave',
      city: 'Miami',
      state: 'FL',
      zipCode: '33101',
      country: 'USA'
    },
    sku: 'EQUIPMENT-009',
    created_date: '2023-11-30T14:15:27Z',
    quantity: 1,
    price: 299.99,
    total: 299.99
  },
  {
    id: '1010',
    first_name: 'Elizabeth',
    last_name: 'Thomas',
    email: 'elizabeth.thomas@example.com',
    mailing_address: {
      street: '222 Birch Blvd',
      city: 'Portland',
      state: 'OR',
      zipCode: '97201',
      country: 'USA'
    },
    billing_address: {
      street: '222 Birch Blvd',
      city: 'Portland',
      state: 'OR',
      zipCode: '97201',
      country: 'USA'
    },
    sku: 'BUNDLE-010',
    created_date: '2023-12-05T12:33:45Z',
    quantity: 1,
    price: 149.99,
    total: 149.99
  }
];

// Utility functions for sorting and simulated API fetching
export const getSortedTransactions = (
  sortField: keyof Transaction = 'created_date',
  sortDirection: 'asc' | 'desc' = 'desc'
): Transaction[] => {
  return [...MOCK_TRANSACTIONS].sort((a, b) => {
    if (typeof a[sortField] === 'string' && typeof b[sortField] === 'string') {
      const aValue = (a[sortField] as string).toLowerCase();
      const bValue = (b[sortField] as string).toLowerCase();
      
      if (sortDirection === 'asc') {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    } else if (sortField === 'created_date') {
      const aDate = new Date(a.created_date).getTime();
      const bDate = new Date(b.created_date).getTime();
      
      if (sortDirection === 'asc') {
        return aDate - bDate;
      } else {
        return bDate - aDate;
      }
    } else if (typeof a[sortField] === 'number' && typeof b[sortField] === 'number') {
      const aValue = a[sortField] as number;
      const bValue = b[sortField] as number;
      
      if (sortDirection === 'asc') {
        return aValue - bValue;
      } else {
        return bValue - aValue;
      }
    }
    
    return 0;
  });
};

// Simulated API fetching with delay
export const fetchTransactions = (): Promise<Transaction[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getSortedTransactions('created_date', 'desc'));
    }, 500); // Simulate network delay
  });
};

export const fetchTransactionById = (id: string): Promise<Transaction | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_TRANSACTIONS.find(t => t.id === id));
    }, 300);
  });
};