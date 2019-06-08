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
import TopNavBar from '../components/TopNavBar';
import mainStyles from '../constants/MainStyles';
import { MonoText } from '../components/StyledText';
let fullWidth = Dimensions.get('window').width;
let fullHeight = Dimensions.get('window').height;
let cardHeight = 100;
let headerImageWidth = fullWidth * .45;

import { ExpoLinksView } from '@expo/samples';

//import mainStyles from '../constants/mainStyles';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
    header:null,
  };

  render() {
    return (

      <View style={styles.mainContainer}>
      <TopNavBar/>
      <ScrollView style={[styles.container,{flex:1}]}>


        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}

      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#5cdb95',
    paddingTop:35,
    margin:0,
  },
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
