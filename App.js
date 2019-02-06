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
    const { container, mainButtonStyle, textStyle } = styles
    const { modalVisible, animatedY } = this.state

    const phoneStyle = [
      mainButtonStyle, {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'blue',
        transform: [{ translateY: Animated.multiply(2, animatedY) }]
      }
    ]

    const mapStyle = [
      mainButtonStyle, {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'orange',
        transform: [{ translateY: Animated.multiply(1.5, animatedY) }]
      }
    ]

    const infoButtonStyle = [
      mainButtonStyle, {
        width: 50,
        height: 50,
        borderRadius: 25,
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
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)'
            }}>
            <Animated.View style={phoneStyle}>
              <TouchableHighlight>
                <Text style={textStyle}>Phone</Text>
              </TouchableHighlight>
            </Animated.View>

            <Animated.View style={mapStyle}>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainButtonStyle: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 100,
    width: 100,
    backgroundColor: 'red',
    borderRadius: 50,
    justifyContent: 'center'
  },
  textStyle: {
    alignSelf: 'center'
  },
  littleButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 100,
    width: 100,
    backgroundColor: 'yellow',
    borderRadius: 50,
    justifyContent: 'center'
  }
});