import { createContext, ReactNode, useContext, useState } from 'react';

export interface ErrorData {
  id: string;
  message: string;
  details?: string;
  timestamp: Date;
  severity: 'error' | 'warning' | 'info';
}

interface ErrorContextType {
  errors: ErrorData[];
  addError: (error: Omit<ErrorData, 'id' | 'timestamp'>) => void;
  removeError: (id: string) => void;
  clearErrors: () => void;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const useErrorContext = () => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error('useErrorContext must be used within an ErrorProvider');
  }
  return context;
};

interface ErrorProviderProps {
  children: ReactNode;
}

export const ErrorProvider = ({ children }: ErrorProviderProps) => {
  const [errors, setErrors] = useState<ErrorData[]>([]);

  const addError = (error: Omit<ErrorData, 'id' | 'timestamp'>) => {
    const newError: ErrorData = {
      ...error,
      id: crypto.randomUUID(),
      timestamp: new Date(),
    };

    setErrors(prevErrors => [newError, ...prevErrors]);

    // Auto-remove errors after 30 seconds
    setTimeout(() => {
      removeError(newError.id);
    }, 30000);
  };

  const removeError = (id: string) => {
    setErrors(prevErrors => prevErrors.filter(error => error.id !== id));
  };

  const clearErrors = () => {
    setErrors([]);
  };

  return (
    <ErrorContext.Provider
      value={{
        errors,
        addError,
        removeError,
        clearErrors,
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};