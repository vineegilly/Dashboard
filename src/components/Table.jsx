import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper
} from '@mui/material'

import { styled } from '@mui/system'

const StyledTableContainer = styled(TableContainer)`
  
`;

const StyledTable = styled(Table)`

`;
const StyledTableHead = styled(TableHead)`

`;
export default function MuiTable() {
  return (
    <StyledTableContainer sx={{ maxHeight: '100%' }} component={Paper}>
      <StyledTable stickyHeader aria-label='simple table'>
        <StyledTableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align='center'>Email</TableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {tableData.map(row => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align='center'>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </StyledTableContainer>
  )
}

const tableData = [
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