import React from 'react';
import {FlatList, Alert, Button, Text, View} from 'react-native';

import {reserveListStyles as styles} from './stylesheets';

function ReserveListContainer() {
  return (
    <FlatList
      data={[]}
      renderItem={ReserveItem}
      keyExtractor={item => item.id}
      style={styles.container}
      ListEmptyComponent={ReserveListEmpty}
    />
  );
}

function ReserveItem({item}) {
  return (
    <View style={styles.itemContainer}>
      <Text>{item.title}</Text>
    </View>
  );
}

function ReserveListEmpty() {
  return (
    <View style={styles.itemEmpty}>
      <Text>No reserve</Text>
      <Button
        title="Add reserve here"
        onPress={() => Alert.alert('Reserve here"')}
      />
    </View>
  );
}

export default ReserveListContainer;
