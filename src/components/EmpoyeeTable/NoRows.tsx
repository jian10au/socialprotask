import { Typography } from '@mui/material';
import { StyledTableCell } from './Shared/StyledTableCell';
import { StyledTableRow } from './Shared/StyledTableRow';

interface NoRowsProps {
  title: string;
}
export const NoRows = ({ title }: NoRowsProps) => {
  return (
    <StyledTableRow>
      <StyledTableCell colSpan={5}>
        <Typography align='center'>No {title}</Typography>
      </StyledTableCell>
    </StyledTableRow>
  );
};
