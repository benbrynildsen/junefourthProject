import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { WebBrowser } from 'expo';
import {Card} from 'react-native-elements';
import mainStyles from '../constants/MainStyles';
import { MonoText } from '../components/StyledText';
let fullWidth = Dimensions.get('window').width;
let fullHeight = Dimensions.get('window').height;
let cardHeight = 100;
let headerImageWidth = fullWidth * .45;

export default class TopNavBar extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Image
        style={styles.headerImage}
        source={require('../assets/images/header1.png')}
      />

    );
  }

}

const styles = StyleSheet.create({

  headerImage:{
    width:headerImageWidth,
    position:'absolute',
    alignSelf:'center',
    resizeMode:'contain',
    marginTop:-38,
    overflow:'visible',

  },
});
