import * as Yup from 'yup';

const ReserveSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  phoneNumber: Yup.string()
    .min(8, 'Put Phone number between 8 - 10')
    .required('Phone number is required'),
  date: Yup.string().required('Date is required'),
  timeIn: Yup.string().required('Time is required'),
  timeOut: Yup.string().required('Time is required'),
  numberOfCustomer: Yup.string().matches(/^[0-9]+$/, 'Must be only digits'),
});

export default ReserveSchema;
