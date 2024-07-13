import { useFormik } from 'formik';
import * as yup from 'yup';
import { Grid, TextField, Button, Typography } from '@mui/material';
import { EmployeeLineItem } from '../../interfaces/employees';

interface EmployeeFormProps {
  loading: boolean;
  employee: EmployeeLineItem;
  handleSubmit: (employee: EmployeeLineItem) => Promise<void>;
}

export const EmployeeForm = ({
  loading,
  employee,
  handleSubmit,
}: EmployeeFormProps) => {
  // a. consider move this validation schema into its own file for better organization
  const validationSchema = yup.object({
    name: yup.string().required(),
    // b. consider create custom validator to check if email or phone number is already existent
    email: yup.string().email().required(),
    phone: yup
      .number()
      .typeError('phone number must be a whole number')
      .positive()
      .integer('phone must be a whole number')
      .required(),
    occupation: yup.string().required(),
  });

  // c. we can destructure the formik object to simply access to its keys
  const formik = useFormik({
    initialValues: {
      name: employee.name,
      email: employee.email,
      phone: employee.phone,
      occupation: employee.occupation,
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await handleSubmit({
        ...employee,
        name: values.name,
        email: values.email,
        phone: values.phone,
        occupation: values.occupation,
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Typography variant='h5'>Employee Form</Typography>
      <Grid container spacing={3} mt={1}>
        {/* d. consider having a field config varibale such as array of object and loop through that to avoid repetition */}
        <Grid item xs={12} sm={6}>
          <TextField
            id='name'
            name='name'
            label='Name'
            fullWidth
            disabled={loading}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name ? formik.errors.name : ''}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='email'
            name='email'
            label='Email'
            fullWidth
            disabled={loading}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email ? formik.errors.email : ''}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='phone'
            name='phone'
            label='Phone'
            fullWidth
            disabled={loading}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone ? formik.errors.phone : ''}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='occupation'
            name='occupation'
            label='Occupation'
            fullWidth
            disabled={loading}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.occupation}
            error={
              formik.touched.occupation && Boolean(formik.errors.occupation)
            }
            helperText={
              formik.touched.occupation ? formik.errors.occupation : ''
            }
          />
        </Grid>
        <Grid item xs={6} sm={6} />
        <Grid
          item
          xs={12}
          sm={12}
          sx={{
            display: 'flex !important',
            justifyContent: 'right !important;',
          }}
        >
          <Button
            type='submit'
            variant='contained'
            disabled={formik.isSubmitting || loading}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
