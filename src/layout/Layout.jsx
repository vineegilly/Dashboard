import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TableNav from '../components/TableNav';

export default function ColumnsGrid() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TableNav />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
