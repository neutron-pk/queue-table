import React from 'react';
import PropTypes from 'prop-types';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
      <View style={styles.profile}>
        <View style={styles.profileIcon}>
          <Icon name="user" color="#ffffff" size={24} />
        </View>
        <View>
          <Text style={styles.contentText}>{`Name: ${item.name}`}</Text>
          <Text style={styles.contentText}>{`Phone: ${item.phoneNumber}`}</Text>
        </View>
      </View>
      <Text style={styles.descriptionText}>{`Date: ${item.date}`}</Text>
      <Text style={styles.descriptionText}>
        {`Time: ${item.timeIn} - ${item.timeOut}`}
      </Text>
      <Text style={styles.descriptionText}>
        {`Number of Customer: ${item.numberOfCustomer}`}
      </Text>
      <Text style={styles.descriptionText}>
        {`Number of Table: ${item.numberOfTable}`}
      </Text>
    </View>
  );
}

function ReserveListEmpty() {
  return (
    <View style={styles.itemEmpty}>
      <Text>No queue reserve</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  itemContainer: {
    flex: 1,
    padding: 16,
    minHeight: 80,
    backgroundColor: '#fafafa',
    marginVertical: 8,
    borderRadius: 12,
    borderColor: '#999999',
    borderWidth: 1,
  },
  itemEmpty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#999999',
    borderStyle: 'dashed',
  },
  contentText: {
    fontSize: 16,
    lineHeight: 20,
  },
  descriptionText: {
    fontSize: 12,
    lineHeight: 16,
    color: '#333333',
    marginTop: 4,
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  profileIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#007aff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
});

export default ReserveList;
