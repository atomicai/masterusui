import { FC } from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export const LoadingIndicator: FC = () => (
  <Box sx={{
    display: 'flex',
    minHeight: '10em',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <CircularProgress />
  </Box>
);
