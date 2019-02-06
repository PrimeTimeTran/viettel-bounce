import React from 'react'
import {
  Text,
  View,
  Alert,
  Modal,
  StyleSheet,
  TouchableHighlight,
} from 'react-native'


export default class App extends React.Component {
  state = { modalVisible: false }

  toggleModal = () => {
    this.setState(({ modalVisible }) => {
      return { modalVisible: !modalVisible }
    })
  }

  render() {
    return (
      <View style={styles.container}>
      <Text>Gogogo</Text>
        <Modal
          transparent
          animationType="fade"
          visible={this.state.modalVisible}
          onRequestClose={() => { Alert.alert('Modal has been closed.')}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)'
            }}
          >
            <TouchableHighlight
              onPress={this.toggleModal}
              style={{
                right: 20,
                bottom: 20,
                width: 100,
                height: 100,
                borderRadius: 50,
                position: 'absolute',
                backgroundColor: 'red',
                justifyContent: 'center'
              }}>
                <Text style={{ alignSelf: 'center' }}>Hide</Text>
              </TouchableHighlight>
          </View>
        </Modal>
        <TouchableHighlight
          onPress={this.toggleModal}
          style={{
            right: 20,
            bottom: 20,
            width: 100,
            height: 100,
            borderRadius: 50,
            position: 'absolute',
            backgroundColor: 'red',
            justifyContent: 'center'
          }}>
          <Text style={{ alignSelf: 'center', justifyContent: 'center',  }}>Show Modal</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
