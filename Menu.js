import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
} from 'react-native';

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    paddingTop: 100,
   
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 50,
  },
  item: {
    fontSize: 25,
    fontWeight: '300',
    marginTop: 2,
    paddingTop: 5,
    backgroundColor: 'red',
  },
});

export default function Menu({ onItemSelected }) {
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>

      <Text onPress={() => onItemSelected('https://m.stoloto.ru/check?int=sitemap')}  style={styles.item} > Проверить билет </Text>
 
      <Text onPress={() => onItemSelected('https://m.stoloto.ru/archive?int=sitemap')} style={styles.item} > Архив тиражей </Text>

      <Text onPress={() => onItemSelected('https://m.stoloto.ru/news?int=sitemap')} style={styles.item} > Новости </Text>
    </ScrollView>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};
