import React, {useState} from 'react';
import {
  Button,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {ReserveForm, ReserveList} from '../components';

function ReserveContainer() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ReserveList data={data} />
      <View style={styles.footer}>
        <Button title="Add queqe" onPress={() => setShowModal(true)} />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}>
        <TouchableWithoutFeedback>
          <View style={styles.modal}>
            <ReserveForm onSubmit={onSubmitForm} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );

  function onSubmitForm(value) {
    setData(prevState => [...prevState, value]);
    setShowModal(false);
  }
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  footer: {
    height: 64,
    backgroundColor: '#ffffff',
  },
});

export default ReserveContainer;
