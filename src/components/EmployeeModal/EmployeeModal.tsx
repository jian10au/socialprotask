import { Dialog, DialogContent } from '@mui/material';
import {
  createDefaultEmployee,
  EmployeeLineItem,
} from '../../interfaces/employees';
import { EmployeeForm } from './EmployeeModalForm';

// a. consider add comments to describe the props or function of this component
interface EmployeeModalProps {
  loading: boolean;
  existingEmployee?: EmployeeLineItem;
  createEmployee: (
    employee: EmployeeLineItem,
    assignEmployee?: boolean
  ) => Promise<void>;
  updateEmployee: (employee: EmployeeLineItem) => Promise<void>;
  handleClose: () => void;
}

export default function EmployeeModal({
  loading,
  existingEmployee,
  createEmployee,
  updateEmployee,
  handleClose,
}: EmployeeModalProps) {
  const handleSubmit = async (employee: EmployeeLineItem): Promise<void> => {
    if (existingEmployee) {
      await updateEmployee(employee);
    } else {
      await createEmployee(employee);
    }
    // b. in real world, definitely need to consider ways to handle error for async functions
    handleClose();
  };

  return (
    <Dialog fullWidth open onClose={handleClose}>
      <DialogContent sx={{ paddingTop: '32px' }}>
        <EmployeeForm
          loading={loading}
          employee={existingEmployee || createDefaultEmployee()}
          handleSubmit={handleSubmit}
        />
      </DialogContent>
    </Dialog>
  );
}
