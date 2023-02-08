import { FC } from 'react';
import Alert from '@mui/material/Alert';
import { AxiosError } from 'axios';

interface ErrorDescriptionProps {
  error: Error;
}

export const ErrorDescription: FC<ErrorDescriptionProps> = ({ error }) => (
  <Alert severity="error">
    {(error as AxiosError).message || error.message}
  </Alert>
);
