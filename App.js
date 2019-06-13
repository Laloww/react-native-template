import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import {
  StyleSheet,
  Text, 
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';

const image = require('./assets/menu.png');

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 20,
    padding: 10, 
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class Basic extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
      currentUri: 'https://m.stoloto.ru/check?int=sitemap'
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onMenuItemSelected = item =>
    this.setState({
      isOpen: false,
      currentUri: item,
    });

  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
     let jsCode = `
                var parent = document.getElementsByTagName('head').item(0);
                var style = document.createElement('style');
                style.type = 'text/css';
                style.innerHTML = ".header, .footer, .top__panel, .banner, .container--login, .breadcrumbs {display:none}";
                parent.appendChild(style)
    `;
    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
       

          <WebView
        source={{uri: this.state.currentUri}}
        injectedJavaScript={jsCode}
        javaScriptEnabledAndroid={true}
        />
       
        <TouchableOpacity
          onPress={this.toggle}
          style={styles.button}
        >
          <Image
            source={image}
            style={{ width: 32, height: 32 }}
          />
        </TouchableOpacity>
      </SideMenu>
    );
  }
}
