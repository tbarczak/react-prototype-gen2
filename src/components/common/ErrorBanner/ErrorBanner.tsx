import { useEffect, useState } from 'react';
import { Box, CloseButton, Group, Stack, Text } from '@mantine/core';
import { useErrorContext, ErrorData } from '../../../context/ErrorContext';

export const ErrorBanner = () => {
  const { errors, removeError } = useErrorContext();
  const [visible, setVisible] = useState(true);

  // Reset visibility when new errors come in
  useEffect(() => {
    if (errors.length > 0) {
      setVisible(true);
    }
  }, [errors]);

  if (!visible || errors.length === 0) {
    return null;
  }

  const getBackgroundColor = (severity: ErrorData['severity']) => {
    switch (severity) {
      case 'error':
        return '#CC4B24';
      case 'warning':
        return '#F1BE49';
      case 'info':
        return '#317039';
      default:
        return '#CC4B24';
    }
  };

  return (
    <Box
      style={{
        position: 'fixed',
        bottom: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        width: '80%',
        maxWidth: '600px',
      }}
    >
      <Stack gap="xs">
        {errors.map((error) => (
          <Box
            key={error.id}
            p="md"
            style={{
              backgroundColor: getBackgroundColor(error.severity),
              borderRadius: '4px',
              color: 'white',
            }}
            role="alert"
          >
            <Group justify="space-between">
              <Text fw={600}>{error.message}</Text>
              <CloseButton
                color="white"
                onClick={() => removeError(error.id)}
                aria-label="Close error message"
              />
            </Group>
            {error.details && <Text size="sm">{error.details}</Text>}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};