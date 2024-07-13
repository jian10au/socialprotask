import { Table, TableBody, TableContainer, Paper } from '@mui/material';
import { EmployeeTableRow } from './EmployeeTableRow';
import { EmployeeTableRowSkeleton } from './EmployeeTableRowSkeleton';
import { NoRows } from './NoRows';
import { EmployeeLineItem } from '../../interfaces/employees';
import { EmployeeTableHeader } from './EmployeeTableHeader';

interface EmployeeTableProps {
  loading: boolean;
  employees: EmployeeLineItem[];
  handleEditEmployee: (employee: EmployeeLineItem) => void;
}

export const EmployeeTable = ({
  loading,
  employees,
  handleEditEmployee,
}: EmployeeTableProps) => {
  const skeletonCount = employees.length > 0 ? employees.length : 1;
  return (
    <TableContainer component={Paper}>
      <Table>
        <EmployeeTableHeader />
        <TableBody>
          {loading
            ? Array.from({ length: skeletonCount }, (_, index) => (
                <EmployeeTableRowSkeleton key={index} />
              ))
            : employees?.map((row) => {
                return (
                  <EmployeeTableRow
                    key={row.id}
                    employee={row}
                    handleEditEmployee={handleEditEmployee}
                  />
                );
              })}
          {!loading && !employees.length && <NoRows title={'Employees'} />}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
