export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Transaction {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  mailing_address: Address;
  billing_address: Address;
  sku: string;
  created_date: string; // ISO format date string
  quantity: number;
  price: number;
  total: number; // Calculated field (quantity * price)
}