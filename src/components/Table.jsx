import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const rows = [
  {
    id: 1,
    first_name: 'Beret',
    last_name: 'Lennard',
    email: 'blennard0@pcworld.com',
    gender: 'Female',
    ip_address: '213.196.192.52'
  },
  {
    id: 2,
    first_name: 'Tera',
    last_name: 'Choke',
    email: 'tchoke1@theatlantic.com',
    gender: 'Male',
    ip_address: '101.152.241.70'
  },
  {
    id: 3,
    first_name: 'Lyn',
    last_name: 'Bowart',
    email: 'lbowart2@odnoklassniki.ru',
    gender: 'Male',
    ip_address: '188.127.126.94'
  },
  {
    id: 4,
    first_name: 'Bert',
    last_name: 'Huckett',
    email: 'bhuckett3@tinypic.com',
    gender: 'Female',
    ip_address: '247.156.243.148'
  },
  {
    id: 5,
    first_name: 'Drew',
    last_name: 'Jenicke',
    email: 'djenicke4@businessinsider.com',
    gender: 'Male',
    ip_address: '0.185.35.172'
  },
  
]

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'first_name', headerName: 'First name', width: 130 },
  { field: 'last_name', headerName: 'Last name', width: 130 },
  { field: 'email', headerName: 'Last name', width: 130 },
  { field: 'gender', headerName: 'Last name', width: 130, sortable: false },
  { field: 'ip_address', headerName: 'Last name', width: 130, sortable: false },
];

export default function MuiTable() {
  return (
    <DataGrid
      sx={{
        border: '0',
        color: '#605a54',
        '.MuiDataGrid-columnHeaders': {
          background: '#fef4ea',
        },
      }}
      rows={rows}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10]}
      checkboxSelection
      hideFooter={true}
    />
  );
}