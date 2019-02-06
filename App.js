import React from 'react'
import {
  Text,
  View,
  Alert,
  Modal,
  Easing,
  Animated,
  StyleSheet,
  TouchableHighlight,
} from 'react-native'

export default class App extends React.Component {
  state = {
    modalVisible: false,
    animateYAxis: new Animated.Value(0)
  }

  toggleModal = () => {
    this.setState({ modalVisible: true }, this.openAnimation)
  }

  closeModal = () => {
    this.closeAnimation()
  }

  openAnimation = () => {
    const { animateYAxis } = this.state

    Animated.timing(animateYAxis, {
      toValue: -100,
      duration: 250,
      easing: Easing.elastic(1.5),
    }).start()
  }

  closeAnimation = () => {
    const { animateYAxis } = this.state

    Animated.timing(animateYAxis, {
      toValue: 0,
      duration: 250,
      easing: Easing.bezier(0, -0.2, 0, -0.4),
    }).start(() => {
      this.setState({ modalVisible: false })
    })
  }

  render() {
    const {
      textStyle,
      openStyle,
      container,
      modalStyle,
      closeStyle,
      littleButtons
    } = styles

    const { animateYAxis, modalVisible } = this.state

    const animatedInfo = {
      ...littleButtons,
      backgroundColor: 'yellow',
      transform: [{ translateY:  animateYAxis }]
    }

    const addAnimatedMap = Animated.multiply(1.5, animateYAxis)

    const animatedMap = {
      ...littleButtons,
      backgroundColor: 'blue',
      transform: [{ translateY:  addAnimatedMap }]
    }

    const addAnimatedPhone = Animated.multiply(2, animateYAxis)

    const animatedPhone = {
      ...littleButtons,
      backgroundColor: 'pink',
      transform: [{ translateY:  addAnimatedPhone }]
    }

    return (
      <View style={container}>
        <Text>Some background text</Text>
        <Modal
          transparent
          animationType="fade"
          visible={modalVisible}
          onRequestClose={() => { Alert.alert('Modal has been closed.')}}>
          <View style={modalStyle}>

            <Animated.View style={[closeStyle, animatedPhone]}>
              <TouchableHighlight onPress={this.toggleModal}>
                  <Text style={textStyle}>Phone</Text>
              </TouchableHighlight>
            </Animated.View>

            <Animated.View style={[closeStyle, animatedMap]}>
              <TouchableHighlight onPress={this.toggleModal}>
                  <Text style={textStyle}>Maps</Text>
              </TouchableHighlight>
            </Animated.View>

            <Animated.View style={[closeStyle, animatedInfo]}>
              <TouchableHighlight onPress={this.toggleModal}>
                  <Text style={textStyle}>Info</Text>
              </TouchableHighlight>
            </Animated.View>

            <TouchableHighlight
              style={closeStyle}
              onPress={this.closeModal}>
                <Text style={textStyle}>Hide</Text>
            </TouchableHighlight>
          </View>
        </Modal>
        <TouchableHighlight
          onPress={this.toggleModal}
          style={openStyle}>
          <Text style={textStyle}>Show Modal</Text>
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
  textStyle: {
    alignSelf: 'center'
  },
  openStyle: {
    right: 20,
    bottom: 20,
    width: 100,
    height: 100,
    borderRadius: 50,
    position: 'absolute',
    backgroundColor: 'red',
    justifyContent: 'center'
  },
  modalStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  closeStyle: {
    right: 20,
    bottom: 20,
    width: 100,
    height: 100,
    borderRadius: 50,
    position: 'absolute',
    backgroundColor: 'red',
    justifyContent: 'center'
  },
  littleButtons: {
    width: 50,
    right: 40,
    height: 50,
    bottom: 40,
  }
})
