import { TableHead, Typography } from '@mui/material';
import { StyledTableRow } from './Shared/StyledTableRow';
import { StyledTableCell } from './Shared/StyledTableCell';

export const EmployeeTableHeader = () => (
  <TableHead>
    <StyledTableRow>
      <StyledTableCell>
        <Typography>Name</Typography>
      </StyledTableCell>
      <StyledTableCell>
        <Typography>Email</Typography>
      </StyledTableCell>
      <StyledTableCell>
        <Typography>Phone</Typography>
      </StyledTableCell>
      <StyledTableCell>
        <Typography>Occupation</Typography>
      </StyledTableCell>
      <StyledTableCell>
        <Typography>Actions</Typography>
      </StyledTableCell>
    </StyledTableRow>
  </TableHead>
);

export default EmployeeTableHeader;
