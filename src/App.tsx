import React from 'react';
import { Box } from '@mui/material';
import { EmployeeTable } from './components/EmpoyeeTable/EmployeeTable';
import { EmployeeLineItem } from './interfaces/employees';
import { useEmployee } from './hooks/useEmployee';
import EmployeeModal from './components/EmployeeModal/EmployeeModal';
import { writeEmployeesToExcel } from './utils/excel';
import ActionButtons from './components/ActionButtons';
import { PageTitle } from './components/PageTitle';

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedEmployee, setSelectedEmployee] =
    React.useState<EmployeeLineItem>();

  // a. can potentially create a pair of context provider and custom hook here. Therefore,
  // descendants of the apps components can consume it directly without some props drilling issues passing state/methods to table rows and forms.
  const { employees, createEmployee, updateEmployee, isLoading } =
    useEmployee();

  const handleExportEmployees = async () => {
    if (employees.length) {
      await writeEmployeesToExcel(employees);

      // b. might be better invoke useExcelExport and handles error based on the error state from that hook
      // c. need to handle error because this is an async function
    } else {
      alert('No employees to export');
    }
  };

  const handleAddEmployee = () => {
    setSelectedEmployee(undefined);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEmployee(undefined);
  };

  const handleEditEmployee = (employee: EmployeeLineItem) => {
    setIsModalOpen(true);
    setSelectedEmployee(employee);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Box
        sx={{
          display: { md: 'flex' },
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <PageTitle />
        <ActionButtons
          onPrimaryClick={handleExportEmployees}
          onSecondaryClick={handleAddEmployee}
        />
      </Box>
      <Box sx={{ marginTop: '32px' }}>
        <EmployeeTable
          loading={isLoading}
          employees={employees}
          handleEditEmployee={handleEditEmployee}
        />
      </Box>
      {isModalOpen && (
        <EmployeeModal
          loading={isLoading}
          existingEmployee={selectedEmployee}
          createEmployee={createEmployee}
          updateEmployee={updateEmployee}
          handleClose={handleCloseModal}
        />
      )}
    </Box>
  );
}

export default App;
