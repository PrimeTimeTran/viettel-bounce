import React from 'react';
import {
  Text,
  View,
  Modal,
  Easing,
  Animated ,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

export default class App extends React.Component {
  state = {
    modalVisible: false,
    animatedY: new Animated.Value(0)
  }

  openModal = () => {
    this.setState({ modalVisible: true }, this.openAnimation)
  }

  closeModal = () => {
    this.closeAnimation()
  }

  openAnimation = () => {
    const { animatedY } = this.state

    Animated.timing(animatedY, {
      toValue: -100,
      duration: 250,
      easing: Easing.elastic(1.5)
    }).start()
  }

  closeAnimation = () => {
    const { animatedY } = this.state

    Animated.timing(animatedY, {
      toValue: 0,
      duration: 250,
      easing: Easing.bezier(0, -0.2, 0, -0.4)
    }).start(() => this.setState({ modalVisible: false }))
  }

  render() {
    const {
      container,
      textStyle,
      modalStyle,
      mainButtonStyle,
      littleButtonStyle
    } = styles

    const { modalVisible, animatedY } = this.state

    const phoneButtonStyle = [
      mainButtonStyle, littleButtonStyle, {
        backgroundColor: 'blue',
        transform: [{ translateY: Animated.multiply(2, animatedY) }]
      }
    ]

    const mapButtonStyle = [
      mainButtonStyle, littleButtonStyle, {
        backgroundColor: 'orange',
        transform: [{ translateY: Animated.multiply(1.5, animatedY) }]
      }
    ]

    const infoButtonStyle = [
      mainButtonStyle, littleButtonStyle, {
        backgroundColor: 'pink',
        transform: [{ translateY: animatedY }]
      }
    ]
    return (
      <View style={container}>
        <Text>Background Text</Text>
        <Modal
          transparent
          animationType="fade"
          visible={modalVisible}
        >
          <View style={modalStyle}>
            <Animated.View style={phoneButtonStyle}>
              <TouchableHighlight>
                <Text style={textStyle}>Phone</Text>
              </TouchableHighlight>
            </Animated.View>

            <Animated.View style={mapButtonStyle}>
              <TouchableHighlight>
                <Text style={textStyle}>Maps</Text>
              </TouchableHighlight>
            </Animated.View>

            <Animated.View style={infoButtonStyle}>
              <TouchableHighlight>
                <Text style={textStyle}>Info</Text>
              </TouchableHighlight>
            </Animated.View>

            <TouchableHighlight
              style={mainButtonStyle}
              onPress={this.closeModal}
            >
              <Text style={textStyle}>Close</Text>
            </TouchableHighlight>
          </View>

        </Modal>
        <TouchableHighlight
          style={mainButtonStyle}
          onPress={this.openModal}
        >
          <Text style={textStyle}>Show</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  mainButtonStyle: {
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
  textStyle: {
    alignSelf: 'center'
  },
  littleButtonStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
  }
});