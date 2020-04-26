import React from 'react';
import PropTypes from 'prop-types';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

SummaryReserveList.propTypes = {
  data: PropTypes.array,
};

SummaryReserveList.defaultProps = {
  data: [],
};

function SummaryReserveList(props) {
  return (
    <FlatList
      data={props.data}
      renderItem={ReserveItem}
      keyExtractor={item => item.id}
      style={styles.container}
      extraData={props.data}
    />
  );
}

function ReserveItem({item}) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.contentText}>{`Date: ${item.date}`}</Text>
      <Text style={styles.descriptionText}>
        {`Number of Table: ${item.totalTables}`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fafafa',
    marginVertical: 8,
    borderRadius: 12,
    borderColor: '#999999',
    borderWidth: 1,
  },
  contentText: {
    fontSize: 16,
    lineHeight: 20,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 18,
    color: '#333333',
    marginTop: 8,
  },
});

export default SummaryReserveList;
