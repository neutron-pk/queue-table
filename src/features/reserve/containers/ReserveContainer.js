import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {ReserveList} from '../components';

ReserveContainer.propTypes = {
  list: PropTypes.array,
};

ReserveContainer.defaultProps = {
  list: [],
};

function ReserveContainer({list}) {
  const navigation = useNavigation();
  return (
    <>
      <ReserveList data={list} />
      <View style={styles.footer}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Add Reverve')}>
          <View style={styles.iconButton}>
            <Icon name="plus-circle" size={48} color="#ffffff" />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
}

const mapStateToProps = state => ({
  list: state.reserve.data,
});

export default connect(mapStateToProps)(ReserveContainer);

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 48,
    right: 16,
  },
  iconButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#007aff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
