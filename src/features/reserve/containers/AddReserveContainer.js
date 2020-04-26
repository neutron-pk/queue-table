import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {ReserveForm} from '../components';
import {addReserve} from '../redux';

AddReserveContainer.propTypes = {
  onAddReserve: PropTypes.func,
};

AddReserveContainer.defaultProps = {
  onAddReserve() {},
};

function AddReserveContainer({onAddReserve}) {
  const navigation = useNavigation();
  return (
    <View style={styles.form}>
      <ReserveForm onSubmit={onHandleSubmit} />
    </View>
  );

  function onHandleSubmit(data) {
    const newFormateValues = {
      ...data,
      id: `${Date.now()}`,
      numberOfTable:
        data.numberOfCustomer % 4 <= 1 ? 1 : data.numberOfCustomer % 4,
    };
    onAddReserve(newFormateValues);
    navigation.goBack();
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {onAddReserve: addReserve};

export default connect(mapStateToProps, mapDispatchToProps)(AddReserveContainer);

const styles = StyleSheet.create({
  form: {
    flex: 1,
  },
});
