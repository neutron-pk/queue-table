import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  View,
  Text,
  TouchableWithoutFeedback,
  Modal,
  StyleSheet,
  Keyboard,
} from 'react-native';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

DatePickerField.propTypes = {
  mode: PropTypes.oneOf(['date', 'time']),
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  touched: PropTypes.bool,
};

DatePickerField.defaultProps = {
  mode: 'date',
  value: null,
  label: 'Label',
  onChange() {},
  error: '',
  touched: false,
};

function DatePickerField(props) {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const {label, touched, error, value, mode} = props;

  return (
    <View>
      <View style={styles.wrapper}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.inputWrapper}>
          <Text onPress={onShowDatePicker} style={styles.input}>
            {value}
          </Text>
          {touched && error ? <Text style={styles.error}>{error}</Text> : null}
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={show}
        onRequestClose={onSelectDateComplete}>
        <TouchableWithoutFeedback onPress={onSelectDateComplete}>
          <View style={styles.modal}>
            <View style={styles.datePicker}>
              <View style={styles.datePickerTop}>
                <Button
                  title="Done"
                  width={24}
                  onPress={onSelectDateComplete}
                />
              </View>
              <DateTimePicker
                testID="dateTimePicker"
                timeZoneOffsetInMinutes={0}
                value={date}
                mode={mode}
                is24Hour={true}
                display="spinner"
                onChange={onChangeDatePicker}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );

  function onShowDatePicker() {
    Keyboard.dismiss();
    setShow(true);
  }

  function onChangeDatePicker(_, selectedDate) {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  }

  function onSelectDateComplete() {
    if (mode === 'date') {
      props.onChange(moment(date).format('MMM-DD-YYYY'));
    } else if (mode === 'time') {
      props.onChange(moment(date).format('hh:mm a'));
    }
    setShow(false);
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    height: 64,
  },
  label: {
    width: 100,
    marginRight: 8,
    marginTop: 12,
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
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  datePicker: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
  },
  datePickerTop: {
    alignItems: 'flex-end',
    paddingHorizontal: 8,
    height: 48,
    borderColor: '#e8e8e8',
    borderWidth: 1,
  },
});

export default DatePickerField;
