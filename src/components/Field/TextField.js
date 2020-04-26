import React from 'react';
import PropTypes from 'prop-types';
import {TextInput, View, Text, StyleSheet} from 'react-native';

TextField.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  touched: PropTypes.bool,
};

TextField.defaultProps = {
  label: 'Label',
  error: '',
  touched: false,
};

function TextField(props) {
  const {label, error, touched, ...textInputProps} = props;
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          {...textInputProps}
          returnKeyType="done"
          style={styles.input}
        />
        {touched && error ? <Text style={styles.error}>{error}</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    height: 64,
  },
  label: {
    width: 100,
    marginRight: 8,
    marginTop: 4,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  input: {
    backgroundColor: '#ffffff',
    height: 32,
    padding: 8,
    borderColor: '#666666',
    borderWidth: 1,
    borderRadius: 8,
  },
  error: {
    marginTop: 8,
    color: '#ff0000',
  },
});

export default TextField;
