import { Box, Button } from '@mui/material';

interface ActionButtonsProps {
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
}

function ActionButtons({
  onPrimaryClick,
  onSecondaryClick,
}: ActionButtonsProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyItems: 'flex-end',
      }}
    >
      <Button
        variant='contained'
        color='success'
        sx={{ marginRight: 1, minWidth: 100 }}
        onClick={onPrimaryClick}
      >
        Export
      </Button>
      <Button
        sx={{ minWidth: 100 }}
        variant='contained'
        color='primary'
        onClick={onSecondaryClick}
      >
        Add
      </Button>
    </Box>
  );
}

export default ActionButtons;
