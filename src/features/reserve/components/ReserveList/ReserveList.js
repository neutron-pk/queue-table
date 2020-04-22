import React from 'react';
import PropTypes from 'prop-types';
import {FlatList, Text, View, StyleSheet} from 'react-native';

ReserveList.propTypes = {
  data: PropTypes.array,
};

ReserveList.defaultProps = {
  data: [],
};

function ReserveList(props) {
  return (
    <FlatList
      data={props.data}
      renderItem={ReserveItem}
      keyExtractor={item => item.id}
      style={styles.container}
      ListEmptyComponent={ReserveListEmpty}
      extraData={props.data}
    />
  );
}

function ReserveItem({item}) {
  return (
    <View style={styles.itemContainer}>
      <Text>{`Customer: ${item.name}`}</Text>
      <Text>{`Phone Number: ${item.name}`}</Text>
      <View style={styles.itemGroup}>
        <Text>{`Date: ${item.date}`}</Text>
        <Text>{`Period: ${item.timeIn} - ${item.timeOut}`}</Text>
      </View>
      <View style={styles.itemGroup}>
        <Text>{`Number of Customer: ${item.numberOfCustomer}`}</Text>
        <Text>{`Number of Table: ${item.numberOfTable}`}</Text>
      </View>
    </View>
  );
}

function ReserveListEmpty() {
  return (
    <View style={styles.itemEmpty}>
      <Text>No reserve</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    minHeight: 80,
    padding: 8,
    backgroundColor: '#fafafa',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    borderColor: '#e8e8e8',
  },
  itemGroup: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  itemEmpty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    padding: 8,
  },
});

export default ReserveList;
