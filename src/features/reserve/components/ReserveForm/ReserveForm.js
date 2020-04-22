import React from 'react';
import PropTypes from 'prop-types';
import {Button, Text, View, StyleSheet} from 'react-native';
import {Formik} from 'formik';

import {TextField, DatePickerField} from '../../../../components';
import schema from './schema';

ReserveForm.propTypes = {
  onSubmit: PropTypes.func,
};

ReserveForm.defaultProps = {
  onSubmit() {},
};

function ReserveForm(props) {
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
      onSubmit={onHandleSubmit}
      validationSchema={schema}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text>Add Queue</Text>
          </View>
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
            label="No. Customer"
            onChangeText={handleChange('numberOfCustomer')}
            onBlur={handleBlur('numberOfCustomer')}
            value={values.numberOfCustomer}
            error={errors.numberOfCustomer}
            touched={touched.numberOfCustomer}
            keyboardType="number-pad"
          />
          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  );

  function onHandleSubmit(values) {
    const newFormateValues = {
      ...values,
      id: `${Date.now()}`,
      numberOfTable:
        values.numberOfCustomer % 4 <= 1 ? 1 : values.numberOfCustomer % 4,
    };
    return props.onSubmit(newFormateValues);
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    margin: 8,
    borderWidth: 1,
    borderColor: '#666666',
  },
  header: {
    height: 32,
    justifyContent: 'center',
    marginBottom: 16,
  },
});

export default ReserveForm;
