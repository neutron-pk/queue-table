import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Formik} from 'formik';

import {TextField, DatePickerField} from '../../../../components';
import schema from './schema';

ReserveForm.propTypes = {
  onSubmit: PropTypes.func,
};

ReserveForm.defaultProps = {
  onSubmit() {},
};

function ReserveForm({onSubmit}) {
  const initialValues = {
    name: '',
    phoneNumber: '',
    date: '',
    timeIn: '',
    timeOut: '',
    numberOfCustomer: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={schema}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View style={styles.container}>
          <TextField
            label="Customer Name"
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
            error={errors.name}
            touched={touched.name}
            maxLength={255}
          />
          <TextField
            label="Phone number"
            onChangeText={handleChange('phoneNumber')}
            onBlur={handleBlur('phoneNumber')}
            value={values.phoneNumber}
            error={errors.phoneNumber}
            touched={touched.phoneNumber}
            keyboardType="number-pad"
            maxLength={10}
          />
          <DatePickerField
            label="Reserve Date"
            onChange={handleChange('date')}
            value={values.date}
            error={errors.date}
            touched={touched.date}
            mode="date"
          />
          <DatePickerField
            label="Start time"
            onChange={handleChange('timeIn')}
            value={values.timeIn}
            error={errors.timeIn}
            touched={touched.timeIn}
            mode="time"
          />
          <DatePickerField
            label="End time"
            onChange={handleChange('timeOut')}
            value={values.timeOut}
            error={errors.timeOut}
            touched={touched.timeOut}
            mode="time"
          />
          <TextField
            label="Number of Customer"
            onChangeText={handleChange('numberOfCustomer')}
            onBlur={handleBlur('numberOfCustomer')}
            value={values.numberOfCustomer}
            error={errors.numberOfCustomer}
            touched={touched.numberOfCustomer}
            keyboardType="number-pad"
          />
          <View style={styles.footer}>
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    margin: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#999999',
  },
  footer: {
    alignItems: 'center',
  },
  button: {
    width: 100,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#007aff',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    color: '#ffffff',
  },
});

export default ReserveForm;
