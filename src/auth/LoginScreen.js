import React, {
  Component
} from 'react';

import { NavigationActions } from 'react-navigation';
import FastImage from 'react-native-fast-image';

import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Button,
} from 'react-native';

import LoginForm from './LoginForm';
import session from '../common/services/session.service';
import { CommonStyle } from '../styles/Common';
import { ComponentsStyle } from '../styles/Components';

/**
 * Login screen
 */
export default class LoginScreen extends Component {
  /**
   * Disable navigation bar
   */
  static navigationOptions = {
    header: null
  }

  /**
   * Render
   */
  render() {
    const resizeMode = 'center';
    return (
      <View style={CommonStyle.flexContainer}>
        <FastImage
          resizeMode={FastImage.resizeMode.cover}
          style={ComponentsStyle.backgroundImage}
          source={require('../assets/bg-2.jpg')}
        />
        <View style={[CommonStyle.flexContainerCenter, CommonStyle.padding2x]}>
          <FastImage
            resizeMode={FastImage.resizeMode.cover}
            style={ComponentsStyle.logo}
            source={require('../assets/logos/medium-white.png')}
          />
          <LoginForm
            onLogin={() => this.login()}
            onRegister={() => this.onPressRegister()}
          />
        </View>
      </View>
    );
  }

  /**
   * On press register
   */
  onPressRegister() {
    this._navigate('Register');
  }

  /**
   * On login successful
   */
  login() {
    this._navigate('Loading');
  }

  /**
   * Navigate to screen
   * @param {string} destination
   */
  _navigate(destination) {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: destination })
      ]
    })

    this.props.navigation.dispatch(resetAction);
  }
}