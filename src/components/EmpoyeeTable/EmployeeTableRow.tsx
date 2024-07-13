import { IconButton, Tooltip, Zoom } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { EmployeeLineItem } from '../../interfaces/employees';
import { StyledTableRow } from './Shared/StyledTableRow';
import { StyledTableCell } from './Shared/StyledTableCell';
interface EmployeeTableRowProps {
  employee: EmployeeLineItem;
  handleEditEmployee: (employee: EmployeeLineItem) => void;
}

export const EmployeeTableRow = ({
  employee,
  handleEditEmployee,
}: EmployeeTableRowProps) => {
  return (
    <StyledTableRow>
      <StyledTableCell>{employee.name}</StyledTableCell>
      <StyledTableCell>{employee.email}</StyledTableCell>
      <StyledTableCell>{employee.phone}</StyledTableCell>
      <StyledTableCell>{employee.occupation}</StyledTableCell>
      <StyledTableCell>
        <Tooltip placement='top' title='Edit' TransitionComponent={Zoom}>
          <IconButton
            color='primary'
            size='large'
            onClick={() => handleEditEmployee(employee)}
          >
            <EditIcon
              sx={{
                fontSize: '1.1rem',
              }}
            />
          </IconButton>
        </Tooltip>
      </StyledTableCell>
    </StyledTableRow>
  );
};
