import * as React from 'react';
import { EmployeeLineItem } from '../interfaces/employees';
import { sleep } from '../utils/sleep';

export const useEmployee = () => {
  const [employees, setEmployees] = React.useState<EmployeeLineItem[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  const listEmployees = async (): Promise<void> => {
    try {
      setIsLoading(true);
      await sleep(2000);
      setEmployees([] as EmployeeLineItem[]);
    } catch (e: any) {
      setError('Could not list employees');
    } finally {
      setIsLoading(false);
    }
  };

  // consider wrapping the function createEmployee and updateEmployee in a useCallback function
  // see react doc https://react.dev/reference/react/useCallback#optimizing-a-custom-hook
  const createEmployee = async (employee: EmployeeLineItem): Promise<void> => {
    try {
      setIsLoading(true);
      await sleep(2000);
      setEmployees([...employees, { ...employee }]);
    } catch (e: any) {
      setError('Could not create employee');
    } finally {
      setIsLoading(false);
    }
  };

  const updateEmployee = async (employee: EmployeeLineItem): Promise<void> => {
    try {
      setIsLoading(true);
      await sleep(2000);
      setEmployees((prevEmployees) =>
        prevEmployees.map((empl) => (empl.id === employee.id ? employee : empl))
      );
    } catch (e: any) {
      setError('Could not update employee');
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    listEmployees();
  }, []);

  return {
    employees,
    createEmployee,
    updateEmployee,
    isLoading,
    error,
  };
};
