import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Modal,
  TouchableHighlight,
  Alert,
  View
} from 'react-native';

import { Container, Header, Content, Button, Text } from 'native-base';
import { ReduxAppBase } from 'next-react-native-redux';
import AppBase, { $api } from 'components/index';



export default class extends AppBase {
  static displayName = 'zbRnApp';

  static initialState() {
    return {
      memory: {
        navigation: null
      }
    }
  }

  _onPress = inAction => {
    this[inAction]();
  };

  fetch() {
    $api.login({
      username:'afei',
      password:'123123'
    }).then(resp=>{
      alert(JSON.stringify(resp));
    });
  }

  render() {
    return (
      <Container>
        <Header />
        <Content style={{ margin: 20 }}>
          <Button
            onPress={this._onPress.bind(this, 'fetch')} block>
            <Text> FetchData </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
