import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import WebView from 'react-native-webview';

export default class App extends Component {
  state= {token: ''};
  componentDidMount() {
    const res = fetch('tokenurl', {}) // Fill this in
    const data = await request.pending;
    const token = await res.json();
    this.setState({ token });
  }

  _onMessage = async message => {
    console.log('onmessage in QuovoConnect container', message);
  };

  render() {
    const { token } = this.state;
    return (
      <View style={styles.container}>
        <WebView
          source={{
            uri: `https://connect.quovo.com/?parent-host=http://connect.quovo.com&mobile=1&token=${token}&test-institutions=1&mobile-postmessage-override=1`
          }}
          onMessage={this._onMessage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
